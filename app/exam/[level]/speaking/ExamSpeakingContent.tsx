"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { examSpeakingTranslations } from "@/data/translations";
import { speakingData } from "@/data/speaking";

type ExamSpeakingContentProps = {
  level: string;
};

export default function ExamSpeakingContent({
  level,
}: ExamSpeakingContentProps) {
  const { language } = useLanguage();

  const text =
    examSpeakingTranslations[language] ||
    examSpeakingTranslations.vi;
   const prompt = useMemo(() => {
  const levelPrompts =
    speakingData[level as keyof typeof speakingData] || [];

  if (levelPrompts.length === 0) return undefined;

  const randomIndex = Math.floor(Math.random() * levelPrompts.length);

  return levelPrompts[randomIndex];
}, [level]);

const [showHints, setShowHints] = useState(false);
const [showSample, setShowSample] = useState(false);
const [saved, setSaved] = useState(false);
const [timeLeft, setTimeLeft] = useState(600);
useEffect(() => {
  if (timeLeft <= 0) {
    if (!saved) {
      handleSave();
    }
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => Math.max(prev - 1, 0));
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft, saved]);

const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;
function handleSave() {
  if (!prompt) return;

  const savedHistory = localStorage.getItem("speakingHistory");
  const history = savedHistory ? JSON.parse(savedHistory) : [];

  const newItem = {
    id: Date.now(),
    level,
    promptId: prompt.id,
    title: prompt.title,
    question: prompt.question,
    date: new Date().toLocaleString(),
  };

  localStorage.setItem(
    "speakingHistory",
    JSON.stringify([newItem, ...history])
  );

  setSaved(true);
}
  if (!prompt) {
  return (
    <div>
      <p className="font-semibold text-blue-600">
        {text.levelLabel} {level}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {text.title}
      </h1>

      <p className="mt-4 text-slate-500">
        No speaking prompt available.
      </p>
    </div>
  );
}

const translatedQuestion =
  prompt.translations?.[
    language as keyof typeof prompt.translations
  ] || prompt.question;

const hints =
  prompt.hints?.[
    language as keyof typeof prompt.hints
  ] || [];

const sample =
  prompt.sample?.[
    language as keyof typeof prompt.sample
  ] || "";

return (
  <div>
    <p className="font-semibold text-blue-600">
      {text.levelLabel} {level}
    </p>

    <h1 className="mt-2 text-4xl font-bold">
      {text.title}
    </h1>

    <p className="mt-3 text-slate-500">
      {text.subtitle}
    </p>

    <div className="mt-6 flex justify-end">
      <div className="rounded-xl border bg-white px-5 py-3 text-right">
        <p className="text-sm text-slate-500">
          {text.timeRemainingLabel}
        </p>

        <p className="mt-1 text-2xl font-bold">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </p>
      </div>
    </div>

    <section className="mt-6 rounded-2xl border bg-white p-6">
      <p className="text-sm font-semibold text-blue-600">
        {text.questionLabel}
      </p>

      <h2 className="mt-3 text-xl font-bold">
        {prompt.question}
      </h2>

      <p className="mt-2 text-slate-500">
        {translatedQuestion}
      </p>
    </section>

    <section className="mt-6 rounded-2xl border bg-white p-6">
      <h2 className="text-xl font-bold">
        🎤 {text.title}
      </h2>

      <p className="mt-3 text-slate-500">
        {text.instruction}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
  {!saved ? (
    <button
      type="button"
      onClick={handleSave}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white"
    >
      Finish Speaking Exam
    </button>
  ) : (
    <>
      <button
        type="button"
        onClick={() => setShowHints((prev) => !prev)}
        className="rounded-lg border px-4 py-2"
      >
        {showHints
          ? text.hideHintsButton
          : text.showHintsButton}
      </button>

      <button
        type="button"
        onClick={() => setShowSample((prev) => !prev)}
        className="rounded-lg border px-4 py-2"
      >
        {showSample
          ? text.hideSampleButton
          : text.showSampleButton}
      </button>

      <div className="rounded-lg bg-green-50 px-4 py-2 font-semibold text-green-700">
        Completed
      </div>
    </>
   )}
</div>
</section>

    {showHints && (
      <section className="mt-6 rounded-2xl border bg-blue-50 p-6">
        <h2 className="text-xl font-bold">
          {text.hintsLabel}
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          {hints.map((hint, index) => (
            <li key={index}>{hint}</li>
          ))}
        </ul>
      </section>
    )}

    {showSample && (
      <section className="mt-6 rounded-2xl border bg-green-50 p-6">
        <h2 className="text-xl font-bold">
          {text.sampleLabel}
        </h2>

        <p className="mt-4 leading-7">
          {sample}
        </p>
      </section>
    )}
  </div>
);
}