import { useState, lazy, Suspense } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const ProjectModal = lazy(() => import("./ProjectModal"));

const filters = [
  { label: "All", value: "all" },
  { label: "GenAI", value: "genai" },
  { label: "ML", value: "ml" },
  { label: "Full Stack", value: "fullstack" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <SectionWrapper id="projects">
        <SectionHeading
          label="02 / Projects"
          title="Things I've Built"
          subtitle="Production-grade ML systems, GenAI applications, and full-stack platforms."
        />

        {/* Filter bar */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                padding: "6px 18px",
                borderRadius: 24,
                border: active === f.value ? "1px solid #00f5c4" : "1px solid rgba(255,255,255,0.1)",
                background: active === f.value ? "rgba(0,245,196,0.12)" : "transparent",
                color: active === f.value ? "#00f5c4" : "#8892a4",
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.5px",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Modal */}
      <Suspense fallback={null}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Suspense>
    </div>
  );
}
