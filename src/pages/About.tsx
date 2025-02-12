import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const About: React.FC = () => {
    return (
        <div className=" mx-auto flex flex-col relative z-10 overflow-x-hidden min-h-fit">
            {/* Sobre nós */}
            <section className="mb-10 max-w-[1280px] w-full mx-auto">
                <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
                <p className="text-lg">
                    Na Directy, nossa cultura reflete a seriedade e a dedicação que colocamos em
                    cada projeto.
                </p>
            </section>

            {/* Nossa Cultura */}
            <section className="mb-10 max-w-[1280px] w-full mx-auto">
                <h2 className="text-2xl font-semibold mb-3">Nossa Cultura</h2>
                <p className="italic text-gray-600 mb-4">
                    <strong>Compromisso com Excelência, Ética e Resultados</strong>
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 mr-2" />
                        <span>
                            <strong>Tradição com Inovação:</strong> Combinamos práticas consolidadas
                            com tecnologias avançadas.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 mr-2" />
                        <span>
                            <strong>Qualidade Inquestionável:</strong> Seguimos altos padrões para
                            reduzir falhas e garantir resultados consistentes.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 mr-2" />
                        <span>
                            <strong>Parceria de Confiança:</strong> Nos tornamos aliados
                            estratégicos para alcançar objetivos sustentáveis.
                        </span>
                    </li>
                </ul>
            </section>

            {/* Nosso Compromisso */}
            <section className="mb-10 max-w-[1280px] w-full mx-auto">
                <h2 className="text-2xl font-semibold mb-3">Nosso Compromisso</h2>
                <p className="text-lg mb-4">
                    Trabalhamos lado a lado com nossos clientes para desenvolver soluções
                    tecnológicas que superam expectativas.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-2" />
                        <span>
                            <strong>Ética e Integridade:</strong> Garantimos transparência em cada
                            etapa do projeto.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-2" />
                        <span>
                            <strong>Excelência Personalizada:</strong> Desenvolvemos soluções
                            adaptadas sem comprometer a qualidade.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-2" />
                        <span>
                            <strong>Impacto Sustentável:</strong> Promovemos eficiência, crescimento
                            e sustentabilidade.
                        </span>
                    </li>
                </ul>
            </section>

            {/* Nossa História */}
            <section className="mb-10 min-h-96 px-[10svw]">
                <h2 className="text-2xl font-semibold mb-3">Nossa História</h2>
                <div className="relative">
                    {/* Timeline Horizontal (Desktop) */}
                    <div className="hidden md:flex items-center justify-center py-6">
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
                    </div>

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
                                <div
                                    className={`text-lg mt-2 ${
                                        index % 2 === 0 ? "text-left" : "text-right"
                                    }`}
                                >
                                    {item.title}
                                </div>
                                <p
                                    className={`mt-2 text-gray-400 ${
                                        index % 2 === 0 ? "text-left" : "text-right"
                                    }`}
                                >
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const timeline = [
    {
        year: "2016",
        title: "Ano de fundação",
        content:
            "Aqui iniciamos nosso sonho de entregar projetos de alta qualidade no setor de tecnologia.",
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
