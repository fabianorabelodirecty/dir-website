import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../components/ui/Button";
import { Services } from "../assets/content/Services";
import ServiceCard from "../components/layout/ServiceCard";
// import { Service } from "../utils/types/Service";
// import { useState } from "react";
import { Products } from "../assets/content/Products";
import ProductCard from "../components/layout/ProductCard";
import imgDetailsContact from "../assets/imgs/contact-details.png";
// import imgDetailsL from "../assets/imgs/detail-l.png";
// import imgDetailsR from "../assets/imgs/detail-r.png";
import { Link } from "react-router-dom";
import { Trainings } from "../assets/content/Trainings";
import TrainingCard from "../components/layout/TrainingCard";
// import ParticlesComponent from "../components/layout/BackgroundParticles";

const Home: React.FC = () => {
    // const [hoveredService, setHoveredService] = useState<Service | undefined>(undefined);

    return (
        <>
            <div>
                {/* <ParticlesComponent /> */}
                <div className="flex flex-col gap-40 w-full items-center relative z-10">
                    <div className="w-full max-w-[1280px]">
                        <div className="lg:max-w-[70%] h-[80svh] items-center justify-center">
                            <div className="flex flex-col items-left h-[80%] mt-[2%] justify-center gap-6">
                                <h1 className="font-bold text-7xl 2xl:text-8xl uppercase">
                                    Soluções personalizadas em Tecnologia
                                </h1>
                                <h2 className="font-extralight">
                                    Automatize processos, otimize recursos e transforme a operação da sua empresa com as
                                    soluções tecnológicas da Directy.
                                </h2>
                                <Button className="mt-[2%]">Entre em contato</Button>
                            </div>
                        </div>
                        <div className="w-full">
                            <ChevronDownIcon className="size-6 animate-bounce mx-auto" />
                        </div>
                    </div>
                    <div className="bg-white w-full">
                        <div className="w-full max-w-[1280px] mx-auto py-20">
                            <div className="flex flex-col items-left h-[80%] mt-[2%] justify-center gap-6">
                                <h1 className="text-center font-bold text-5xl uppercase text-black">Nossos serviços</h1>
                                <h2 className="text-center font-extralight text-black">
                                    Conheça um pouco sobre os serviços que oferecemos
                                </h2>
                            </div>
                            <div className="grid grid-cols-5 mt-10 ml-4">
                                {Services.map((service) => {
                                    return (
                                        <div className="w-fit -ml-4">
                                            <ServiceCard service={service} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[1280px]">
                        <div className="flex flex-col items-left h-[80%] mt-[2%] justify-center gap-6">
                            <h1 className="text-center font-bold text-5xl uppercase">Nossos produtos</h1>
                        </div>
                        <div className="flex flex-col mt-10 items-center justify-center gap-6 max-w-[1280px]">
                            {Products.map((product) => {
                                return (
                                    <div className="w-fit -ml-4 max-w-[1280px]">
                                        <ProductCard product={product} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full max-w-[1280px] ">
                        {Trainings.map((training) => (
                            <div className="relative">
                                {/* <img src={imgDetailsR} className="absolute right-0" /> */}
                                {/* <img src={imgDetailsL} className="absolute left-0" /> */}
                                <TrainingCard training={training} />
                            </div>
                        ))}
                    </div>
                    <div className="mb-28 relative w-full flex flex-col items-center gap-16">
                        <p className="text-center text-5xl font-bold lg:max-w-[50svw] mx-auto z-10">
                            Vamos criar algo incrível juntos?
                        </p>
                        <Link to="/contact" className="rounded-full border border-white px-6 py-2 mx-auto w-fit z-10">
                            Entre em contato
                        </Link>
                        <img src={imgDetailsContact} className="-mt-40 z-0" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
