import { Page } from "../../utils/types/Page";

export const pages: Page[] = [
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
];
