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

export const services: Service[] = [
    {
        name: "Consulting",
        title: "Soluções para Transformação Digital",
        desc: "Obtenha uma visão estratégica do cenário da sua empresa com a Directy Consulting. Compare o desempenho do seu negócio com o mercado e tome decisões embasadas no nosso mapa de decisões estratégico, que inclui ações gerenciais e operacionais personalizadas. Descubra insights únicos para transformar desafios em oportunidades.",
        logo: imgConsulting,
        page: "/consulting",
        color: "#CD373D",
        imgDetails: imgDetailsConsulting,
        cta: "Não sabe por onde começar?",
        contentText:
            "A Directy Consulting é a escolha ideal para mapear soluções e criar roadmaps e blueprints personalizados para a transformação digital da sua empresa. Se você sente que precisa melhorar seus processos, mas ainda não tem clareza sobre os próximos passos, nossa consultoria oferece a visão estratégica necessária para iniciar sua jornada.",
        reasons: [
            "Criação de uma visão estratégica que direciona seu negócio para o sucesso.",
            "Melhoria nos processos de gestão, garantindo mais eficiência.",
            "Decisões baseadas em dados e estratégias assertivas.",
            "Mapeamento estratégico detalhado com ações gerenciais e operacionais otimizadas.",
        ],
    },
    {
        name: "Analytics",
        title: "Transforme Dados em Decisões Estratégicas",
        desc: "Garanta precisão na tomada de decisões com o Directy Analytics. Aproveite visualizações gráficas avançadas que cruzam dados em tempo real, utilizando as melhores tecnologias do mercado para melhorar ações gerenciais e operacionais.",
        logo: imgAnalytics,
        page: "/analytics",
        color: "#9360AB",
        imgDetails: imgDetailsAnalytics,
        cta: "Sofrendo com o excesso de dados e informações?",
        contentText:
            "A Directy Analytics oferece soluções completas para o tratamento de dados, organização e geração de insights valiosos. Com a história contada pelos seus dados, você poderá transformar sua empresa e tomar decisões mais assertivas.",
        reasons: [
            "Geração de insights que orientam decisões estratégicas e gerenciais.",
            "Visualizações gráficas e cruzamento de dados para análises aprofundadas.",
            "Construção de dashboards e soluções completas de BI.",
            "Utilização das melhores tecnologias do mercado para garantir resultados precisos.",
        ],
    },
    {
        name: "Digital",
        title: "Transforme Processos com a Transformação Digital",
        desc: "Lidere a transformação digital com o Directy Digital. Desenvolvemos aplicativos e portais personalizados para alinhar seus processos de negócio às melhores tecnologias do mercado, sempre com foco no consumidor final e na eficiência operacional.",
        logo: imgDigital,
        page: "/digital",
        color: "#5E8CBE",
        imgDetails: imgDetailsDigital,
        cta: "Cansado de gerenciar operações em planilhas?",
        contentText:
            "Com a Directy Digital, sua empresa dá o próximo passo na Transformação Digital, integrando o digital ao centro de suas atividades, processos e operações. Economize recursos, otimize fluxos de trabalho e cultive uma cultura de inovação dentro da sua organização.",
        reasons: [
            "Utilização das melhores tecnologias do mercado para digitalizar processos.",
            "Desenvolvimento de aplicativos e portais customizados, alinhados ao seu negócio.",
            "Foco no consumidor final, oferecendo uma experiência aprimorada e eficiente.",
            "Redução de custos operacionais e aumento da produtividade.",
        ],
    },
    {
        name: "Operation",
        title: "Automação Inteligente para Mais Resultados",
        desc: "Automatize processos de negócios com o Directy Operation. Aumente a eficiência estratégica da sua empresa ao adotar as melhores tecnologias e práticas de mercado para liberar as equipes para focarem no que realmente importa.",
        logo: imgOperation,
        page: "/operation",
        color: "#259A89",
        imgDetails: imgDetailsOperation,
        cta: "Sua empresa perde tempo com tarefas manuais?",
        contentText:
            "A Directy Operation é a solução ideal para quem busca automatizar os processos de negócio, eliminando desperdícios de tempo e aumentando a produtividade. Com foco estratégico e tecnologia avançada, garantimos mais eficiência operacional e melhores resultados financeiros.",
        reasons: [
            "Automação de rotinas e processos, eliminando gargalos operacionais.",
            "Uso estratégico da tecnologia para reduzir trabalhos manuais.",
            "Aumento da produtividade e maximização da lucratividade.",
            "Soluções personalizadas para atender às necessidades específicas do seu negócio.",
        ],
    },
    {
        name: "Insights",
        title: "Inteligência Artificial para Potencializar Seus Processos",
        desc: "Antecipe tendências e minimize riscos com o Directy Insights. Através de análises preditivas baseadas em dados históricos e benchmarks de mercado, fornecemos previsões que guiam suas decisões estratégicas com confiança.",
        logo: imgInsights,
        page: "/insights",
        color: "#CFB74D",
        imgDetails: imgDetailsInsights,
        cta: "Sua empresa enfrenta desafios com processos repetitivos e perda de eficiência?",
        contentText:
            "A Directy Insights traz soluções avançadas com o uso de Inteligência Artificial, permitindo prever tendências e analisar dados estratégicos para otimizar a operação do seu negócio. Com a IA, você ganha agilidade e elimina a sobrecarga de trabalho manual, focando no crescimento e nas oportunidades do mercado.",
        reasons: [
            "Previsão de tendências e análise de riscos para tomada de decisões mais assertivas.",
            "Ferramentas de inteligência artificial que otimizam o trabalho e aceleram processos.",
            "Análises preditivas que ajudam a mapear o comportamento do mercado e da concorrência.",
            "Redução do tempo e dos custos operacionais com soluções inteligentes.",
        ],
    },
];
