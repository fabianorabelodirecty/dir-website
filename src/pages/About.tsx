import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const About: React.FC = () => {
    return (
        <div className="max-w-[1280px] mx-auto p-6 text-white">
            {/* Sobre nós */}
            <section className="mb-10">
                <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
                <p className="text-lg">
                    Na Directy, nossa cultura reflete a seriedade e a dedicação que colocamos em cada projeto.
                </p>
            </section>

            {/* Nossa Cultura */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">Nossa Cultura</h2>
                <p className="italic text-gray-600 mb-4">
                    <strong>Compromisso com Excelência, Ética e Resultados</strong>
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 mr-2" />
                        <span>
                            <strong>Tradição com Inovação:</strong> Combinamos práticas consolidadas com tecnologias
                            avançadas.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 mr-2" />
                        <span>
                            <strong>Qualidade Inquestionável:</strong> Seguimos altos padrões para reduzir falhas e
                            garantir resultados consistentes.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 mr-2" />
                        <span>
                            <strong>Parceria de Confiança:</strong> Nos tornamos aliados estratégicos para alcançar
                            objetivos sustentáveis.
                        </span>
                    </li>
                </ul>
            </section>

            {/* Nosso Compromisso */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">Nosso Compromisso</h2>
                <p className="text-lg mb-4">
                    Trabalhamos lado a lado com nossos clientes para desenvolver soluções tecnológicas que superam
                    expectativas.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-2" />
                        <span>
                            <strong>Ética e Integridade:</strong> Garantimos transparência em cada etapa do projeto.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-2" />
                        <span>
                            <strong>Excelência Personalizada:</strong> Desenvolvemos soluções adaptadas sem comprometer
                            a qualidade.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-2" />
                        <span>
                            <strong>Impacto Sustentável:</strong> Promovemos eficiência, crescimento e sustentabilidade.
                        </span>
                    </li>
                </ul>
            </section>

            {/* Nossa História */}
            <section>
                <h2 className="text-2xl font-semibold mb-3">Nossa História</h2>
                <p className="text-lg">[pode deixar a mesma coisa que tinha antes]</p>
                {/* Caso queira adicionar uma imagem no futuro */}
                {/* <img src="/caminho/para/imagem.png" alt="Nossa História" className="mt-4 rounded-lg shadow-lg" /> */}
            </section>
        </div>
    );
};

export default About;
