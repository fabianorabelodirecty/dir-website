import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import imgLogoWpp from "../../assets/imgs/logo-wpp.png";

const SCROLL_THRESHOLD = 60;
const CONTACT_THRESHOLD = 200;

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="size-full flex justify-center">
                <div className="relative w-full mx-auto bg-fixed bg-black min-h-svh flex flex-col items-center justify-center">
                    <Header />
                    <div className={`size-full min-h-svh z-0`}>{children}</div>
                    <Footer />
                </div>
            </div>
            {scrollPosition > SCROLL_THRESHOLD && (
                <button
                    id="back-to-top"
                    type="button"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="aspect-square w-12 transition-all rounded-full fixed bottom-4 right-4 p-1 text-white z-50 hover:opacity-50 mix-blend-difference"
                    aria-label="Back to top"
                >
                    {"↑"}
                </button>
            )}
            {scrollPosition > CONTACT_THRESHOLD && (
                <Link
                    to={
                        "https://api.whatsapp.com/send?phone=5527997819858&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Directy%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os"
                    }
                    target="_blank"
                    id="back-to-top"
                    type="button"
                    className="aspect-square w-12 transition-all rounded-full fixed bottom-4 left-4 p-1 z-50 hover:opacity-50"
                    aria-label="Back to top"
                >
                    <img src={imgLogoWpp} className="size-10 rounded-full bg-white" />
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full size-5 z-100 flex justify-center items-center">
                        <p className="text-sm">1</p>
                    </div>
                </Link>
            )}
        </>
    );
};

export default PageWrapper;
