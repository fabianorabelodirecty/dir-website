import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const SCROLL_THRESHOLD = 60;

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
                    <div className={`size-full min-h-svh`}>{children}</div>
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
        </>
    );
};

export default PageWrapper;
