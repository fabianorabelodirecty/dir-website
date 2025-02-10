import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Benefits } from "../../utils/types/Product";
import { animated } from "@react-spring/web";
import { Fade } from "react-awesome-reveal";

const ReasonsCard: React.FC<{ reason: Benefits }> = ({ reason }) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    return (
        <animated.div
            className={`flex flex-col gap-6 transition-all cursor-default`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="flex flex-row justify-center items-center transition-all">
                <div className="flex-[1] h-1 bg-white"></div>
                <div className="flex-[9] h-0.5 bg-white/50"></div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center px-4">
                <div className="flex-[1]">
                    <div className="border border-gray-400 border-dashed rounded-full p-2 max-w-fit mx-auto">
                        <div className="border border-gray-400 rounded-full p-2 transition-all">{reason.icon}</div>
                    </div>
                </div>
                <div className="flex-[8] flex flex-col gap-2 my-4 px-4">
                    <p className="font-bold text-xl">{reason.title}</p>
                    {isHovering && reason.content && (
                        <Fade>
                            <p className="font-light">{reason.content}</p>
                        </Fade>
                    )}
                </div>
                <div className="flex-[1]">
                    <div className="flex-[1] p-2 bg-petrol-400/30 aspect-square rounded-full max-w-fit mx-auto">
                        <div
                            className={`p-2 bg-petrol-400/60 rounded-full transition-all m-auto size-full flex justify-center items-center ${
                                isHovering ? "rotate-180" : ""
                            }`}
                        >
                            <ChevronDownIcon className="size-6 text-white m-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center transition-all">
                <div className="flex-[1] h-1 bg-white"></div>
                <div className="flex-[9] h-0.5 bg-white/50"></div>
            </div>
        </animated.div>
    );
};

export default ReasonsCard;
