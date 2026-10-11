import LevelOverviewContent from "./LevelOverviewContent";

export default async function LevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
      <LevelOverviewContent level={level} />
        </div>
    </main>
  );
}