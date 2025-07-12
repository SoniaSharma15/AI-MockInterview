"use client";
import React, { useState } from "react";
import { Input } from "/components/ui/input";
import { Button } from "/components/ui/button";

function Projects({ resume, setResume }) {
  const [projects, setProjects] = useState([
    { name: "", desc: "", projLink: "" },
  ]);

  const handleUpdateJobData = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
    setResume((prev) => ({
      ...prev,
      "projArr": updated,
    }));
  };

  const handleAddProject = () => {
    setProjects([...projects, { name: "", desc: "", projLink: "" }]);
  };

  const handleRemoveProject = (id) => {
    const filtered = projects.filter((project) => project.id !== id);
    setProjects(filtered);
      setResume((prev) => ({
      ...prev,
      "projArr": updated,
    }));
  };

  return (
    <>
      <h2 className="text-xl font-bold my-3">Projects</h2>
      <div className="grid grid-cols-1 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 border p-4 rounded-md relative"
          >
            <div className="my-1">
              <label
                htmlFor={`project-name-${index}`}
                className="text-black font-medium"
              >
                Project Name{" "}
              </label>
              <Input
                type="text"
                placeholder="Ex. Resume Builder"
                required
                id={`project-name-${index}`}
                value={project.name}
                onChange={(e) =>
                  handleUpdateJobData(index, "name", e.target.value)
                }
              />
            </div>
            <div className="my-1">
              <label
                htmlFor={`project-link-${index}`}
                className="text-black font-medium"
              >
                Project Live Link{" "}
              </label>
              <Input
                type="text"
                placeholder="Ex. https://yourproject.live"
                required
                id={`project-link-${index}`}
                value={project.value}
                onChange={(e) =>
                  handleUpdateJobData(index, "projLink", e.target.value)
                }
              />
            </div>
            <div className="my-1">
              <label
                htmlFor={`project-desc-${index}`}
                className="text-black font-medium"
              >
                Project Description
              </label>
              <Input
                type="text"
                placeholder="Tech stack used ,Best for"
                required
                id={`project-desc-${index}`}
                value={project.value}
                onChange={(e) =>
                  handleUpdateJobData(index, "desc", e.target.value)
                }
              />
            </div>
            <button
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              onClick={() => handleRemoveProject(project.id)}
              title="Remove Project"
            >
              🗑️
            </button>
          </div>
        ))}
        <button
          className="bg-black text-white px-4 py-2 rounded mt-4"
          onClick={handleAddProject}
        >
          ➕ Add TechSkills
        </button>
      </div>
    </>
  );
}

export default Projects;
