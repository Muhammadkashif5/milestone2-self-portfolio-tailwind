import React from "react";

interface Project {
  id: number;
  imageURL: string;
  title: string;
  demo: string;
  github?: string;
  description?: string;
}

const Project = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      {projects.map((data) => (
        <div
          className="grid grid-cols-2 gap-12 mb-12 items-center"
          key={data.id}
        >
          {data.id % 2 !== 0 && (
            <div className="hidden md:block p-4 ml-20 overflow-y-auto h-full text-justify relative">
              <h3 className="sticky top-0 bg-white  mb-4">About {data.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.description ||
                    "<p>No Description Found For This Project</p>",
                }}
                className="text-gray-700"
              ></div>
            </div>
          )}

          <div
            className={`relative overflow-hidden mr-20 rounded-lg ${
              data.id % 2 !== 0 ? "animate-fade-left" : "animate-fade-right"
            }`}
          >
            <img
              src={data.imageURL}
              alt="Project Data"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              // eslint-disable-next-line @next/next/no-img-element
            />
            <div className="absolute inset-0 bg-purple-800 bg-opacity-70"></div>
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl bg-black bg-opacity-60 p-2 rounded-lg transition-opacity duration-500 hover:opacity-0">
              {data.title}
            </h3>
            <div className="absolute inset-0 flex flex-col items-center  justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
              <a
                href={data.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 mb-2 rounded-lg shadow-md hover:bg-gray-200"
              >
                Visit Site
              </a>
              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200"
                >
                  View On Github
                </a>
              )}
            </div>
          </div>

          {data.id % 2 === 0 && (
            <div className="hidden md:block p-4 mr-20 overflow-y-auto h-full text-justify relative">
              <h3 className="sticky top-0 bg-white mb-4">About {data.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.description ||
                    "<p>No Description Found For This Project</p>",
                }}
                className="text-gray-700"
              ></div>
            </div>
          )}
        </div>
      ))}
      <p className="text-center text-gray-500">
        There are some other projects that can't be shown due to company/client
        policies.
      </p>
    </>
  );
};

const Projects = () => {
  return (
    <section className="py-16" id="projects">
      <h2 className="text-3xl font-semibold text-center mb-4" data-aos="zoom-in">
        Projects
      </h2>
      <span className="block text-lg text-center mb-8 text-gray-600" data-aos="zoom-in">
        Most recent work
      </span>

      <Project
        projects={[
          {
            id: 1,
            imageURL: "/BookLand.JPG",
            title: "WHITE SPACE",
            demo: "https://assignment3-figmadesign.vercel.app/",
            description:
              "This project is a web page using React and TypeScript (TSX) by breaking the layout into reusable components for better maintainability and scalability. Each component was created in its own .tsx file and imported into the main page.tsx.",
          },
          {
            id: 2,
            imageURL: "/Createsmart.JPG",
            title: "Brand Name",
            demo: "https://assignment2-pixelperfectpage.vercel.app/",
            description:
              "This project is a pixel-perfect web pages with Next.js and Tailwind CSS, using Figma designs as a blueprint.",
          },
          {
            id: 3,
            imageURL: "/MBFX.JPG",
            title: "Alpha Company",
            demo: "https://assignment1-functionalweb.vercel.app/",
            description:
              "This project is a fully responsive one-page website built using Next.js and Tailwind CSS. It includes five pages that demonstrate modern web development techniques.",
          },
        ]}
      />
    </section>
  );
};

export default Projects;
