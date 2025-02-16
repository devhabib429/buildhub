import { Project } from '@/types';

async function getProjects(): Promise<Project[]> {
  // This will be replaced with actual data fetching
  return [];
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Project Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards will go here */}
      </div>
    </div>
  );
} 