"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import { learnListTranslations } from "@/data/translations";

export default function LearnLevelNotFound() {
  const { language } = useLanguage();

  const text =
    learnListTranslations[language] ||
    learnListTranslations.vi;

  return (
    <h1 className="text-3xl font-bold">
      {text.notFoundText}
    </h1>
  );
}
