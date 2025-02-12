import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ContactForm from "../components/layout/ContactForm";
import { Fade } from "react-awesome-reveal";
import { TrainingsAssets } from "../assets/content/TrainingsAssets";
import ReasonsCard from "../components/layout/ReasonsCard";
import { useTransition, animated } from "@react-spring/web";

const Trainings: React.FC = () => {
    const { training } = useParams();
    const currentTraining = TrainingsAssets.find((item) => item.page.split("/")[1] === training);

    // const [showItems, setShowItems] = useState<boolean>(true);
    const transitions = useTransition(currentTraining?.reasons || [], {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1600 },
        trail: 400,
    });

    return (
        <>
            <div className="flex flex-col items-center gap-32 pb-20">
                <section className="max-w-[1280px] flex flex-col w-full gap-10 pt-6 xl:pt-10 2xl:pt-20">
                    <Breadcrumbs />
                    <div className="flex flex-row gap-40 justify-between h-full min-h-[60svh]">
                        <div className="lg:max-w-[80%] flex flex-col gap-6">
                            <h1 className="text-6xl font-bold">{currentTraining?.cta}</h1>
                            <p>{currentTraining?.desc}</p>
                        </div>
                    </div>
                    <div className="w-full -mb-10">
                        <ChevronDownIcon className="size-6 animate-bounce mx-auto" />
                    </div>
                </section>

                <section className="w-full max-w-[1280px] flex flex-col gap-16 py-8">
                    <div className="flex flex-col gap-8">
                        <h2 className="font-bold text-4xl text-white mb-6">
                            Por que investir em um treinamento de Power BI?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-6">
                            {transitions((style, item) => (
                                <animated.div
                                    style={style} // Aplica a animação no item
                                    key={item.title} // Pode usar a chave do item, como `reason.title`
                                    className="flex flex-row gap-4"
                                >
                                    <div className="flex items-center justify-center border border-petrol-400 aspect-square rounded-full size-10">
                                        {(currentTraining?.reasons?.findIndex((i) => i === item) ||
                                            0) + 1}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">{item.title}</p>
                                        <p className="text-sm leading-relaxed opacity-80 font-light">
                                            {item.content}
                                        </p>
                                    </div>
                                </animated.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-[1280px] flex flex-col gap-16">
                    <div className="flex flex-col gap-4">
                        <p className="text-xl font-semibold">{currentTraining?.modes}</p>
                        <p className="text-sm opacity-80">{currentTraining?.contentText}</p>
                    </div>
                </section>

                <section className="w-full max-w-[1280px] flex flex-col gap-16">
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-2xl text-center mb-8">
                            {currentTraining?.titlePage}
                        </p>
                        <Fade>
                            <div className="w-full">
                                {currentTraining?.reasons?.map((item, i) => {
                                    if (i === 0) return <ReasonsCard reason={item} />;
                                    return (
                                        <div className={"-mt-1"}>
                                            <ReasonsCard reason={item} />
                                        </div>
                                    );
                                })}
                            </div>
                        </Fade>
                    </div>
                </section>

                <section className="w-full bg-white p-10 py-30 pt-24 text-black">
                    <Fade>
                        <div className="max-w-[1280px] mx-auto flex flex-col gap-14">
                            <ContactForm
                                title={currentTraining?.contactTitle}
                                sub={currentTraining?.contactSub}
                            />
                        </div>
                    </Fade>
                </section>
            </div>
        </>
    );
};

export default Trainings;
