"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import { lessonDetailTranslations } from "@/data/translations";

export default function LessonNotFound() {
  const { language } = useLanguage();

  const text =
    lessonDetailTranslations[language] ||
    lessonDetailTranslations.vi;

  return (
    <>
      <h1 className="text-3xl font-bold">
        {text.noContentTitle}
      </h1>

      <p className="mt-3 text-slate-500">
        {text.noContentSubtitle}
      </p>
    </>
  );
}