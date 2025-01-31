import { useState } from "react";
import { Page } from "../../utils/types/Page";
import imgWhiteLogo from "../../assets/imgs/white_logo.png";
import { Link } from "react-router-dom";
import { pages } from "../../assets/content/pages";

const Header: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page | undefined>(undefined);

    return (
        <>
            <div
                className={`flex flex-row items-center py-6 max-w-[1280px] w-full z-50 ${
                    currentPage ? "text-black" : "text-white"
                }`}
            >
                <Link to={"/"} className="z-20">
                    <img
                        src={imgWhiteLogo}
                        className={currentPage ? "filter brightness-0" : ""}
                        alt="Logo"
                    />
                </Link>

                <div className="flex flex-row items-center ml-16 gap-8 z-20">
                    {pages.map((page) => (
                        <>
                            {!page.subpages?.length && page.target ? (
                                <Link
                                    onClick={() => setCurrentPage(undefined)}
                                    to={page.target}
                                    className="hover:bg-gray-400/20 p-2 px-8 rounded-full"
                                >
                                    {page.title}
                                </Link>
                            ) : (
                                <button
                                    type="button"
                                    className="hover:bg-gray-400/20 p-2 px-8 rounded-full"
                                    onMouseEnter={() => setCurrentPage(page)}
                                    onMouseLeave={() => setCurrentPage(undefined)}
                                >
                                    {page.title}
                                </button>
                            )}
                        </>
                    ))}
                </div>
                <div className="mr-0 ml-auto z-20">
                    <Link to={"/contact"}>{"Contato"}</Link>
                </div>
                {currentPage && (
                    <div
                        className="absolute z-10 bg-white pt-20 w-full left-0 top-0"
                        onMouseEnter={() => setCurrentPage(currentPage)}
                        onMouseLeave={() => setCurrentPage(undefined)}
                    >
                        <div className="max-w-[1280px] mx-auto px-10 py-6 pb-16 flex flex-col gap-4">
                            <p className="text-2xl">{currentPage?.cta} ⇁</p>
                            <div className="flex flex-col gap-2">
                                <p className="">{currentPage.title}</p>
                                <div className="flex flex-col gap-1">
                                    {currentPage.subpages?.map((item) => (
                                        <Link
                                            onClick={() => setCurrentPage(undefined)}
                                            to={currentPage.target + item.target || "/"}
                                            className="font-light hover:bg-gray-400/20 w-fit p-2 px-4 rounded-full"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
