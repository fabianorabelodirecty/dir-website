import { useParams } from "react-router-dom";
import { services } from "../assets/content/ServicesAssets";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { CheckBadgeIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import imgDetailsL from "../assets/imgs/detail-l.png";
import imgDetailsR from "../assets/imgs/detail-r.png";
import ContactForm from "../components/layout/ContactForm";
import { Fade, Slide } from "react-awesome-reveal";

const Services: React.FC = () => {
    const { service } = useParams();

    const currentService = services.find((item) => item?.page?.split("/")[1] === service);

    return (
        <>
            <div className="flex flex-col items-center gap-40 pb-20 overflow-x-hidden ">
                <section className="max-w-[1280px] flex items-start w-full flex-col gap-10 pt-6 xl:pt-10 px-4 lg:px-0">
                    <Breadcrumbs color={currentService?.color} />
                    <div className="flex flex-col lg:flex-row lg:gap-40 lg:justify-between h-full min-h-[60svh] relative max-w-svw">
                        <div className="lg:max-w-[50%] flex flex-col gap-6 max-w-[90%] mx-auto w-full">
                            <p className="uppercase font-bold -mb-2" style={{ color: currentService?.color }}>
                                Directy {currentService?.name}
                            </p>
                            <h1 className=" text-4xl lg:text-6xl font-semibold">{currentService?.cta}</h1>
                            <p>{currentService?.contentText}</p>
                        </div>
                        <Slide direction="right" className="max-w-[90%] mx-auto w-full">
                            <div className="lg:-mt-20 mt-10 relative ">
                                <div className="rounded-full animate-slow-spin lg:h-[60svh] 2xl:max-w-full relative aspect-square items-center flex border border-gray-500/40">
                                    <div
                                        className="p-2 absolute -right-2 rounded-full"
                                        style={{ backgroundColor: currentService?.color }}
                                    />
                                </div>
                                <div
                                    className="rounded-full m-10 absolute top-0 right-0 aspect-square justify-center items-center flex border-[1rem]"
                                    style={{ borderColor: currentService?.color }}
                                >
                                    <img src={currentService?.logo} className="w-3/4" />
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="w-full -mb-10">
                        <ChevronDownIcon className="size-6 animate-bounce mx-auto" />
                    </div>
                </section>
                <section className="bg-black w-full mx-auto relative flex flex-col items-center justify-center text-white px-4 lg:px-0">
                    <div className="absolute right-0 top-0 w-[14%] mt-12 hidden lg:flex">
                        <img src={imgDetailsR} className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 opacity-50 mix-blend-color"
                            style={{ backgroundColor: currentService?.color }}
                        />
                    </div>
                    <div className="absolute left-0 top-0 w-[14%] mt-12 hidden lg:flex">
                        <img src={imgDetailsL} className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 opacity-50 mix-blend-color"
                            style={{ backgroundColor: currentService?.color }}
                        />
                    </div>
                    <div className="max-w-[1280px] flex items-start w-full flex-col gap-10 pt-6">
                        <h1 className="text-5xl font-bold text-center w-full">
                            Por que escolher a Directy {currentService?.name}?
                        </h1>
                        <p className="text-center w-full font-light text-white/80 -mt-2 mb-2">
                            {currentService?.title}
                        </p>
                        <div className="flex flex-col text-left gap-4 mx-auto">
                            {currentService?.reasons?.map((item, index) => (
                                <Slide key={index} direction="left" delay={index * 100}>
                                    <div className="flex flex-row gap-4">
                                        <CheckBadgeIcon className="size-6" style={{ color: currentService?.color }} />
                                        <p>{item}</p>
                                    </div>
                                </Slide>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Formulário de contato */}
                <section className="w-full bg-white p-10 py-30 text-black">
                    <Fade>
                        <div className="max-w-[1280px] mx-auto">
                            <ContactForm color={currentService?.color} />
                        </div>
                    </Fade>
                </section>
            </div>
        </>
    );
};

export default Services;
