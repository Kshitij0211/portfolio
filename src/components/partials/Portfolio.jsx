import { Observer } from "tailwindcss-intersect";

const Portfolio = () => {

    Observer.start()

    return (
        <div className="lg:min-h-svh w-full px-4 lg:px-12 top-0 pt-24" id="portfolio">
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                    <div className="btn btn-md btn-primary px-12 mt-4 text-lg">View All</div>
                </div>
                <div className="mt-12 lg:mt-0 flex-col gap-4 flex items-stretch">
                    <div className="card card-side majorProject group intersect"> 
                        <div className="cardHeader">
                            Project 1
                        </div>
                        <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                        <figure className="card-actions group">
                            <img
                                className="h-full object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                alt="Movie" />
                                <button className="w-fit absolute bottom-3 btn btn-sm md:btn-outline btn-primary text-primary-content block md:hidden group-hover:block text-center md:animate-bounce">View Project</button>
                        </figure>
                    </div>
                    <div className="card card-side majorProject group intersect">
                        <div className="cardHeader">
                            Project 2
                        </div>
                        <div className="card-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                        <figure className="card-actions group">
                            <img
                                className="h-full"
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                alt="Movie" />
                                <button className="w-fit absolute bottom-3 btn btn-sm md:btn-outline btn-primary text-primary-content block md:hidden group-hover:block text-center md:animate-bounce">View Project</button>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;