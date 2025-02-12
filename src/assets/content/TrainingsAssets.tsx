import {
    ArrowTrendingUpIcon,
    ArrowUturnRightIcon,
    ChartBarIcon,
    ChartPieIcon,
    CircleStackIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";
import { Training } from "../../utils/types/Training";
import imgBI from "../content/imgs/bi-cover.png";

export const TrainingsAssets: Training[] = [
    {
        color: "#DEA011", // #F0C636 // #F8DD6A
        page: "/bi",
        title: "Capacitações para Líderes e Equipes",
        cta: "Você está pronto para levar suas habilidades analíticas para o próximo nível?",
        desc: "O Power BI é a ferramenta ideal para empresas que buscam transformar grandes volumes de dados em decisões informadas. No nosso treinamento, você aprenderá a criar dashboards interativos e relatórios dinâmicos, desenvolvendo uma visão analítica profunda para otimizar processos e estratégias. Se você deseja aprimorar a tomada de decisões com base em dados precisos e visuais, este curso é para você. Oferecemos tanto a opção presencial quanto online ao vivo, para que você possa aprender no seu ritmo e conforme sua necessidade.",
        contentText:
            "No nosso treinamento, você aprenderá a criar dashboards interativos e relatórios dinâmicos, desenvolvendo uma visão analítica profunda para otimizar processos e estratégias. Se você deseja aprimorar a tomada de decisões com base em dados precisos e visuais, este curso é para você. Oferecemos tanto a opção presencial quanto online ao vivo, para que você possa aprender no seu ritmo e conforme sua necessidade.",
        pagePhrase:
            "Desenvolva competências essenciais em análise de dados e comece a transformar os dados da sua empresa em oportunidades de negócio.",
        pageDesc:
            "Aprenda a criar dashboards interativos e relatórios dinâmicos, aplicando análise de dados para tomadas de decisões estratégicas.",
        modes: "Presencial ou Online Ao Vivo",
        reasons: [
            {
                title: "Desenvolvimento de competências em análise de dados",
                icon: <ChartBarIcon className="size-6" />,
                content: "Torne-se um especialista em Power BI e ganhe uma vantagem competitiva no mercado.",
            },
            {
                title: "Tomada de decisões mais assertivas",
                icon: <ArrowUturnRightIcon className="size-6" />,
                content: "Aprenda a interpretar dados de maneira eficaz para tomar decisões estratégicas.",
            },
            {
                title: "Visão analítica avançada",
                icon: <EyeIcon className="size-6" />,
                content: "Desenvolva habilidades para criar visualizações poderosas que destacam padrões e tendências.",
            },
            {
                title: "Criação de Dashboards interativos",
                icon: <ChartPieIcon className="size-6" />,
                content: "Aprenda a construir dashboards personalizados para transformar dados em insights acionáveis.",
            },
            {
                title: "Integração com múltiplas fontes de dados",
                icon: <CircleStackIcon className="size-6" />,
                content: "Domine a integração do Power BI com fontes como Excel, SQL e Google Analytics.",
            },
            {
                title: "Análise Preditiva com Power BI",
                icon: <ArrowTrendingUpIcon className="size-6" />,
                content: "Explore funcionalidades de análise preditiva para identificar tendências futuras.",
            },
        ],
        contactTitle: "Invista no seu time e na transformação digital da sua empresa!",
        contactSub:
            "Transforme dados em oportunidades de negócio. Entre em contato agora para saber mais sobre o próximo curso de Power BI.",
        titlePage: "Treinamento em Business Intelligence (BI)",
        ctaPage: "Entre em contato agora para saber mais sobre o próximo curso de Power BI",
        picture: imgBI,
    },
];
