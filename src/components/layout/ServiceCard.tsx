import { Service } from "../../utils/types/Service";
import Button from "../ui/Button";

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <>
            <div className="bg-primary-400 border-white/50 border rounded-3xl overflow-hidden p-8 w-full relative">
                <div className="flex flex-col relative z-10">
                    <img src={service.logo} className="w-[60%] mb-10" />
                    <p className="text-sm line-clamp-5 my-2">{service.desc}</p>
                    <Button className="text-sm -mb-2 mt-2 bg-white/20" variant="secondary">
                        Saiba mais
                    </Button>
                </div>
                <img src={service.imgDetails} className="w-full absolute -bottom-1 left-0 z-0" />
            </div>
        </>
    );
};
export default ServiceCard;
