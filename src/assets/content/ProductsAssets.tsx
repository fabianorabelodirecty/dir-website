import {
    ArchiveBoxIcon,
    BuildingOffice2Icon,
    CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { Product } from "../../utils/types/Product";
import volunteerHero from "../../assets/content/imgs/volunteer-hero.png";
import volunteerAction from "../../assets/content/imgs/volunteer-action.png";

export const ProductsAssets: Product[] = [
    {
        name: "Voluntários",
        cta: "Fortaleça sua rede de voluntariado com a plataforma Voluntários Directy",
        desc: "O Voluntários Directy é a solução ideal para empresas e organizações que buscam engajar sua equipe em ações sociais de forma eficiente. A plataforma facilita a comunicação com voluntários, permitindo o envio automático de convites para ações de voluntariado e gerenciando doações, comitês e campanhas. Além disso, proporciona a criação de iniciativas personalizadas por região, alinhando esforços de maneira estratégica e integrada. Seja para um evento específico ou para uma ação contínua, a Voluntários Directy conecta sua equipe com oportunidades que fazem a diferença, com flexibilidade e praticidade.",
        phrase: "Transforme o engajamento voluntário em um impacto real. Faça parte dessa rede de transformação!",
        page: "/volunteers",
        contactTitle: "Junte-se à transformação social com sua empresa!",
        contactSub:
            "Preencha o formulário abaixo para saber mais sobre como o Voluntários Directy pode impulsionar a responsabilidade social na sua organização.",
        contentText:
            "O Voluntários Directy é uma plataforma digital inovadora que conecta empresas, colaboradores e projetos sociais, facilitando ações de voluntariado com um impacto real na comunidade. Ela oferece uma solução ágil e eficiente para engajar os colaboradores da sua empresa em causas sociais, transformando o voluntariado em uma ferramenta de impacto social e fortalecimento de marca.",
        pagePhrase:
            "Transforme o voluntariado em um motor de transformação para sua empresa e para a comunidade.",
        pageDesc:
            "Com o Voluntários Directy, as empresas podem incentivar e organizar ações de voluntariado de maneira prática e eficiente. Nossa plataforma possibilita o envio de convites automáticos para cada nova ação social, tornando a mobilização de colaboradores mais simples e eficaz. Além disso, ela permite o gerenciamento completo das iniciativas de voluntariado, com ferramentas de gestão financeira, indicadores de performance e a capacidade de conectar ações a causas específicas, potencializando o impacto das suas campanhas sociais.",
        reasons: [
            {
                title: "Gestão eficiente de ações sociais",
                content:
                    "Facilite a organização e monitoramento de múltiplas campanhas de voluntariado com ferramentas de gestão intuitivas.",
                icon: (
                    <>
                        <CursorArrowRaysIcon className="size-6" />
                    </>
                ),
            },
            {
                title: "Apoio à doação de recursos",
                content:
                    "Permita que sua empresa ou seus colaboradores contribuam com doações para as causas apoiadas, com a facilidade de pagamento via cartão de crédito ou PIX.",
                icon: (
                    <>
                        <ArchiveBoxIcon className="size-6" />
                    </>
                ),
            },
            {
                title: "Comitês de voluntários personalizados",
                content:
                    "Crie e administre comitês de voluntariado por região, otimizando a coordenação e o engajamento local.",
                icon: (
                    <>
                        <BuildingOffice2Icon className="size-6" />
                    </>
                ),
            },
        ],
        picture: volunteerHero,
        auxPic: volunteerAction,
    },
];
