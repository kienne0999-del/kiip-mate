import { lessonData } from "@/data/lessons";
import LearnListContent from "./LearnListContent";
import LearnLevelNotFound from "./LearnLevelNotFound";
export default async function LearnPage({
  params,
}: {
  params: Promise<{
    level: string;
  }>;
}) {
  const { level } = await params;

  const levelData =
    lessonData[level as keyof typeof lessonData];

  if (!levelData) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <LearnLevelNotFound />
        </div>
      </main>
    );
  }

  const lessons = Object.entries(levelData);

  return (
  <main className="min-h-screen bg-slate-50 px-6 py-12">
    <div className="mx-auto max-w-5xl">
      <LearnListContent
        level={level}
        lessons={lessons.map(([id, lesson]) => ({
          id,
          title: lesson.title,
        }))}
      />
    </div>
  </main>
);
}