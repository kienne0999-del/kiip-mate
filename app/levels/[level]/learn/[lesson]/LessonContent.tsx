"use client";
import { useLanguage } from "@/app/components/LanguageProvider";
import { lessonDetailTranslations } from "@/data/translations";
import { lessonTranslations } from "@/data/lessonTranslations";
type LessonContentProps = {
  level: string;
  lesson: string;
  title: string;
};

export default function LessonContent({
  level,
  lesson,
  title,
}: LessonContentProps) {
  const { language } = useLanguage();
const text =
  lessonDetailTranslations[language] ||
  lessonDetailTranslations.vi;
  const lessonText =
  lessonTranslations[level]?.[lesson]?.[language];
  return (
    <div>
      <p className="font-semibold text-blue-600">
      {text.levelLabel} {level} | {text.lessonLabel} {lesson}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
  {lessonText?.title || title}
</h1>
    </div>
  );
}