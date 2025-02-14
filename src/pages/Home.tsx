import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ServiceCard from "../components/layout/ServiceCard";
import ProductCard from "../components/layout/ProductCard";
import imgDetailsContact from "../assets/imgs/contact-details.png";
import imgDetailsL from "../assets/imgs/detail-l.png";
import imgDetailsR from "../assets/imgs/detail-r.png";
import imgLighthouse from "../assets/imgs/lighthouse.png";
import { Link, useLocation } from "react-router-dom";
import TrainingCard from "../components/layout/TrainingCard";
import { services } from "../assets/content/ServicesAssets";
import { ProductsAssets } from "../assets/content/ProductsAssets";
import { TrainingsAssets } from "../assets/content/TrainingsAssets";
import { AboutsAssets } from "../assets/content/AboutsAssets";
import { Fade, Slide } from "react-awesome-reveal";
import AboutSection from "../components/layout/AboutSection";
import { FeedbacksAssets } from "../assets/content/FeedbackAssets";
import FeedbackCard from "../components/layout/FeedbackCard";
import Slider from "../components/ui/Slider";

// import ParticlesBg from "particles-bg";

const Home: React.FC = () => {
    const location = useLocation();

    const [text, setText] = useState("");
    const fullText = "Soluções personalizadas em Tecnologia";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 45);

        return () => clearInterval(interval);
    }, []);

    const fadeIn = useSpring({ opacity: text ? 1 : 0, from: { opacity: 0 } });

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
                {/* <ParticlesBg type="cobweb" color="#FFFFFF" bg={true} /> */}
                <div className="flex flex-col gap-40 lg:gap-20 w-full items-center relative z-10 overflow-x-hidden">
                    {/* Hero Section */}
                    <section id="start" className="w-full max-w-[1280px] px-4">
                        <div className="w-full max-w-[90%] xl:max-w-[70%] h-[80svh] flex items-center justify-start">
                            <div className="flex flex-col items-start h-[80%] mt-[2%] gap-6">
                                <animated.h1
                                    style={fadeIn}
                                    className="font-bold text-4xl sm:text-4xl xl:text-6xl xl:text-7xl uppercase"
                                >
                                    {text}
                                </animated.h1>
                                <Fade>
                                    <h2 className="font-extralight text-lg">
                                        Automatize processos, otimize recursos e transforme a operação da sua empresa
                                        com as soluções tecnológicas da Directy.
                                    </h2>
                                </Fade>
                                <Link
                                    to={"/contacts/message"}
                                    className="bg-white hover:opacity-50 active:bg-gray-500 text-black disabled:opacity-80 disabled:bg-gray-500/20 rounded-full px-4 cursor-pointer py-2 flex w-fit items-center justify-center transition-all"
                                >
                                    Entre em contato
                                </Link>
                            </div>
                        </div>
                        <div className="w-full -mb-10">
                            <ChevronDownIcon className="size-6 animate-bounce mx-auto" />
                        </div>
                    </section>

                    {/* Serviços */}
                    <section
                        id="services"
                        className="bg-white w-full relative min-h-[80svh] flex flex-col items-center justify-center"
                    >
                        <img
                            src={imgLighthouse}
                            draggable={false}
                            className="absolute right-[2svw] -top-80 opacity-30 h-80 aspect-[44/20] min-w-[44rem] max-w-none"
                        />
                        <div className="w-full max-w-[1280px] mx-auto py-20 px-4">
                            <Fade direction="up">
                                <div className="flex flex-col items-center gap-6">
                                    <h1 className="text-center font-bold text-3xl sm:text-4xl xl:text-5xl uppercase text-black">
                                        Nossos serviços
                                    </h1>
                                    <h2 className="text-center font-extralight text-black text-base xl:text-lg">
                                        Conheça um pouco sobre os serviços que oferecemos
                                    </h2>
                                </div>
                            </Fade>
                            <div className="xl:flex flex-row min-h-96 gap-4 mt-10 -ml-4 hidden">
                                {services.map((service, index) => (
                                    <Slide
                                        className="w-full hover:z-10"
                                        key={index}
                                        direction="left"
                                        delay={index * 100}
                                        duration={500}
                                    >
                                        <div className="w-full">
                                            <ServiceCard service={service} />
                                        </div>
                                    </Slide>
                                ))}
                            </div>
                            <div className="h-fit flex xl:hidden">
                                <Slider
                                    items={services}
                                    renderItem={(service) => (
                                        <div className="w-full">
                                            <ServiceCard service={service} />
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Produtos */}
                    <section id="products" className="w-full max-w-[1280px] px-4 -mt-10 bg-black min-h-[80svh]">
                        <Fade direction="up" triggerOnce>
                            <div className="flex flex-col items-center mt-20 gap-6">
                                <h1 className="text-center font-bold text-3xl sm:text-4xl xl:text-5xl uppercase">
                                    Nossos produtos
                                </h1>
                            </div>
                        </Fade>
                        <div className="flex flex-col mt-4 items-center gap-20 max-w-[1280px]">
                            {ProductsAssets.map((product, index) => (
                                <Slide
                                    key={index}
                                    direction={index % 2 === 0 ? "right" : "left"}
                                    delay={index * 100}
                                    triggerOnce
                                    className="flex items-center"
                                >
                                    <div className="w-full xl:w-fit">
                                        <ProductCard product={product} direction={index % 2 === 0 ? "right" : "left"} />
                                    </div>
                                </Slide>
                            ))}
                        </div>
                    </section>

                    {/* Treinamentos */}
                    <section id="trainings" className="w-full relative bg-black">
                        {TrainingsAssets.map((training, index) => (
                            <div key={index} className="min-h-[80svh] flex items-center relative">
                                <Slide
                                    direction="left"
                                    duration={500}
                                    className="absolute left-0 w-[14%] mt-4 sm:w-[20%] hidden xl:flex top-10"
                                >
                                    <img src={imgDetailsL} className="ml-0 mr-auto" />
                                </Slide>
                                <Slide
                                    direction="right"
                                    duration={500}
                                    className="absolute right-0 w-[14%] mt-4 sm:w-[20%] hidden xl:flex top-10"
                                >
                                    <img src={imgDetailsR} className="ml-auto mr-0" />
                                </Slide>
                                <div className="max-w-[1280px] mx-auto">
                                    <TrainingCard training={training} />
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Sobre */}
                    <AboutSection assets={AboutsAssets} />

                    {/* Feedback */}
                    <section
                        id="fedbacks"
                        className="w-full relative bg-black flex flex-col gap-10 min-h-[80svh] items-center justify-center "
                    >
                        <div className="flex flex-col gap-2">
                            <p className="text-center text-base  font-bold mx-auto uppercase opacity-80">Testemunhos</p>
                            <p className="text-center mx-auto text-5xl font-bold">O que nossos clientes dizem</p>
                        </div>
                        <Slider
                            items={FeedbacksAssets}
                            renderItem={(feedback) => <FeedbackCard feedback={feedback} />}
                        />
                    </section>

                    {/* Contato */}
                    <section
                        id="contact"
                        className="mb-28 relative w-full flex flex-col items-center gap-16 px-4 bg-black"
                    >
                        <Fade>
                            <p className="text-center text-4xl sm:text-5xl font-bold xl:max-w-[50vw] mx-auto z-10">
                                Vamos criar algo incrível juntos?
                            </p>
                        </Fade>
                        <Slide direction="up" className="z-10">
                            <Link
                                to="/contacts/message"
                                className="rounded-full border border-white px-6 py-2 mx-auto w-fit z-10 hover:opacity-50 transition-all"
                            >
                                Entre em contato
                            </Link>
                        </Slide>
                        <img src={imgDetailsContact} className="-mt-40 z-0" />
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;
