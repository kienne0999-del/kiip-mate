"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { writingData } from "@/data/writing";
import { useLanguage } from "@/app/components/LanguageProvider";
import { writingDetailTranslations } from "@/data/translations";
export default function WritingPromptPage() {
  const params = useParams();

  const level = params.level as string;
  const promptId = Number(params.prompt);

  const prompts = useMemo(() => {
    return writingData[level as keyof typeof writingData] ?? [];
  }, [level]);

  const prompt = prompts.find((item) => item.id === promptId);

  const [answer, setAnswer] = useState("");
  const [showHints, setShowHints] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const { language } = useLanguage();
const text =
  writingDetailTranslations[language] ||
  writingDetailTranslations.vi;
function saveWriting() {
  if (!answer.trim()) {
    alert(text.emptyAnswerAlert);
    return;
  }
localStorage.setItem(
  "lastWritingPath",
  `/levels/${level}/writing/${promptId}`
);
  const oldHistory = JSON.parse(
    localStorage.getItem("writingHistory") || "[]"
  );

  const newItem = {
    id: Date.now(),
    level,
    promptId,
    title: prompt?.title || "",
    answer,
    characterCount: answer.length,
    date: new Date().toLocaleString(),
  };

  const newHistory = [
    newItem,
    ...oldHistory,
  ].slice(0, 20);

  localStorage.setItem(
    "writingHistory",
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
         {text.levelLabel} {level} | {text.writingLabel}
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {text.promptLabel} {prompt.id}: {title}
        </h1>

        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-xl font-semibold">
            {prompt.prompt}
          </p>

          <p className="mt-3 text-slate-500">
            {translation}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              {text.yourWritingLabel}
            </h2>

            <span className="text-sm text-slate-500">
             {answer.length} {text.characterLabel}
            </span>
          </div>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
           placeholder={text.placeholder}
            className="mt-4 min-h-[280px] w-full resize-y rounded-xl border p-4 outline-none focus:border-blue-500"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => setShowHints(!showHints)}
              className="rounded-lg border bg-white px-4 py-2"
            >
            {showHints ? text.hideHintsButton : text.showHintsButton}
            </button>

            <button
              onClick={() => setShowSample(!showSample)}
              className="rounded-lg border bg-white px-4 py-2"
            >
              {showSample ? text.hideSampleButton : text.showSampleButton}
            </button><button
  onClick={saveWriting}
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
             {text.sampleTitle}
            </h2>

            <p className="mt-4 whitespace-pre-line leading-7">
              {sample}
            </p>
          </div>
        )}

      </div>
    </main>
  );
}