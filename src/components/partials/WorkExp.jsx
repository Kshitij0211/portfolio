import { GrLocationPin } from "react-icons/gr";
import { Observer } from "tailwindcss-intersect";

const WorkExp = () => {

    Observer.start()

    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-8 overflow-clip">
            <div className="waterMark">
                <span className="leading-7">Work</span>
                <span className="">Experience</span>
            </div>
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-10 w-10">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start md:text-end px-3 lg:px-10 p-10 -translate-x-1/3 intersect:translate-x-0 transition duration-700 ease-out">
                    <time className="font-mono text-sm lg:text-base">Jan 2021 - Present</time>
                    <div className="flex flex-row items-center gap-x-4 lg:gap-x-10 md:justify-end my-4">
                        <img src="https://www2.deloitte.com/content/dam/Deloitte/in/Images/promo_images/in-deloitte-logo-1x1-noexp.png" className="rounded-full h-12 w-12" />
                        <div className="text-lg lg:text-4xl font-semibold">Business Technical Analyst</div>
                    </div>
                    <div className="text-base font-medium flex gap-x-4 items-center md:justify-end my-4">
                        <GrLocationPin />
                        <span className="text-base">Gurugram, HR</span>
                    </div>
                    The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                    personal computer. It played a pivotal role in establishing desktop publishing as a general
                    office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                    in a beige case with integrated carrying handle; it came with a keyboard and single-button
                    mouse.
                </div>
                <hr />
            </li>
        </ul>
    )
}

export default WorkExp;