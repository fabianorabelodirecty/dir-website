import { useState, useEffect } from "react";

export default function CursorLens() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const updatePosition = (e: { clientX: any; clientY: any }) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-50 w-40 h-40 rounded-full"
            style={{
                transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
                backdropFilter: "invert(1)",
                WebkitBackdropFilter: "invert(1)",
            }}
        />
    );
}
