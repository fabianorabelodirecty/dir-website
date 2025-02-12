import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import { Page } from "../../utils/types/Page";
import imgWhiteLogo from "../../assets/imgs/white_logo.png";
import { Link } from "react-router-dom";
import { PagesAssets } from "../../assets/content/PagesAssets";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page | undefined>(undefined);
    const [menuOpen, setMenuOpen] = useState(false);

    const transitions = useTransition(currentPage, {
        from: { transform: "translateY(-100%)", zIndex: 10 },
        enter: { transform: "translateY(0%)", zIndex: 10 },
        leave: { transform: "translateY(-100%)", zIndex: -1 },
        config: { duration: 160 },
    });

    return (
        <>
            {/* buttons */}
            <div
                className={`flex items-center md:justify-start justify-between relative py-6 max-w-[1280px] w-full z-50 px-4 md:px-0 ${
                    currentPage ? "text-black" : "text-white"
                }`}
            >
                <Link to={"/"} className="z-20">
                    <img src={imgWhiteLogo} className={currentPage ? "filter brightness-0" : ""} alt="Logo" />
                </Link>

                <button className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <XMarkIcon className="w-8 h-8 text-white" />
                    ) : (
                        <Bars3Icon className="w-8 h-8 text-white" />
                    )}
                </button>

                <div className="hidden md:flex items-center justify-start ml-16 gap-6 z-20 w-full">
                    {PagesAssets.map((page, index) => (
                        <div
                            key={page.title}
                            onMouseEnter={() => page.subpages?.length && setCurrentPage(page)}
                            className={`${index === PagesAssets.length - 1 ? "mr-0 ml-auto" : ""}`}
                        >
                            {!page.subpages?.length && page.target ? (
                                <Link
                                    onClick={() => setCurrentPage(undefined)}
                                    onMouseEnter={() => setCurrentPage(undefined)}
                                    to={page.target}
                                    className="hover:bg-gray-400/20 p-2 px-6 rounded-full"
                                >
                                    {page.title}
                                </Link>
                            ) : (
                                <button type="button" className="hover:bg-gray-400/20 p-2 px-6 rounded-full">
                                    {page.title}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* mobile */}
            {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white text-black z-40 p-6 flex flex-col gap-4">
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
                </div>
            )}

            {/* desktop */}
            {transitions((style, item) =>
                item ? (
                    <animated.div
                        className={"absolute w-full top-0 left-0 bg-white text-black pt-20 shadow-lg"}
                        style={{
                            ...style,
                        }}
                        onMouseEnter={() => setCurrentPage(currentPage)}
                        onMouseLeave={() => setCurrentPage(undefined)}
                    >
                        <div className="max-w-[1280px] mx-auto px-10 py-6 pb-16 flex flex-col gap-4">
                            <p className="text-2xl">{item?.cta} ⇁</p>
                            <div className="flex flex-col gap-2">
                                <p>{item.title}</p>
                                <div className="flex flex-col gap-1">
                                    {item.subpages?.map((subpage) => (
                                        <Link
                                            key={subpage.title}
                                            onClick={() => setCurrentPage(undefined)}
                                            to={item.target + subpage.target || "/"}
                                            className="font-light hover:bg-gray-400/20 w-fit p-2 px-4 rounded-full"
                                        >
                                            {subpage.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </animated.div>
                ) : null
            )}
        </>
    );
};

export default Header;
