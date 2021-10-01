import React from "react";

const sizeClasses = {
    height: "h-80",
    width: "w-auto",
};

export default function ProjectCard({ project }) {
    return (
        <div className="border-2">
            <img className={`${sizeClasses.height} ${sizeClasses.width} mx-3`} src={project.img_poster} alt={project.project_name} />
            <h4>
                {project.project_name}
            </h4>
            <p>
                {project.description}
            </p>
            <button>
                {project.project_id}
            </button>
        </div>
    );
}
