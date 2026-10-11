"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import { lessonDetailTranslations } from "@/data/translations";

type SectionType =
  | "vocabulary"
  | "grammar"
  | "dialogue"
  | "culture";

type LessonSectionTitleProps = {
  type: SectionType;
  icon?: string;
};

export default function LessonSectionTitle({
  type,
  icon = "",
}: LessonSectionTitleProps) {
  const { language } = useLanguage();

  const text =
    lessonDetailTranslations[language] ||
    lessonDetailTranslations.vi;

  return (
    <h2 className="text-2xl font-bold">
      {icon && `${icon} `}
      {text[type]}
    </h2>
  );
}