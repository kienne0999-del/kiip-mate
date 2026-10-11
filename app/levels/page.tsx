"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { levelsPageTranslations } from "@/data/translations";

const levels = [
  { level: 1 },
  { level: 2 },
  { level: 3 },
  { level: 4 },
  { level: 5 },
];

export default function LevelsPage() {
const { language } = useLanguage();

const text =
  levelsPageTranslations[language] ||
  levelsPageTranslations.vi;
  return (
  <main className="min-h-screen bg-slate-50 px-6 py-12">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10">
        <p className="font-semibold text-blue-600">KIIP STUDY</p>

        <h1 className="mt-2 text-4xl font-bold">
          {text.title}
        </h1>

        <p className="mt-3 text-slate-500">
          {text.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {levels.map((item) => (
          <Link
            key={item.level}
            href={`/levels/${item.level}`}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600">
              {item.level}
            </div>

            <h2 className="text-xl font-bold">
              {text.levelLabel} {item.level}
            </h2>

            <p className="mt-2 text-slate-500">
              {
                text.descriptions[
                  item.level.toString() as keyof typeof text.descriptions
                ]
              }
            </p>

            <p className="mt-5 font-medium text-blue-600">
              {text.viewContentLabel} →
            </p>
          </Link>
        ))}
      </div>
    </div>
  </main>
);
}