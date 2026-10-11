"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { examWritingTranslations } from "@/data/translations";
import { writingData } from "@/data/writing";

type ExamWritingContentProps = {
  level: string;
};

export default function ExamWritingContent({
  level,
}: ExamWritingContentProps) {
  const { language } = useLanguage();

  const text =
    examWritingTranslations[language] ||
    examWritingTranslations.vi;

  const prompt = useMemo(() => {
  const levelPrompts =
    writingData[level as keyof typeof writingData] || [];

  if (levelPrompts.length === 0) return undefined;

  const randomIndex = Math.floor(Math.random() * levelPrompts.length);

  return levelPrompts[randomIndex];
}, [level]);

  const [answer, setAnswer] = useState("");
const [timeLeft, setTimeLeft] = useState(600);
const [submitted, setSubmitted] = useState(false);
useEffect(() => {
  if (timeLeft <= 0) {
    if (!submitted && answer.trim()) {
      handleSubmit();
    }
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft, submitted, answer]);

const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;
function handleSubmit() {
  if (!prompt || !answer.trim()) return;

  const newItem = {
    id: Date.now(),
    level,
    promptId: prompt.id,
    title: prompt.title,
    prompt: prompt.prompt,
    answer,
    characterCount: answer.length,
    date: new Date().toLocaleString(),
  };

  const saved = localStorage.getItem("writingHistory");
  const history = saved ? JSON.parse(saved) : [];

  localStorage.setItem(
    "writingHistory",
    JSON.stringify([newItem, ...history])
  );

  setSubmitted(true);
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
        No writing prompt available.
      </p>
    </div>
  );
}

  const translatedPrompt =
    prompt.translations?.[
      language as keyof typeof prompt.translations
    ] || prompt.prompt;

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
      <section className="mt-8 rounded-2xl border bg-white p-6">
        <p className="text-sm font-semibold text-blue-600">
          {text.promptLabel}
        </p>

        <h2 className="mt-3 text-xl font-bold">
          {prompt.prompt}
        </h2>

        <p className="mt-2 text-slate-500">
          {translatedPrompt}
        </p>

        <p className="mt-4 text-sm text-slate-500">
          {text.instruction}
        </p>
      </section>

      <section className="mt-6 rounded-2xl border bg-white p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold">
            {text.yourWritingLabel}
          </h2>

          <span className="text-sm text-slate-500">
            {answer.length} {text.charactersLabel}
          </span>
        </div>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={submitted}
          placeholder={text.placeholder}
          className="mt-4 min-h-64 w-full rounded-xl border p-4 outline-none"
        />

        <button
  type="button"
  onClick={handleSubmit}
  disabled={submitted || answer.trim() === ""}
  className="mt-4 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
>
 {submitted ? text.submittedLabel : text.submitButton}
</button>

{submitted && (
  <div className="mt-6 space-y-4">
    <section className="rounded-2xl border bg-blue-50 p-5">
      <h3 className="font-semibold text-blue-700">
        Hints
      </h3>

      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
        {prompt.hints?.[
          language as keyof typeof prompt.hints
        ]?.map((hint: string, index: number) => (
          <li key={index}>{hint}</li>
        ))}
      </ul>
    </section>

    <section className="rounded-2xl border bg-slate-50 p-5">
      <h3 className="font-semibold text-slate-900">
        Sample Answer
      </h3>

      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
        {prompt.sample?.[
          language as keyof typeof prompt.sample
        ] ||
          prompt.sample?.en ||
          prompt.sample?.vi}
      </p>
    </section>
  </div>
)}

</section>
    </div>
  );
}