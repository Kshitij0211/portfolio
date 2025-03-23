import { PiRocketBold } from "react-icons/pi";
import { Observer } from "tailwindcss-intersect";
import MP_P1 from "../../assets/img/MP_P1.webp";

const Portfolio = () => {
  Observer.start();

  return (
    <div
      className="lg:min-h-svh w-full px-4 lg:px-12 top-0 pt-24"
      id="portfolio"
    >
      <div className="waterMark">
        <span className="leading-7">Latest</span>
        <span className="">Projects</span>
      </div>
      <div className="grid lg:grid-cols-2 justify-between items-start">
        <div className="">
          <div className="text-2xl">
            LATEST PROJECTS
            <hr className="h-[0.025rem] w-[45%] border-0 bg-primary" />
          </div>
          <div className="mt-4 mb-8 lg:w-[90%] text-justify">
            Built dynamic, high-performance web applications using React.js,
            Tailwind CSS, and Node.js, delivering sleek, responsive UIs with
            seamless backend integration. Engineered RESTful APIs, JWT
            authentication, and state management for secure, scalable solutions.
            Optimized performance, reducing load times and enhancing user
            experience. Passionate about creating modern, efficient, and
            intuitive digital experiences.
            <span className="inline-block ms-2 align-middle animate-bounce">
              <PiRocketBold />
            </span>
          </div>
          <div className="btn btn-md btn-primary px-12 mt-4 text-lg">
            View All
          </div>
        </div>
        <div className="mt-12 lg:mt-0 flex-col gap-4 flex items-stretch">
          <div className="card card-side majorProject group intersect cursor-pointer">
            <div className="cardHeader">O-CONSULTATION</div>
            <div className="card-body">
              <span className="p-2">
                O-Consultation is a frontend-based telemedicine platform
                designed to facilitate seamless virtual consultations. Built
                using React and Tailwind CSS, it provides a responsive and
                intuitive user interface for both doctors and patients. The
                platform ensures smooth navigation, modern UI elements, and
                optimized performance, making remote healthcare interactions
                more accessible and efficient.
              </span>
            </div>
            <figure className="card-actions group w-[30%]">
              <img className="object-cover" src={MP_P1} alt="O-Consultation Snapshot" />
            </figure>
          </div>
          <div className="card card-side majorProject group intersect cursor-pointer">
            <div className="cardHeader">KRANBAN BOARD</div>
            <div className="card-body">
              <span className="p-2">
                KRanban is a full-stack task management application built with
                the MERN stack (MongoDB, Express.js, React.js, Node.js). It
                offers an intuitive Kanban board with drag-and-drop
                functionality for seamless task organization. Featuring
                real-time updates, secure authentication, and responsive design,
                it enhances workflow management, making project tracking
                efficient and user-friendly.
              </span>
            </div>
            <figure className="card-actions group w-[30%]">
              <img className="object-cover" src={MP_P1} alt="KRanban Board Snapshot" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
