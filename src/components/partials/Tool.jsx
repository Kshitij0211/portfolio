import { Observer } from "tailwindcss-intersect";

export const Project = ({ projectName, imgSrc }) => {

    return (
        <div className="carousel-item relative cursor-pointer group overflow-clip">
            <img className="object-cover"
                src={imgSrc}
                alt="Burger" />
            <div className="absolute bottom-0 flex-row justify-around w-[100%] translate-y-[100%] group-hover:visible group-hover:h-[40%] group-hover:translate-y-0 bg-gradient-to-t from-[#1f1f1f] to-black/0 flex items-end ease-in-out transition duration-100 pb-4">
                <span className="text-xl">{projectName}</span>
            </div>
        </div>
    )
}

export const ProjectMobile = ({ projectName, imgSrc }) => {

    return (
        <div className="carousel-item relative cursor-pointer overflow-clip w-fit">
            <img className="object-cover"
                src={imgSrc}
                alt="Burger" />
            <div className="sneakPeekOverlay">
                <span className="text-xl">{projectName}</span>
            </div>
        </div>
    )
}

const Tool = ({ toolImg, toolDesc }) => {
    Observer.start()

    return (
        <div className="h-30 w-24 flex flex-col gap-y-4 justify-around items-center">
            <div className={`flex-grow flex justify-center h-24 scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 duration-200 ease-in`}>
                <img className="object-scale-down" src={toolImg} />
            </div>
            <span>{toolDesc}</span>
        </div>
    )
}

export default Tool;