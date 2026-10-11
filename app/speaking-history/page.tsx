"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { speakingHistoryTranslations } from "@/data/translations";
import { speakingData } from "@/data/speaking";
type SpeakingHistoryItem = {
  id: number;
  level: string;
  promptId: number;
  title: string;
  question: string;
  date: string;
};
function getSpeakingTitle(
  level: string,
  promptId: number,
  language: string
) {
  const prompts =
    speakingData[level as keyof typeof speakingData] || [];

  const prompt = prompts.find(
    (item) => item.id === promptId
  );

  return (
    prompt?.titles?.[
      language as keyof typeof prompt.titles
    ] ||
    prompt?.title ||
    ""
  );
}
export default function SpeakingHistoryPage() {
  const { language } = useLanguage();

const text =
  speakingHistoryTranslations[language] ||
  speakingHistoryTranslations.vi;
  const [history, setHistory] =
    useState<SpeakingHistoryItem[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem("speakingHistory");

    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  function deleteItem(id: number) {
    const confirmed = window.confirm(
      text.deleteConfirm
    );

    if (!confirmed) {
      return;
    }

    const newHistory = history.filter(
      (item) => item.id !== id
    );

    setHistory(newHistory);

    localStorage.setItem(
      "speakingHistory",
      JSON.stringify(newHistory)
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="font-semibold text-blue-600">
          KIIP STUDY
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {text.title}
        </h1>


        {history.length === 0 ? (
          <div className="mt-8 rounded-2xl border bg-white p-8 text-center text-slate-500">
            {text.emptyText}
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {history.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border bg-white p-6"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">
                     {text.levelLabel} {item.level}
                    </p>

                    <h2 className="mt-1 text-xl font-bold">
                      {getSpeakingTitle(item.level, item.promptId, language) || item.title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.date}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteItem(item.id)}
                    className="rounded-lg border px-3 py-2 text-sm text-red-600"
                  >
                    {text.deleteButton}
                  </button>
                </div>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="font-semibold">
  {text.questionLabel}
</p>

                  <p className="mt-2">
                    {item.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}