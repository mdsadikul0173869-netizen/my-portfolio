// src/app/apps/page.tsx
import { projects } from "@/data/projects";
import AppCard from "@/components/AppCard";

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">My Portfolio & Apps</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my specialized projects in SEO, Web Development, and AI-driven applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AppCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}