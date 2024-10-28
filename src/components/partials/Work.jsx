import { skills, toolsOverview, projects } from "../helper.js";
import Tool, { Project, ProjectMobile } from "./Tool";
import WorkExp from "./WorkExp";
import { FaAngleRight } from "react-icons/fa";

const Work = () => {

    return (
        <section className="min-h-svh w-full px-6 lg:px-12 top-0 pt-12" id="about">
            <div className="justify-between items-start my-10">
                <div className="text-2xl w-fit">
                    SKILLS
                    <hr className="h-[0.025rem] border-0 bg-primary" />
                </div>
                <div className="relative flex flex-row justify-center lg:gap-x-16 lg:gap-y-10 mt-12 lg:px-12 gap-x-4 gap-y-4 flex-wrap">
                    {
                        skills.map((tool) =>
                            <Tool toolImg={tool.imgLocation} toolDesc={tool.description} />
                        )
                    }
                </div>
            </div>
            <div className="justify-between items-start my-10">
                <div className="text-2xl w-fit">
                    TOOLS AND SOFTWARE
                    <hr className="h-[0.025rem] border-0 bg-primary" />
                </div>
                <div className="relative flex flex-row justify-center lg:gap-x-16 lg:gap-y-10 mt-12 lg:px-12 gap-x-4 gap-y-4 flex-wrap">
                    {
                        toolsOverview.map((tool) =>
                            <Tool toolImg={tool.imgLocation} toolDesc={tool.description} />
                        )
                    }
                </div>
            </div>
            <div className="justify-items-center my-10">
                <div className="text-2xl w-fit uppercase float-start mb-8">
                    Sneak Peek
                    <hr className="h-[0.025rem] border-0 bg-primary" />
                </div>
                <div className="w-full justify-center my-8">
                    <div className=" md:carousel carousel-center rounded-box hidden w-full">
                        {
                            projects.map((project) =>
                                <Project imgSrc={project.imgSrc} projectName={project.projectName} />
                            )
                        }
                    </div>
                </div>
                <div className="mockup-phone mt-8 md:hidden">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <div className="carousel rounded-box object-fill h-full">
                                {
                                    projects.map((project) =>
                                        <ProjectMobile imgSrc={project.imgSrc} projectName={project.projectName} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-base flex flex-row items-center gap-x-2 justify-center md:hidden">
                    <h1>
                        Swipe Right
                    </h1>
                    <FaAngleRight className="text-lg" />
                </div>
            </div>
            <div className="justify-between items-start mt-10">
                <div className="text-2xl w-fit">
                    WORK EXPERIENCE
                    <hr className="h-[0.025rem] border-0 bg-primary" />
                </div>
                <WorkExp />
            </div>
        </section >
    )
}

export default Work;