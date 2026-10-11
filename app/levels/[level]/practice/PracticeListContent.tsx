"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { practiceListTranslations } from "@/data/translations";
import { lessonData } from "@/data/lessons";
import { lessonTranslations } from "@/data/lessonTranslations";
type PracticeListContentProps = {
  level: string;
};

export default function PracticeListContent({
  level,
}: PracticeListContentProps) {
  const { language } = useLanguage();

  const text =
    practiceListTranslations[language] ||
    practiceListTranslations.vi;

  const levelData =
    lessonData[level as keyof typeof lessonData];

  const lessons = levelData
    ? Object.entries(levelData)
    : [];

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

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {lessons.map(([lessonId, lesson]) => (
          <Link
            key={lessonId}
            href={`/levels/${level}/practice/${lessonId}`}
            className="rounded-xl border bg-white p-5 transition hover:border-blue-500 hover:shadow-sm"
          >
            <p className="text-sm font-semibold text-blue-600">
              {text.lessonLabel} {lessonId}
            </p>

           <h2 className="mt-2 text-lg font-bold">
  {lessonTranslations[level]?.[lessonId]?.[language]?.title || lesson.title}
</h2>

            <p className="mt-3 font-semibold text-blue-600">
              {text.practiceButton} →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}