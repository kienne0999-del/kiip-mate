import PracticeListContent from "./PracticeListContent";
import { practiceDetailTranslations } from "@/data/translations";
export default async function PracticePage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
      <PracticeListContent level={level} />
      </div>
    </main>
  );
}