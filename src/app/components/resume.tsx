import React from "react";

const Resume = () => {
  const education = [
    {
      title: "Bachelor In Electrical Engineering",
      location: "Ziauddin University, Karachi",
      calender: "Present",
    },
    {
      title: "DAE In Electrical",
      location: "Pakistan Navy Polytechnic Institute, Karachi",
      calender: "2017 - 2019",
    },
    {
      title: "Matriculation",
      location: "F.G Boys Secondary School, Karachi",
      calender: "2012 - 2014",
    },
  ];

  const learning = [
    {
      title: "Front-End Developer",
      location: "Governor House Sindh Karachi",
      calender: "February 2024 - Present",
    },
  ];

  return (
    <section className="py-12" id="resume">
      <h2 className="text-4xl font-bold text-center mb-4" data-aos="zoom-in">
        Resume
      </h2>
      <span className="text-lg text-center block mb-8" data-aos="zoom-in">
        My personal journey
      </span>

      <div className="grid md:grid-cols-2 gap-20 mt-10">
        <ResumeBox heading="Education" iconClass="graduation-cap" qualification={education} />
        <ResumeBox heading="Learning" iconClass="briefcase-alt" qualification={learning} />
      </div>
    </section>
  );
};

interface QualificationProps {
  title: string;
  location: string;
  calender: string;
}

interface ResumeBoxProps {
  iconClass: string;
  heading: string;
  qualification: QualificationProps[];
}

const ResumeBox: React.FC<ResumeBoxProps> = ({ iconClass, heading, qualification }) => {
  return (
    <div className="ml-36">
      <h3
        className="text-2xl font-semibold flex items-center mb-6"
        data-aos={heading.includes("Education") ? "fade-right" : "fade-left"}
      >
        <i className={`uil uil-${iconClass} mr-2 text-xl`}></i>
        {heading}
      </h3>

      {qualification.map((data, index) => (
        <div
          className="flex items-start mb-8"
          key={index}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex flex-col items-center">
            <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
            {qualification.length - 1 !== index && (
              <span className="w-px h-full bg-gray-800 mt-1 mb-1"></span>
            )}
          </div>
          <div className="ml-4">
            <h4 className="text-xl font-semibold">{data.title}</h4>
            <span className="block text-gray-600">{data.location}</span>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <i className="uil uil-calendar-alt mr-1"></i>
              {data.calender}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resume;
