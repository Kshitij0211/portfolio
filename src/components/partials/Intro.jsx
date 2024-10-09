import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { Observer } from "tailwindcss-intersect";
import project from '../../assets/img/O-Consultation.png'

const Intro = () => {

    Observer.start()

    return (
        <div className="min-h-svh flex flex-col lg:flex-row justify-between items-start lg:items-center w-full p-6 lg:p-12 top-0 overflow-clip gap-y-8" id="home">
            <div className="absolute -z-10 h-full flex flex-col justify-center opacity-[0.03] gap-x-2 *:uppercase text-[4rem] md:text-[9rem] lg:text-[10rem] font-semibold">
                <span className="leading-7">Web</span>
                <span className="">Developer</span>
            </div>
            <div className="h-full flex flex-col ms-6 lg:ms-12 mt-24 lg:w-[75%]">
                <div className="dark:text-white text-[6rem] relative font-semibold tracking-wider flex flex-col cupcake:text-black">
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
                    <FaLinkedinIn className="animate-jump animate-fill-both animate-duration-[2000ms] animate-ease-in-out" />
                    <FiGithub className="animate-jump animate-once animate-duration-[2000ms] animate-ease-in-out animate-delay-100" />
                    <FaInstagram className="animate-jump animate-once animate-duration-[2000ms] animate-ease-in-out animate-delay-200" />
                </div>
                <hr className="h-[0.05rem] border-0 bg-primary w-[75%]" />
                <div className="stats p-2 stats-horizontal shadow-xl w-full lg:w-[75%] -ms-3 lg:ms-0">
                    <div className="stat animate-fade-down animate-duration-700 animate-ease-in-out animate-once">
                        <div className="stat-title text-base">Downloads</div>
                        <div className="stat-value text-3xl">31K</div>
                        <div className="stat-desc text-xs">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat p-2 animate-fade-down animate-duration-700 animate-ease-in-out animate-once animate-delay-100">
                        <div className="stat-title text-base">New Users</div>
                        <div className="stat-value text-3xl">4,200</div>
                        <div className="stat-desc text-xs">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat p-2 animate-fade-down animate-duration-700 animate-ease-in-out animate-once animate-delay-200">
                        <div className="stat-title text-base">New Registers</div>
                        <div className="stat-value text-3xl">1,200</div>
                        <div className="stat-desc text-xs">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
            <div className="mockup-browser bg-primary border shadow-xl shadow-black/50 w-full border-base-300 lg:w-[50%] h-[50%] translate-x-1/3 intersect:translate-x-0 transition duration-700">
                <div className="mockup-browser-toolbar">
                    <a className="input" href="https://daisyui.com" >https://daisyui.com</a>
                </div>
                <div className="bg-base-200 flex justify-center">
                    <img src={project} />
                </div>
            </div>
        </div>
    )
}

export default Intro;