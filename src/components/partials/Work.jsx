import Tool from "./Tool";
import WorkExp from "./WorkExp";
import { FaAngleRight } from "react-icons/fa";

const Work = () => {

    const skills = [{
        imgLocation: "https://static-00.iconduck.com/assets.00/html5-icon-505x512-zls0uohx.png",
        description: 'HTML 5',
    }, {
        imgLocation: 'https://static-00.iconduck.com/assets.00/css3-plain-icon-450x512-vh7r7l9e.png',
        description: 'CSS 3',
    }, {
        imgLocation: 'https://static-00.iconduck.com/assets.00/javascript-icon-512x512-34hjwczx.png',
        description: 'Javascript',
    }, {
        imgLocation: 'https://static-00.iconduck.com/assets.00/file-type-reactjs-icon-512x455-5au546uy.png',
        description: 'React JS',
    }, {
        imgLocation: 'https://static-00.iconduck.com/assets.00/file-type-tailwind-icon-512x307-l0anq79h.png',
        description: 'Tailwind CSS',
    }, {
        imgLocation: 'https://static-00.iconduck.com/assets.00/bootstrap-plain-icon-512x512-fqd6tfaa.png',
        description: 'Bootstrap',
    }, {
        imgLocation: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
        description: 'Node JS',
    }, {
        imgLocation: 'https://static-00.iconduck.com/assets.00/express-original-icon-512x298-28hzbsin.png',
        description: 'Express',
    }, {
        imgLocation: 'https://static-00.iconduck.com/assets.00/file-type-mongo-icon-230x512-g17cul1f.png',
        description: 'Mongo DB',
    }, {
        imgLocation: 'https://static-00.iconduck.com/assets.00/git-icon-512x512-61zfmvxk.png',
        description: 'Git',
    }, {
        imgLocation: 'https://static-00.iconduck.com/assets.00/github-icon-512x500-7p3xy9uj.png',
        description: 'GitHub',
    }]

    const toolsOverview = [{
        imgLocation: "https://static-00.iconduck.com/assets.00/vs-code-icon-512x512-ipycpzlh.png",
        description: 'VS Code',
    }, {
        imgLocation: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256",
        description: "Postman"
    }, {
        imgLocation: "https://static-00.iconduck.com/assets.00/chrome-icon-512x512-5ln6wbyk.png",
        description: "Chrome"
    }]

    return (
        <section className="min-h-svh w-full px-12 top-0 pt-12" id="about">
            <div className="justify-between items-start my-10">
                <div className="text-2xl w-fit">
                    SKILLS
                    <hr className="h-[0.025rem] border-0 bg-primary" />
                </div>
                <div className="relative flex flex-row justify-center lg:gap-x-16 lg:gap-y-10 mt-12 lg:px-12 gap-x-4 gap-y-4 flex-wrap">
                    {
                        skills.map((tool, key) =>
                            <>
                                <Tool toolImg={tool.imgLocation} toolDesc={tool.description} key={key} />
                            </>
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
                        toolsOverview.map((tool, key) =>
                            <>
                                <Tool toolImg={tool.imgLocation} toolDesc={tool.description} key={key} />
                            </>
                        )
                    }
                </div>
            </div>
            <div className="justify-between items-start my-10">
                <div className="text-2xl w-fit uppercase">
                    Sneak Peek
                    <hr className="h-[0.025rem] border-0 bg-primary" />
                </div>
                <div className="w-full my-8">
                    <div className=" md:carousel carousel-center rounded-box hidden w-full">
                        <div className="carousel-item relative cursor-pointer group overflow-clip">
                            <img className="object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                alt="Burger" />
                            <div className="absolute bottom-0 flex-row justify-around w-[100%] translate-y-[100%] group-hover:visible group-hover:h-[40%] group-hover:translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                <span className="text-xl">Project Name</span>
                            </div>
                        </div>
                        <div className="carousel-item relative cursor-pointer group overflow-clip">
                            <img className="object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                alt="Burger" />
                            <div className="absolute bottom-0 flex-row justify-around w-[100%] translate-y-[100%] group-hover:visible group-hover:h-[40%] group-hover:translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                <span className="text-xl">Project Name</span>
                            </div>
                        </div>
                        <div className="carousel-item relative cursor-pointer group overflow-clip">
                            <img className="object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                alt="Burger" />
                            <div className="absolute bottom-0 flex-row justify-around w-[100%] translate-y-[100%] group-hover:visible group-hover:h-[40%] group-hover:translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                <span className="text-xl">Project Name</span>
                            </div>
                        </div>
                        <div className="carousel-item relative cursor-pointer group overflow-clip">
                            <img className="object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                alt="Burger" />
                            <div className="absolute bottom-0 flex-row justify-around w-[100%] translate-y-[100%] group-hover:visible group-hover:h-[40%] group-hover:translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                <span className="text-xl">Project Name</span>
                            </div>
                        </div>
                        <div className="carousel-item relative cursor-pointer group overflow-clip">
                            <img className="object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                alt="Burger" />
                            <div className="absolute bottom-0 flex-row justify-around w-[100%] translate-y-[100%] group-hover:visible group-hover:h-[40%] group-hover:translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                <span className="text-xl">Project Name</span>
                            </div>
                        </div>
                        <div className="carousel-item relative cursor-pointer group overflow-clip">
                            <img className="object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                alt="Burger" />
                            <div className="absolute bottom-0 flex-row justify-around w-[100%] translate-y-[100%] group-hover:visible group-hover:h-[40%] group-hover:translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                <span className="text-xl">Project Name</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mockup-phone mt-8 md:hidden">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <div className="carousel rounded-box object-fill h-full">
                                <div className="carousel-item relative cursor-pointer overflow-clip w-fit">
                                    <img className="object-cover"
                                        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                        alt="Burger" />
                                    <div className="absolute bottom-0 flex-row justify-around w-[100%] visible h-[40%] translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                        <span className="text-xl">Project Name</span>
                                    </div>
                                </div>
                                <div className="carousel-item relative cursor-pointer overflow-clip w-fit">
                                    <img className="object-cover"
                                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                        alt="Burger" />
                                    <div className="absolute bottom-0 flex-row justify-around w-[100%] visible h-[40%] translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                        <span className="text-xl">Project Name</span>
                                    </div>
                                </div>
                                <div className="carousel-item relative cursor-pointer group overflow-clip w-fit">
                                    <img className="object-cover"
                                        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                        alt="Burger" />
                                    <div className="absolute bottom-0 flex-row justify-around w-[100%] visible h-[40%] translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                        <span className="text-xl">Project Name</span>
                                    </div>
                                </div>
                                <div className="carousel-item relative cursor-pointer group overflow-clip w-fit">
                                    <img className="object-cover"
                                        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                        alt="Burger" />
                                    <div className="absolute bottom-0 flex-row justify-around w-[100%] visible h-[40%] translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                        <span className="text-xl">Project Name</span>
                                    </div>
                                </div>
                                <div className="carousel-item relative cursor-pointer group overflow-clip w-fit">
                                    <img className="object-cover"
                                        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                        alt="Burger" />
                                    <div className="absolute bottom-0 flex-row justify-around w-[100%] visible h-[40%] translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                        <span className="text-xl">Project Name</span>
                                    </div>
                                </div>
                                <div className="carousel-item relative cursor-pointer group overflow-clip w-fit">
                                    <img className="object-cover"
                                        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                        alt="Burger" />
                                    <div className="absolute bottom-0 flex-row justify-around w-[100%] visible h-[40%] translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                                        <span className="text-xl">Project Name</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-base flex flex-row items-center gap-x-2 justify-center">
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