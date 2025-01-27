import { useState } from "react";
import { Page } from "../../utils/types/Page";
import imgWhiteLogo from "../../assets/imgs/white_logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page | undefined>(undefined);

    const pages: Page[] = [
        {
            title: "Início",
            target: "/home",
        },
        {
            title: "Serviços",
            target: "/student/scheduler",
        },
        {
            title: "Produtos",
            target: "/exercises",
        },
        {
            title: "Treinamentos",
            target: "/student/scheduler",
        },
        {
            title: "Sobre nós",
            target: "/exercises",
        },
    ];

    return (
        <>
            <div className="flex flex-row items-center py-6 max-w-[1280px] w-full">
                <img src={imgWhiteLogo} />
                <div className="flex flex-row items-center ml-16 gap-16">
                    {pages.map((page) => (
                        <>
                            {page.target ? (
                                <Link to={page.target}>{page.title}</Link>
                            ) : (
                                <button type="button" onClick={() => setCurrentPage(page)}>
                                    {page.title}
                                </button>
                            )}
                        </>
                    ))}
                </div>
                <div className="mr-0 ml-auto">
                    <Link to={"/contact"}>{"Contato"}</Link>
                </div>
                <div>{currentPage?.title}</div>
            </div>
        </>
    );
};

export default Header;
