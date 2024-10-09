import { Observer } from "tailwindcss-intersect";

const Tool = (props) => {

    Observer.start()

    return (
        <div className="h-30 w-24 flex flex-col gap-y-4 justify-around items-center">
            <div className={`flex-grow flex justify-center h-24 scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-200 ease-in`}>
                <img className="object-scale-down" src={props.toolImg} />
            </div>
            <span>{props.toolDesc}</span>
        </div>
    )
}

export default Tool;