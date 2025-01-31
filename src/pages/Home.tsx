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
                    <section id="start" className="w-full max-w-[1280px]">
                        <div className="lg:max-w-[70%] h-[80svh] items-center justify-center">
                            <div className="flex flex-col items-left h-[80%] mt-[2%] justify-center gap-6">
                                <h1 className="font-bold text-7xl 2xl:text-8xl uppercase">
                                    Soluções personalizadas em Tecnologia
                                </h1>
                                <h2 className="font-extralight">
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
                        <div className="w-full max-w-[1280px] mx-auto py-20">
                            <div className="flex flex-col items-left h-[80%] mt-[2%] justify-center gap-6">
                                <h1 className="text-center font-bold text-5xl uppercase text-black">
                                    Nossos serviços
                                </h1>
                                <h2 className="text-center font-extralight text-black">
                                    Conheça um pouco sobre os serviços que oferecemos
                                </h2>
                            </div>
                            <div className="grid grid-cols-5 mt-10 ml-4 gap-4 min-h-96">
                                {services.map((service, index) => (
                                    <div key={index} className="w-fit -ml-10">
                                        <ServiceCard service={service} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section id="products" className="w-full max-w-[1280px]">
                        <div className="flex flex-col items-left h-[80%] mt-[2%] justify-center gap-6">
                            <h1 className="text-center font-bold text-5xl uppercase">
                                Nossos produtos
                            </h1>
                        </div>
                        <div className="flex flex-col mt-10 items-center justify-center gap-6 max-w-[1280px]">
                            {ProductsAssets.map((product, index) => {
                                return (
                                    <div key={index} className="w-fit -ml-4 max-w-[1280px]">
                                        <ProductCard product={product} />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    <section id="trainings" className="w-full">
                        {TrainingsAssets.map((training, index) => (
                            <div key={index}>
                                <img src={imgDetailsR} className="absolute right-0 w-[14%] mt-4" />
                                <img src={imgDetailsL} className="absolute left-0 w-[14%] mt-4" />
                                <div className="max-w-[1280px] mx-auto">
                                    <TrainingCard training={training} />
                                </div>
                            </div>
                        ))}
                    </section>
                    <section id="about" className="w-full max-w-[1280px]">
                        <div className="lg:w-1/2 flex flex-col gap-4">
                            <p className="font-bold text-5xl">
                                SOMOS A <span className="text-petrol-400">DIRECTY</span>
                            </p>
                            <AboutCard abouts={AboutsAssets} />
                            <p className="font-light text-sm mt-6">
                                Se você busca tecnologia de ponta, confiabilidade e soluções que
                                fazem a diferença, a Directy é a escolha certa.
                            </p>
                            <Link
                                to="/contact"
                                className="rounded-full border border-white px-6 pr-5 py-2 w-fit mt-4 flex flex-row gap-2 items-center justify-center"
                            >
                                Saiba mais
                                <ArrowUpRightIcon className="size-4" />
                            </Link>
                        </div>
                    </section>
                    <section
                        id="contact"
                        className="mb-28 relative w-full flex flex-col items-center gap-16"
                    >
                        <p className="text-center text-5xl font-bold lg:max-w-[50svw] mx-auto z-10">
                            Vamos criar algo incrível juntos?
                        </p>
                        <p className="font-light text-sm text-center lg:max-w-[50svw] -mb-5 -mt-6">
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
