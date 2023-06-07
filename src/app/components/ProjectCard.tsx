import React from "react";

type ProjectCardProps = {
  type: string;
  date: string;
  link: string;
  title: string;
  description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  type,
  date,
  link,
  title,
  description,
}) => {
  return (
    <div className="p-8">
      <h2 className="text-slate-500">
        {type} <span className="text-black">| </span>{" "}
        <span className="text-slate-600">{date}</span>
      </h2>
      <a className="text-2xl hover:text-blue-800" href={link}>
        {title}
      </a>
      <p className=" text-left">{description}</p>
    </div>
  );
};

export default ProjectCard;
