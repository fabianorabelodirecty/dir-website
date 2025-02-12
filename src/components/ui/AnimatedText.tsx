import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedTextProps {
    text: string;
    speed: number;
    color: string;
    size: number;
    opacity?: number;
    delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    speed,
    color,
    size,
    opacity,
    delay = 0,
}) => {
    const textRef = useRef<SVGTextElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (textRef.current) {
            const length = textRef.current.getBBox().width;
            gsap.set(containerRef.current, { opacity: 1 });

            gsap.fromTo(
                textRef.current,
                { strokeDashoffset: length },
                {
                    strokeDashoffset: 0,
                    duration: speed,
                    ease: "power2.out",
                    delay,
                }
            );
        }
    }, [text, speed, color, delay]);

    return (
        <div
            ref={containerRef}
            style={{ width: "100%", height: "100%", position: "relative", scale: `${size * 10}%` }}
        >
            <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 300 100"
            >
                <text
                    ref={textRef}
                    x="0"
                    y="50"
                    fontFamily="Arial"
                    fontSize="40"
                    fill="none"
                    stroke={color}
                    opacity={opacity || 1}
                    strokeWidth="2"
                    strokeDasharray={textRef.current?.getBBox().width || 1000}
                >
                    {text}
                </text>
            </svg>
        </div>
    );
};

export default AnimatedText;
