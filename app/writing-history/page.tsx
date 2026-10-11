"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { writingHistoryTranslations } from "@/data/translations";
import { writingData } from "@/data/writing";
type WritingHistoryItem = {
  id: number;
  level: string;
  promptId: number;
  title: string;
  answer: string;
  characterCount: number;
  date: string;
};

export default function WritingHistoryPage() {
  const { language } = useLanguage();

const text =
  writingHistoryTranslations[language] ||
  writingHistoryTranslations.vi;
  const [history, setHistory] =
    useState<WritingHistoryItem[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem("writingHistory");

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
      "writingHistory",
      JSON.stringify(newHistory)
    );
  }
function getWritingTitle(
  level: string,
  promptId: number,
  language: string
) {
  const prompts =
    writingData[level as keyof typeof writingData] || [];

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
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <p className="font-semibold text-blue-600">
          KIIP STUDY
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {text.title}
        </h1>

        <p className="mt-3 text-slate-500">
          {text.subtitle}
        </p>

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
                     {getWritingTitle(item.level, item.promptId, language) || item.title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.date}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      deleteItem(item.id)
                    }
                    className="rounded-lg border px-3 py-2 text-sm text-red-600"
                  >
                    {text.deleteButton}
                  </button>
                </div>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="whitespace-pre-wrap leading-7">
                    {item.answer}
                  </p>
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  {item.characterCount} {text.characterUnit}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}