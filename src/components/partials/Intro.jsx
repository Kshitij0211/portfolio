import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { Observer } from "tailwindcss-intersect";
import project from '../../assets/img/O-Consultation.png'
import { Link } from "react-router-dom";

const Intro = () => {

    Observer.start()

    return (
        <div className="min-h-svh flex flex-col lg:flex-row justify-between items-start lg:items-center w-full p-6 lg:p-12 top-0 overflow-clip gap-y-8" id="home">
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
                    I'm a <span className="text-primary">Web Developer</span> with 4 years of experience.
                </div>
                <div className="text-xl shadow-xl bg-base-100/80 btn-lg btn w-fit uppercase px-12 btn-outline rounded-md mt-12 gap-x-2 items-center ring-2 ring-primary border-0 hover:bg-primary">
                    Contact me
                    <BiLogoTelegram className="text-2xl" />
                </div>
                <div className="flex flex-row justify-start gap-x-8 my-8 text-3xl items-center *:cursor-pointer *:hover:*:text-primary *:hover:*:scale-105">
                    <Link to='https://www.linkedin.com/in/kshitij0211/' target="_blank"><FaLinkedinIn  className="introIcon" /></Link>
                    <Link to='https://github.com/Kshitij0211' target="_blank"><FiGithub className="introIcon animate-delay-100" /></Link>
                    <Link to='https://www.instagram.com/_kshitij.raj/' target="_blank"><FaInstagram className="introIcon animate-delay-200" /></Link>
                </div>
                <div className="stats p-2 stats-horizontal shadow-xl w-full bg-base-300 border-t-2 border-primary rounded-t-none lg:w-[75%] lg:ms-0">
                    <div className="stat">
                        <div className="stat-title">Experience</div>
                        <div className="stat-value text-2xl">3.5</div>
                        <div className="stat-desc text-xs md:text-base">Years</div>
                    </div>
                    <div className="stat animate-delay-100">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value text-2xl">4,200</div>
                        <div className="stat-desc text-xs md:text-base">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat animate-delay-200">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value text-2xl">1,200</div>
                        <div className="stat-desc text-xs md:text-base">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
            <div className="mockup-browser bg-primary border shadow-xl shadow-black/50 w-full border-base-300 lg:w-[50%] h-[50%] translate-x-1/3 intersect intersect:translate-x-0 transition duration-700">
                <div className="mockup-browser-toolbar">
                    <a className="input" href="https://o-consultation.netlify.app/" >https://o-consultation.com</a>
                </div>
                <div className="bg-base-200 flex justify-center">
                    <img src={project} />
                </div>
            </div>
        </div>
    )
}

export default Intro;
