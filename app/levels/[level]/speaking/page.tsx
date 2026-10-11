
import { speakingData } from "@/data/speaking";
import SpeakingListContent from "./SpeakingListContent";
export default async function SpeakingPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;

  const prompts =
    speakingData[level as keyof typeof speakingData] ?? [];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
     <SpeakingListContent
  level={level}
 prompts={prompts.map((item) => ({
  id: item.id,
  title: item.title,
  titles: item.titles,
}))}
/>
      </div>
    </main>
  );
}