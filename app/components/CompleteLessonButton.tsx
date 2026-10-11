"use client";
import { useLanguage } from "./LanguageProvider";
import { lessonDetailTranslations } from "@/data/translations";
type CompleteLessonButtonProps = {
  level: string;
  lesson: string;
};

export default function CompleteLessonButton({
  level,
  lesson,
}: CompleteLessonButtonProps) {
  const { language } = useLanguage();

const text =
  lessonDetailTranslations[language] ||
  lessonDetailTranslations.vi;
  function markAsComplete() {
    const key = `learnProgress-level-${level}`;
localStorage.setItem(
  "lastLearningPath",
  `/levels/${level}/learn/${lesson}`
);
    const oldProgress = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    if (oldProgress.includes(lesson)) {
      alert(text.alreadyCompletedAlert);
      return;
    }

    const newProgress = [
      ...oldProgress,
      lesson,
    ];

    localStorage.setItem(
      key,
      JSON.stringify(newProgress)
    );

   alert(text.completedAlert);
  }

  return (
    <button
      onClick={markAsComplete}
      className="mt-8 rounded-lg bg-blue-600 px-5 py-3 text-white"
    >
      {text.completeButton}
    </button>
  );
}