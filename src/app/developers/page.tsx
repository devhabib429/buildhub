import { Developer } from '@/types';

async function getDevelopers(): Promise<Developer[]> {
  // This will be replaced with actual data fetching
  return [];
}

export default async function DevelopersPage() {
  const developers = await getDevelopers();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Developers Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Developer cards will go here */}
      </div>
    </div>
  );
} 