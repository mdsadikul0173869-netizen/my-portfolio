// src/components/AppCard.tsx
import { Project } from "@/data/projects";

export default function AppCard({ project }: { project: Project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-gray-100 text-gray-700 text-[10px] px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center bg-gray-900 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        View Project
      </a>
    </div>
  );
}