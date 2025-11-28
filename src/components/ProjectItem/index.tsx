import { Sparkle } from "lucide-react";
import React from "react";

interface ProjectItemProps {
  name: string;
  description: string;
  image: string;
  github_src?: string;
  web_src?: string;
  type?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  description,
  image,
  github_src,
  web_src,
  //type,
}) => {
  return (
    <section className="flex flex-col mb-4 py-6">
      <div className="flex justify-between mb-4">
        <div className="flex flex-row items-center">
          <h1 className="font-heading font-bold flex items-center text-dark-blue text-md sm:text-lg">
            <Sparkle className="w-5 h-5 fill-yellow-400 stroke-yellow-400 mr-2" />
            {name}
          </h1>

          <a href={github_src} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github ml-2 sm:ml-5 text-gray-700 text-lg sm:text-2xl hover:text-black transition"></i>
          </a>
        </div>

        {/* <div className="px-2 sm:px-4 py-2 bg-blue text-white rounded-4xl text-xs sm:text-sm">
          # {type}
        </div> */}
      </div>

      <div className="flex justify-center">
        <a href={web_src}>
          <img
            src={image}
            alt={name}
            className="w-full rounded-xl hover:shadow-lg block mx-auto"
          />
        </a>
      </div>

      <p className="mt-4 font-body font-medium text-black">{description}</p>
    </section>
  );
};

export default ProjectItem;
