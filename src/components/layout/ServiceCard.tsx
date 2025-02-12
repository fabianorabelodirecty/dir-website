import { useState } from "react";
import { Service } from "../../utils/types/Service";
import { Link } from "react-router-dom";

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group bg-primary-400 border-white/50 border 
                        rounded-3xl overflow-hidden p-8 2xl:transition-transform duration-300
                        w-72
                        hover:z-20 hover:scale-110 2xl:absolute relative mx-auto"
        >
            <div className="flex flex-col relative z-10">
                <img
                    src={service.logo}
                    className="w-[60%] group-hover:w-[75%] mb-20 transition-all"
                />
                <p className="text-xs 2xl:text-sm my-2 transition-all line-clamp-6 group-hover:line-clamp-none text-left">
                    {service.desc}
                </p>
                {isHovering && (
                    <Link
                        to={"/services" + service.page}
                        className="hidden 2xl:flex text-sm mt-4 bg-white/20 opacity-0 transition-all
                        group-hover:opacity-100 w-fit rounded-full px-6 py-2 text-white
                        hover:opacity-50"
                    >
                        Saiba mais
                    </Link>
                )}
                <Link
                    to={"/services" + service.page}
                    className="flex 2xl:hidden text-sm mt-4 bg-white/20 w-fit rounded-full px-6 py-2 text-white
                        hover:opacity-50 z-10"
                >
                    Saiba mais
                </Link>
            </div>
            <img
                src={service.imgDetails}
                className="w-full absolute group-hover:h-[75%] object-cover -bottom-4 left-0 z-0"
            />
        </div>
    );
};

export default ServiceCard;
