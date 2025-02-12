import {
    CheckBadgeIcon,
    GlobeAmericasIcon,
    HandThumbUpIcon,
    ScaleIcon,
    SparklesIcon,
    StarIcon,
} from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";
import imgLighthouse from "../assets/imgs/lighthouse.png";
import Reveal, { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import imgDetailsContact from "../assets/imgs/contact-details.png";
import { fadeFromLeft } from "../styles/animations";

const About: React.FC = () => {
    return (
        <div className=" mx-auto flex flex-col relative z-10 overflow-x-hidden min-h-fit">
            {/* Sobre nós */}
            <section className="mb-10 max-w-[1280px] w-full mx-auto min-h-[50svh] items-center flex z-10">
                <h1 className="text-3xl font-bold mb-4 lg:max-w-[60%]">
                    Na Directy, nossa cultura reflete a seriedade e a dedicação que colocamos em cada projeto.
                </h1>
            </section>

            {/* Nosso Compromisso */}
            <section className="w-full relative  bg-white text-black pt-8">
                <img
                    src={imgLighthouse}
                    draggable={false}
                    className="absolute right-[2svw] -top-80 opacity-30 h-80 aspect-[44/20] min-w-[44rem] max-w-none"
                />
                <div className="max-w-[1280px] mx-auto py-10">
                    <h2 className="text-2xl font-semibold mb-1">Nosso Compromisso</h2>
                    <p className="mb-8 opacity-80">
                        Trabalhamos lado a lado com nossos clientes para desenvolver soluções tecnológicas que superam
                        expectativas.
                    </p>
                    <div className="grid grid-cols-3 gap-20">
                        <AboutCard
                            icon={<ScaleIcon className="size-8" />}
                            title="Ética e Integridade"
                            content="Garantimos transparência em cada etapa do projeto."
                        />
                        <AboutCard
                            icon={<StarIcon className="size-8" />}
                            title="Excelência Personalizada"
                            content="Desenvolvemos soluções adaptadas sem comprometer a qualidade."
                        />
                        <AboutCard
                            icon={<GlobeAmericasIcon className="size-8" />}
                            title="Impacto Sustentável"
                            content="Promovemos eficiência, crescimento e sustentabilidade."
                        />
                    </div>
                </div>
            </section>

            {/* Nossa Cultura */}
            <section className="w-full bg-white text-black pb-18">
                <div className="max-w-[1280px] mx-auto py-10">
                    <h2 className="text-2xl font-semibold mb-1">Nossa Cultura</h2>
                    <p className="mb-8 opacity-80">Compromisso com Excelência, Ética e Resultados</p>
                    <div className="grid grid-cols-3 gap-20">
                        <AboutCard
                            icon={<SparklesIcon className="size-8" />}
                            title="Tradição com Inovação"
                            content="Combinamos práticas consolidadas com tecnologias avançadas."
                        />
                        <AboutCard
                            icon={<CheckBadgeIcon className="size-8" />}
                            title="Qualidade Inquestionável"
                            content="Seguimos altos padrões para reduzir falhas e garantir resultados consistentes."
                        />
                        <AboutCard
                            icon={<HandThumbUpIcon className="size-8" />}
                            title="Parceria de Confiança"
                            content="Nos tornamos aliados estratégicos para alcançar objetivos sustentáveis."
                        />
                    </div>
                </div>
            </section>

            {/* Nossa História */}
            <section className="mb-10 min-h-96 px-[10svw] mt-20">
                <h2 className="text-3xl font-semibold mb-1 text-center">Nossa História</h2>
                <p className="mb-8 text-center opacity-80 text-sm">Conheça um pouco da trajetória da Directy</p>
                <div className="relative">
                    {/* Timeline Horizontal (Desktop) */}
                    <Reveal
                        keyframes={fadeFromLeft}
                        duration={1000}
                        triggerOnce
                        className="hidden md:flex items-center justify-center py-6"
                    >
                        <div className="relative w-full">
                            <div className="absolute inset-0 border-t-2 border-gray-400 top-3" />
                            {timeline.map((item, index) => {
                                // Calculando a posição dinamicamente
                                const positionPercent =
                                    index === 0
                                        ? 0
                                        : index === timeline.length - 1
                                        ? 100
                                        : (index / (timeline.length - 1)) * 100;
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center absolute"
                                        style={{
                                            left: `${positionPercent}%`,
                                            marginLeft: `-${timeline.length * 2.5}svw`,
                                            width: `${100 / timeline.length}%`,
                                        }}
                                    >
                                        <div className="w-6 h-6 bg-petrol-400 rounded-full border-4 border-white/50"></div>
                                        <div className="mt-2 text-xl font-bold">{item.year}</div>
                                        <div className="text-center max-w-[200px] font-bold text-sm opacity-80">
                                            {item.title}
                                        </div>
                                        <p className="mt-2 text-gray-400 max-w-[180px] text-center text-sm">
                                            {item.content}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </Reveal>

                    {/* Timeline Vertical (Mobile) */}
                    <div className="md:hidden space-y-8">
                        {timeline.map((item, index) => (
                            <div key={index} className={`flex flex-col items-center`}>
                                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-800" />
                                <div
                                    className={`text-xl font-semibold mt-4 ${
                                        index % 2 === 0 ? "text-left" : "text-right"
                                    }`}
                                >
                                    {item.year}
                                </div>
                                <div className={`text-lg mt-2 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                                    {item.title}
                                </div>
                                <p className={`mt-2 text-gray-400 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contato */}
            <section id="contact" className="mb-28 relative w-full flex flex-col items-center gap-16 px-4 bg-black">
                <Fade>
                    <p className="text-center text-4xl sm:text-5xl font-bold lg:max-w-[50vw] mx-auto z-10">
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
    );
};

const AboutCard: React.FC<{ icon: ReactNode; title: string; content: string }> = ({ icon, title, content }) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col w-full items-start gap-2 border-b-[3px] border-petrol-400 pb-3">
                {icon}
                <p className="text-center font-bold">{title}</p>
            </div>
            <div className="w-full">
                <p className="text-sm text-left">{content}</p>
            </div>
        </div>
    );
};

const timeline = [
    {
        year: "2016",
        title: "Ano de fundação",
        content: "Aqui iniciamos nosso sonho de entregar projetos de alta qualidade no setor de tecnologia.",
    },
    {
        year: "2017",
        title: "Especialização",
        content: "Com especialização em Big Data e BI, nos consolidamos no mercado Capixaba.",
    },
    {
        year: "2018 - 2020",
        title: "Atendimento Brasil",
        content: "Expandimos o braço de atendimento e entrega para outros estados brasileiros.",
    },
    {
        year: "2021 - 2025",
        title: "Novos mercados",
        content: "Abertura a novos mercados no Brasil.",
    },
];

export default About;
