"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { speakingData } from "@/data/speaking";
import { useLanguage } from "@/app/components/LanguageProvider";
import { speakingDetailTranslations } from "@/data/translations";
export default function SpeakingPromptPage() {
  const params = useParams();

  const level = params.level as string;
  const promptId = Number(params.prompt);

  const prompts = useMemo(() => {
    return (
      speakingData[
        level as keyof typeof speakingData
      ] ?? []
    );
  }, [level]);

  const prompt = prompts.find(
    (item) => item.id === promptId
  );

  const { language } = useLanguage();
const text =
  speakingDetailTranslations[language] ||
  speakingDetailTranslations.vi;
  const [showHints, setShowHints] =
    useState(false);

  const [showSample, setShowSample] =
    useState(false);

function saveSpeaking() {
localStorage.setItem(
  "lastSpeakingPath",
  `/levels/${level}/speaking/${promptId}`
);
    const oldHistory = JSON.parse(
    localStorage.getItem("speakingHistory") || "[]"
  );

  const newItem = {
    id: Date.now(),
    level,
    promptId,
    title: prompt?.title || "",
    question: prompt?.question || "",
    date: new Date().toLocaleString(),
  };

  const newHistory = [
    newItem,
    ...oldHistory,
  ].slice(0, 20);

  localStorage.setItem(
    "speakingHistory",
    JSON.stringify(newHistory)
  );

  alert(text.savedAlert);
}
 if (!prompt) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">
          {text.noPromptTitle}
        </h1>

        <p className="mt-3 text-slate-500">
          {text.noPromptSubtitle}
        </p>
      </div>
    </main>
  );
}

  const translation =
    prompt.translations[
      language as keyof typeof prompt.translations
    ] ?? prompt.translations.vi;

  const hints =
    prompt.hints[
      language as keyof typeof prompt.hints
    ] ?? prompt.hints.vi;

  const sample =
    prompt.sample[
      language as keyof typeof prompt.sample
    ] ?? prompt.sample.vi;

    const title =
  prompt.titles?.[
    language as keyof typeof prompt.titles
  ] ?? prompt.title;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        <p className="font-semibold text-blue-600">
        {text.levelLabel} {level} | {text.speakingLabel}
        </p>

        <h1 className="mt-2 text-4xl font-bold">
        {text.promptLabel} {prompt.id}: {title}
        </h1>

        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-xl font-semibold">
            {prompt.question}
          </p>

          <p className="mt-3 text-slate-500">
            {translation}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold">
          🎤 {text.answerSectionTitle}
         </h2>

          <p className="mt-3 text-slate-500">
          {text.answerSectionSubtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <button
              onClick={() =>
                setShowHints(!showHints)
              }
              className="rounded-lg border bg-white px-4 py-2"
            >
              {showHints ? text.hideHintsButton : text.showHintsButton}
            </button>

            <button
              onClick={() =>
                setShowSample(!showSample)
              }
              className="rounded-lg border bg-white px-4 py-2"
            >
              {showSample ? text.hideSampleButton : text.showSampleButton}
            </button>
<button
  onClick={saveSpeaking}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white"
>
 {text.saveButton}
</button>
          </div>
        </div>

        {showHints && (
          <div className="mt-6 rounded-2xl border bg-blue-50 p-6">

            <h2 className="text-xl font-bold">
              {text.hintSectionTitle}
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              {hints.map((hint, index) => (
                <li key={index}>
                  {hint}
                </li>
              ))}
            </ul>

          </div>
        )}

        {showSample && (
          <div className="mt-6 rounded-2xl border bg-green-50 p-6">

            <h2 className="text-xl font-bold">
  {text.sampleAnswerTitle}
</h2>
            <p className="mt-4 leading-7">
              {sample}
            </p>

          </div>
        )}

      </div>
    </main>
  );
}