import { ArrowUpRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../components/ui/Button";
import ServiceCard from "../components/layout/ServiceCard";
import ProductCard from "../components/layout/ProductCard";
import imgDetailsContact from "../assets/imgs/contact-details.png";
import imgDetailsL from "../assets/imgs/detail-l.png";
import imgDetailsR from "../assets/imgs/detail-r.png";
import { Link, useLocation } from "react-router-dom";
import TrainingCard from "../components/layout/TrainingCard";
import AboutCard from "../components/layout/AboutCard";
import { services } from "../assets/content/ServicesAssets";
import { ProductsAssets } from "../assets/content/ProductsAssets";
import { TrainingsAssets } from "../assets/content/TrainingsAssets";
import { AboutsAssets } from "../assets/content/AboutsAssets";
import { useEffect } from "react";

const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace("#", ""));
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    return (
        <>
            <div>
                <div className="flex flex-col gap-48 w-full items-center relative z-10">
                    <section id="start" className="w-full max-w-[1280px] px-4">
                        <div className="w-full max-w-[90%] lg:max-w-[70%] h-[80svh] flex items-center justify-start">
                            <div className="flex flex-col items-start h-[80%] mt-[2%] gap-6">
                                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text5xl 2xl:text-7xl uppercase">
                                    Soluções personalizadas em Tecnologia
                                </h1>
                                <h2 className="font-extralight text-base">
                                    Automatize processos, otimize recursos e transforme a operação
                                    da sua empresa com as soluções tecnológicas da Directy.
                                </h2>
                                <Button className="mt-[2%]">Entre em contato</Button>
                            </div>
                        </div>
                        <div className="w-full -mb-10">
                            <ChevronDownIcon className="size-6 animate-bounce mx-auto" />
                        </div>
                    </section>

                    <section id="services" className="bg-white w-full">
                        <div className="w-full max-w-[1280px] mx-auto py-20 px-4">
                            <div className="flex flex-col items-center gap-6">
                                <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-black">
                                    Nossos serviços
                                </h1>
                                <h2 className="text-center font-extralight text-black text-sm sm:text-base md:text-lg">
                                    Conheça um pouco sobre os serviços que oferecemos
                                </h2>
                            </div>
                            <div className="grid min-h-96 grid-rows-5 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-10">
                                {services.map((service, index) => (
                                    <div key={index} className="w-full">
                                        <ServiceCard service={service} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="products" className="w-full max-w-[1280px] px-4">
                        <div className="flex flex-col items-center mt-10 gap-6">
                            <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl uppercase">
                                Nossos produtos
                            </h1>
                        </div>
                        <div className="flex flex-col mt-10 items-center gap-6 max-w-[1280px]">
                            {ProductsAssets.map((product, index) => (
                                <div key={index} className="w-full sm:w-[48%] lg:w-fit">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="trainings" className="w-full relative">
                        {TrainingsAssets.map((training, index) => (
                            <div key={index}>
                                <img
                                    src={imgDetailsR}
                                    className="absolute right-0 w-[14%] mt-4 sm:w-[20%]"
                                />
                                <img
                                    src={imgDetailsL}
                                    className="absolute left-0 w-[14%] mt-4 sm:w-[20%]"
                                />
                                <div className="max-w-[1280px] mx-auto">
                                    <TrainingCard training={training} />
                                </div>
                            </div>
                        ))}
                    </section>

                    <section id="about" className="w-full max-w-[1280px] px-4">
                        <div className="lg:w-1/2 flex flex-col gap-4">
                            <p className="font-bold text-3xl sm:text-4xl md:text-5xl">
                                SOMOS A <span className="text-petrol-400">DIRECTY</span>
                            </p>
                            <AboutCard abouts={AboutsAssets} />
                            <p className="font-light text-sm sm:text-base mt-6">
                                Se você busca tecnologia de ponta, confiabilidade e soluções que
                                fazem a diferença, a Directy é a escolha certa.
                            </p>
                            <Link
                                to="/contact"
                                className="rounded-full border border-white px-6 py-2 w-fit mt-4 flex flex-row gap-2 items-center justify-center"
                            >
                                Saiba mais
                                <ArrowUpRightIcon className="w-5 h-5" />
                            </Link>
                        </div>
                    </section>

                    <section
                        id="contact"
                        className="mb-28 relative w-full flex flex-col items-center gap-16 px-4"
                    >
                        <p className="text-center text-4xl sm:text-5xl font-bold lg:max-w-[50vw] mx-auto z-10">
                            Vamos criar algo incrível juntos?
                        </p>
                        <p className="font-light text-sm sm:text-base text-center lg:max-w-[50vw] -mb-5 -mt-6">
                            Sua parceria em soluções inteligentes, personalizadas e seguras para
                            negócios que querem inovar e crescer.
                        </p>
                        <Link
                            to="/contact"
                            className="rounded-full border border-white px-6 py-2 mx-auto w-fit z-10"
                        >
                            Entre em contato
                        </Link>
                        <img src={imgDetailsContact} className="-mt-40 z-0" />
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;
