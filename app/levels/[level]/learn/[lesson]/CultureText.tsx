"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import { lessonTranslations } from "@/data/lessonTranslations";

type CultureTextProps = {
  level: string;
  lesson: string;
  culture: string;
};

export default function CultureText({
  level,
  lesson,
  culture,
}: CultureTextProps) {
  const { language } = useLanguage();

  const translatedCulture =
    lessonTranslations[level]?.[lesson]?.[language]?.culture;

  return (
    <p className="mt-4 text-slate-600">
      {translatedCulture || culture}
    </p>
  );
}