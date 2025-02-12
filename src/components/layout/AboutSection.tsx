import { motion, useScroll, useTransform } from "framer-motion";
import imgAboutWork from "../../assets/pics/about-work.jpg";
import AboutCard from "./AboutCard";
import { About } from "../../utils/types/About";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import AnimatedText from "../ui/AnimatedText";

const AboutSection: React.FC<{ assets: About[] }> = ({ assets }) => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [imageHeight, setImageHeight] = useState<number>(0);

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 80%", "center center"],
    });

    const delayedProgress = useTransform(scrollYProgress, [0.2, 1], [0, 1]);
    const width = useTransform(delayedProgress, [0, 1], ["100%", "50%"]);
    const x = useTransform(delayedProgress, [0, 1], ["0%", "100%"]);
    const y = useTransform(delayedProgress, [0, 1], ["0%", "25svh"]);

    useEffect(() => {
        if (imgRef.current) {
            setImageHeight(imgRef.current.clientHeight);
        }
    }, []);

    // Forçar re-render utilizando a chave
    const forceRenderKey = imageHeight;

    return (
        <div ref={sectionRef} className="relative w-full h-[100svh] flex items-center justify-center bg-black">
            <motion.div style={{ width, x, y }} className={`absolute top-0 left-0 hidden md:flex`}>
                <img
                    ref={imgRef}
                    src={imgAboutWork}
                    className="w-full filter brightness-70 absolute top-0 left-0 object-cover aspect-[3/2]"
                />
                {/* <div
                    key={forceRenderKey} // Forçando re-render aqui
                    className="absolute inset-0 opacity-50 z-10 bg-gradient-to-l from-black to-transparent"
                    style={{ height: imageHeight }}
                /> */}
            </motion.div>

            <section
                id="about"
                className="w-full max-w-[1280px]   px-4 flex flex-col md:flex-row relative z-10 mb-[12svh] -mt-96 md:mt-auto "
            >
                <Fade className="md:w-[45%] flex mb-0 mt-auto">
                    <div className="flex-col gap-4">
                        <p className="font-bold text-3xl sm:text-4xl md:text-5xl">
                            SOMOS A <span className="text-petrol-400">DIRECTY</span>
                        </p>
                        <AboutCard abouts={assets} />
                        <Link
                            to="/about"
                            className="rounded-full border border-white px-6 py-2 w-fit mt-4 flex flex-row gap-2 items-center justify-center hover:opacity-50 transition-all"
                        >
                            Saiba mais
                            <ArrowUpRightIcon className="w-5 h-5" />
                        </Link>
                    </div>
                </Fade>
            </section>

            <div key={forceRenderKey} className="absolute bottom-0 left-1/2 p-4 z-10">
                <AnimatedText text="#Directeam" speed={7} color="white" size={18} opacity={0.8} delay={3} />
            </div>
        </div>
    );
};

export default AboutSection;
