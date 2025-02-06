import { useState } from "react";
import { Page } from "../../utils/types/Page";
import imgWhiteLogo from "../../assets/imgs/white_logo.png";
import { Link } from "react-router-dom";
import { PagesAssets } from "../../assets/content/PagesAssets";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page | undefined>(undefined);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div
                className={`flex items-center justify-between relative py-6 max-w-[1280px] w-full z-50 ${
                    currentPage ? "text-black" : "text-white"
                }`}
            >
                <Link to={"/"} className="z-20">
                    <img src={imgWhiteLogo} className={currentPage ? "filter brightness-0" : ""} alt="Logo" />
                </Link>

                <button className="lg:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <XMarkIcon className="w-8 h-8 text-white" />
                    ) : (
                        <Bars3Icon className="w-8 h-8 text-white" />
                    )}
                </button>

                <div className="hidden lg:flex items-center ml-16 gap-8 z-20">
                    {PagesAssets.map((page) => (
                        <div key={page.title} onMouseEnter={() => page.subpages?.length && setCurrentPage(page)}>
                            {!page.subpages?.length && page.target ? (
                                <Link
                                    onClick={() => setCurrentPage(undefined)}
                                    to={page.target}
                                    className="hover:bg-gray-400/20 p-2 px-8 rounded-full"
                                >
                                    {page.title}
                                </Link>
                            ) : (
                                <button type="button" className="hover:bg-gray-400/20 p-2 px-8 rounded-full">
                                    {page.title}
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden lg:block mr-0 ml-auto z-20 ">
                    <Link to={"/contact"} className="hover:bg-gray-400/20 p-2 px-8 rounded-full">
                        {"Contato"}
                    </Link>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white text-black z-40 p-6 flex flex-col gap-4">
                    {PagesAssets.map((page) => (
                        <div key={page.title}>
                            {!page.subpages?.length && page.target ? (
                                <Link onClick={() => setMenuOpen(false)} to={page.target} className="block p-2">
                                    {page.title}
                                </Link>
                            ) : (
                                <details>
                                    <summary className="cursor-pointer p-2">{page.title}</summary>
                                    <div className="pl-4">
                                        {page.subpages?.map((item) => (
                                            <Link
                                                key={item.title}
                                                onClick={() => setMenuOpen(false)}
                                                to={page.target + item.target || "/"}
                                                className="block p-2"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            )}
                        </div>
                    ))}
                    <Link
                        onClick={() => setMenuOpen(false)}
                        to={"/contact"}
                        className="block p-2 hover:bg-gray-400/20 px-8 rounded-full"
                    >
                        Contato
                    </Link>
                </div>
            )}

            {currentPage && (
                <div
                    className="absolute z-10 bg-white text-black pt-20 w-full left-0 top-0"
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
                                        key={item.title}
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
        </>
    );
};

export default Header;
