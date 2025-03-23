import { GrLocationPin } from "react-icons/gr";
import { Observer } from "tailwindcss-intersect";

const WorkExp = () => {
  Observer.start();

  return (
    <div className="my-8 relative">
      <div className="waterMark absolute top-0">
        <span className="leading-7">Work</span>
        <span className="">Experience</span>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical overflow-clip">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-10 w-10"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end px-3 lg:px-10 p-10 translate-x-1/3 intersect:translate-x-0 transition duration-700 ease-out">
            <time className="font-mono text-sm lg:text-base">
              Jan 2021 - Present
            </time>
            <div className="flex flex-row-reverse items-center justify-end gap-x-4 lg:gap-x-10 my-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rTfOmHehYoGznTL0bQ_6gXj9OkUbo6cnXw&s"
                alt="Deloitte Logo"
                className="rounded-full h-12 w-12 aspect-square object-contain"
              />
              <div className="text-lg lg:text-4xl font-semibold">
                React Developer
              </div>
            </div>
            <div className="text-base font-medium flex gap-x-4 items-center my-4">
              <GrLocationPin />
              <span className="text-base">Gurugram, HR</span>
            </div>
            <span className="text-justify">
              As a Frontend Developer at Deloitte, developed and optimized web
              applications using React.js, Tailwind CSS, and JavaScript.
              Collaborated with cross-functional teams to enhance UI/UX, improve
              performance, and integrate APIs. Contributed to code reviews,
              maintained reusable components, and ensured high coding standards
              in an Agile environment.
            </span>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default WorkExp;
