import { Observer } from "tailwindcss-intersect";

const Portfolio = () => {

    Observer.start()

    return (
        <div className="lg:min-h-svh w-full px-4 lg:px-12 top-0 pt-24" id="portfolio">
            <div className="absolute -z-10 h-full flex flex-col justify-center opacity-[0.03] gap-x-2 *:uppercase text-[4rem] md:text-[9rem] lg:text-[10rem] font-semibold">
                <span className="leading-7">Latest</span>
                <span className="">Projects</span>
            </div>
            <div className="grid lg:grid-cols-2 justify-between items-start">
                <div className="">
                    <div className="text-2xl">
                        LATEST PROJECTS
                        <hr className="h-[0.025rem] w-[45%] border-0 bg-primary" />
                    </div>
                    <div className="mt-4 lg:w-[90%] text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className="btn btn-md btn-primary px-12 mt-4 text-lg">View All</div>
                </div>
                <div className="mt-12 lg:mt-0 flex-col gap-4 flex">
                    <div className="card card-side bg-base-100 shadow-xl rounded-md flex group scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-500 ease-in">  {/* intersect-full intersect:animate-fade-left   */}
                        <div className="rounded-r-md uppercase card-header [writing-mode:vertical-rl] rotate-180 text-center font-bold text-base-200 bg-slate-400 p-2 text-2xl">
                            Project 1
                        </div>
                        <div className="card-body p-2 w-[75%] text-justify text-sm my-auto lg:text-base">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <figure className="h-full card-actions group">
                            <img
                                className="h-full object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                alt="Movie" />
                                <button className="w-fit absolute bottom-3 btn btn-sm btn-outline btn-primary text-base-content hidden group-hover:block text-center animate-bounce">View Now</button>
                        </figure>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl rounded-md flex group scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-500 ease-in">
                        <div className="rounded-r-md uppercase card-header [writing-mode:vertical-rl] rotate-180 text-center font-bold text-base-200 bg-slate-400 p-2 text-2xl">
                            Project 2
                        </div>
                        <div className="card-body p-2 w-[75%] text-justify text-sm lg:text-base my-auto">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <figure className="h-full card-actions group">
                            <img
                                className="h-full"
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                alt="Movie" />
                                <button className="w-fit absolute bottom-3 btn btn-sm btn-outline btn-primary text-base-content hidden group-hover:block text-center animate-bounce">View Now</button>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;