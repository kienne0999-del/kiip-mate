"use client";

import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import { learnListTranslations } from "@/data/translations";
import { lessonTranslations } from "@/data/lessonTranslations";
type LearnListContentProps = {
  level: string;
  lessons: {
    id: string;
    title: string;
  }[];
};

export default function LearnListContent({
  level,
  lessons,
}: LearnListContentProps) {
  const { language } = useLanguage();
const text =
  learnListTranslations[language] || learnListTranslations.vi;
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

      <div className="mt-8 grid gap-4">
        {lessons.map((lesson, index) => (
          <Link
            key={lesson.id}
            href={`/levels/${level}/learn/${lesson.id}`}
            className="rounded-xl border bg-white p-5 transition hover:border-blue-500 hover:shadow-sm"
          >
            <p className="text-sm font-semibold text-blue-600">
              {text.lessonLabel} {index + 1}
            </p>

            <h2 className="mt-1 text-xl font-bold">
  {lessonTranslations[level]?.[lesson.id]?.[language]?.title || lesson.title}
</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}