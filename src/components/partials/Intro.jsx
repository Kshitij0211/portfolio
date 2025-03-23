import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { Observer } from "tailwindcss-intersect";
import project from "../../assets/img/O-Consultation.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleDownloadResume } from "../helper";

const Intro = () => {
  Observer.start();

  const [stats, setStats] = useState({});

  const [animatedStats, setAnimatedStats] = useState({ visits: 0, downloads: 0 });

  const totalYearsOfExp = new Date().getFullYear() - 2021;

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Kshitij0211/portfolio-stats/main/stats.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        animateNumbers(data.visits, data.downloads);
      })
      .catch((err) => console.error("Error loading stats:", err));
  },[]);

  const animateNumbers = (finalVisits, finalDownloads) => {
    let visitCount = 0;
    let downloadCount = 0;

    const interval1 = setInterval(() => {
      if (visitCount < finalVisits) {
        setAnimatedStats((prev) => ({ ...prev, visits: ++visitCount }));
      } else {
        clearInterval(interval1);
      }
    }, 10);

    const interval2 = setInterval(() => {
      if (downloadCount < finalDownloads) {
        setAnimatedStats((prev) => ({ ...prev, downloads: ++downloadCount }));
      } else {
        clearInterval(interval2);
      }
    }, 20);
  };

  useEffect(() => {
    // 🔥 Trigger GitHub Action to Update Visits
    fetch(
      "https://api.github.com/repos/Kshitij0211/portfolio-stats/dispatches",
      {
        method: "POST",
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Bearer ${import.meta.env.VITE_GH_PAT}`,
        },
        body: JSON.stringify({ event_type: "update_visits" }),
      }
    );
  }, []);

  return (
    <div
      className="min-h-svh flex flex-col lg:flex-row justify-between items-start lg:items-center w-full p-6 lg:p-12 top-0 overflow-clip gap-y-8"
      id="home"
    >
      <div className="waterMark">
        <span className="leading-7">Web</span>
        <span className="">Developer</span>
      </div>
      <div className="h-full flex flex-col ms-0 xl:ms-12 mt-24 lg:w-[70%] xl:w-[40%]">
        <div className="dark:text-white text-[5rem] md:text-[10rem] relative font-semibold tracking-wider flex flex-col cupcake:text-black">
          <span className="leading-4">KSHITIJ</span>
          <span className="">&nbsp;&nbsp;RAJ</span>
        </div>
        <div className="text-xl">
          I'm a <span className="text-primary">Web Developer</span> with{" "}
          {totalYearsOfExp} years of experience.
        </div>
        <div
          className="text-xl shadow-xl bg-base-100/80 btn-lg btn w-fit uppercase px-12 btn-outline rounded-md mt-12 gap-x-2 items-center ring-2 ring-primary border-0 hover:bg-primary"
          onClick={handleDownloadResume}
        >
          Contact me
          <BiLogoTelegram className="text-2xl" />
        </div>
        <div className="flex flex-row justify-start gap-x-8 my-8 text-3xl items-center *:cursor-pointer *:hover:*:text-primary *:hover:*:scale-105">
          <Link aria-label="Linked In" to="https://www.linkedin.com/in/kshitij0211/" target="_blank">
            <FaLinkedinIn className="introIcon" />
          </Link>
          <Link aria-label="Github" to="https://github.com/Kshitij0211" target="_blank">
            <FiGithub className="introIcon animate-delay-100" />
          </Link>
          <Link aria-label="Instagram" to="https://www.instagram.com/_kshitij.raj/" target="_blank">
            <FaInstagram className="introIcon animate-delay-200" />
          </Link>
        </div>
        <div className="stats p-2 stats-horizontal shadow-xl w-full bg-base-300 border-t-2 border-primary rounded-t-none lg:w-[75%] lg:ms-0">
          <div className="stat">
            <div className="stat-title">Experience</div>
            <div className="stat-value text-2xl">{totalYearsOfExp}</div>
            <div className="stat-desc text-xs md:text-base">Years</div>
          </div>
          <div className="stat animate-delay-100">
            <div className="stat-title">Portfolio Visits</div>
            <div className="stat-value text-2xl">{stats ? animatedStats.visits : "..."}</div>
            <div className="stat-desc text-xs md:text-base">New Users</div>
          </div>
          <div className="stat animate-delay-200">
            <div className="stat-title">Recruiters Action</div>
            <div className="stat-value text-2xl">{stats ? animatedStats.downloads : "..."}</div>
            <div className="stat-desc text-xs md:text-base">
              Resume Downloads
            </div>
          </div>
        </div>
      </div>
      <div
        className="animate-[float_3s_ease-in-out_infinite]
      mockup-browser bg-primary border shadow-xl shadow-black/50 w-full border-base-300 lg:w-[50%] h-[50%] translate-x-1/3 intersect intersect:translate-x-0 transition-transform duration-700"
      >
        <div className="mockup-browser-toolbar">
          <a className="input" href="https://o-consultation.netlify.app/">
            https://o-consultation.netlify.app
          </a>
        </div>
        <div className="bg-base-200 flex justify-center">
          <img loading="eager" src={project} alt="Major Project Snapshot" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
