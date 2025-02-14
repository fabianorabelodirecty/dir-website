import React, { useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface SliderProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

const Slider = <T,>({ items, renderItem }: SliderProps<T>) => {
    const flickingRef = React.useRef<Flicking>(null);
    const [panelsPerView, setPanelsPerView] = useState(3.5);

    const plugins = [new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true })];

    const goToPrev = () => flickingRef.current?.prev();
    const goToNext = () => flickingRef.current?.next();

    // Função para atualizar panelsPerView conforme a tela
    useEffect(() => {
        const updatePanelsPerView = () => {
            setPanelsPerView(window.innerWidth <= 1024 ? 1 : 3.5);
        };

        updatePanelsPerView(); // Rodar ao montar o componente
        window.addEventListener("resize", updatePanelsPerView); // Atualizar ao redimensionar

        return () => window.removeEventListener("resize", updatePanelsPerView); // Cleanup
    }, []);

    return (
        <div className="relative w-full flex flex-col items-center">
            <Flicking
                ref={flickingRef}
                circular
                infinite={"circular"}
                // infiniteThreshold={0}
                panelsPerView={panelsPerView}
                align="center"
                moveType="snap"
                horizontal
                deceleration={0.007}
                plugins={plugins}
                className="w-full"
            >
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="w-full xl:w-[66%] mx-2 p-4 shadow-lg text-center rounded-lg overflow-visible pt-10"
                    >
                        {renderItem(item)}
                    </div>
                ))}
            </Flicking>

            <div className="flex flex-row gap-10 mt-6">
                <button
                    onClick={goToPrev}
                    className="z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <button
                    onClick={goToNext}
                    className="z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition"
                >
                    <ChevronRightIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default Slider;
