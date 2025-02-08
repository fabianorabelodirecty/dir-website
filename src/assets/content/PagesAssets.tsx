import { Page } from "../../utils/types/Page";

export const PagesAssets: Page[] = [
    {
        title: "Início",
        target: "/home",
    },
    {
        title: "Serviços",
        cta: "Conheça um pouco sobre os serviços que oferecemos",
        target: "/services",
        subpages: [
            {
                title: "Consulting",
                target: "/consulting",
            },
            {
                title: "Analytics",
                target: "/analytics",
            },
            {
                title: "Digital",
                target: "/digital",
            },
            {
                title: "Operation",
                target: "/operation",
            },
            {
                title: "Insights",
                target: "/insights",
            },
        ],
    },
    {
        title: "Produtos",
        cta: "Nossos produtos",
        target: "/products",
        subpages: [
            {
                title: "Voluntários",
                target: "/volunteers",
            },
        ],
    },
    {
        title: "Treinamentos",
        cta: "Veja nossos treinamentos",
        target: "/trainings",
        subpages: [
            {
                title: "Treinamento em Business Intelligence (BI)",
                target: "/bi",
            },
        ],
    },
    {
        title: "Sobre nós",
        target: "/about",
    },
    {
        title: "Contato",
        cta: "Entre em contato com a Directy",
        target: "/contacts",
        subpages: [
            {
                title: "Fale com um consultor",
                target: "/message",
            },
            {
                title: "Trabalhe conosco",
                target: "/work-with-us",
            },
        ],
    },
];
