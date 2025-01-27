import { Service } from "../../utils/types/Service";

import imgDigital from "../../assets/imgs/digital.png";
import imgConsulting from "../../assets/imgs/consulting.png";
import imgAnalytics from "../../assets/imgs/analytics.png";
import imgOperation from "../../assets/imgs/operation.png";
import imgInsights from "../../assets/imgs/insights.png";

import imgDetailsDigital from "../../assets/imgs/digital-details.png";
import imgDetailsConsulting from "../../assets/imgs/consulting-details.png";
import imgDetailsAnalytics from "../../assets/imgs/analytics-details.png";
import imgDetailsOperation from "../../assets/imgs/operation-details.png";
import imgDetailsInsights from "../../assets/imgs/insights-details.png";

export const Services: Service[] = [
    {
        name: "Consulting",
        desc: "Obtenha uma visão estratégica do cenário da sua empresa com a Directy Consulting. Compare o desempenho do seu negócio com o mercado e tome decisões embasadas no nosso mapa de decisões estratégico, que inclui ações gerenciais e operacionais personalizadas. Descubra insights únicos para transformar desafios em oportunidades..",
        logo: imgConsulting,
        page: "/consulting",
        color: "#CD373D",
        imgDetails: imgDetailsConsulting,
    },
    {
        name: "Analytics",
        desc: "Garanta precisão na tomada de decisões com o Directy Analytics. Aproveite visualizações gráficas avançadas que cruzam dados em tempo real, utilizando as melhores tecnologias do mercado para melhorar ações gerenciais e operacionais.",
        logo: imgAnalytics,
        page: "/analytics",
        color: "#9360AB",
        imgDetails: imgDetailsAnalytics,
    },
    {
        name: "Digital",
        desc: "Lidere a transformação digital com o Directy Digital. Desenvolvemos aplicativos e portais personalizados para alinhar seus processos de negócio às melhores tecnologias do mercado, sempre com foco no consumidor final e na eficiência operacional.",
        logo: imgDigital,
        page: "/digital",
        color: "#5E8CBE",
        imgDetails: imgDetailsDigital,
    },
    {
        name: "Operation",
        desc: "Automatize processos de negócios com o Directy Operation. Aumente a eficiência estratégica da sua empresa ao adotar as melhores tecnologias e práticas de mercado para liberar as equipes para focarem no que realmente importa.",
        logo: imgOperation,
        page: "/operation",
        color: "#259A89",
        imgDetails: imgDetailsOperation,
    },
    {
        name: "Insights",
        desc: "Antecipe tendências e minimize riscos com o Directy Insights. Através de análises preditivas baseadas em dados históricos e benchmarks de mercado, fornecemos previsões que guiam suas decisões estratégicas com confiança.",
        logo: imgInsights,
        page: "/insights",
        color: "#CFB74D",
        imgDetails: imgDetailsInsights,
    },
];
