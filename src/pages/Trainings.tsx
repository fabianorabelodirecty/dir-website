import { useParams } from "react-router-dom";
import { trainings } from "../assets/content/trainings";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { CheckBadgeIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import ContactForm from "../components/layout/ContactForm";
import { useEffect } from "react";

const Trainings: React.FC = () => {
    const { training } = useParams();

    const currentTraining = trainings.find((item) => item?.page?.split("/")[1] === training);

    useEffect(() => {
        console.log(currentTraining);
    }, [currentTraining]);

    return (
        <>
            <div className="flex flex-col items-center gap-40 pb-20">
                <section className="max-w-[1280px] flex items-start w-full flex-col gap-10 pt-6 xl:pt-10 2xl:pt-20">
                    <Breadcrumbs />
                    <div className="flex flex-row gap-40 justify-between h-full min-h-[60svh]">
                        <div className="lg:max-w-[50%] flex flex-col gap-6">
                            <h1 className="text-6xl font-bold">{currentTraining?.title}</h1>
                            <p>{currentTraining?.desc}</p>
                        </div>
                    </div>
                    <div className="w-full -mb-10">
                        <ChevronDownIcon className="size-6 animate-bounce mx-auto" />
                    </div>
                </section>
                <section className="w-full max-w-[1280px] flex flex-col gap-20">
                    <div className="flex flex-col gap-4">
                        <p className="uppercase font-bold text-sm">Benefícios</p>
                        <p className="lg:max-w-[60%] font-bold text-4xl">
                            {currentTraining?.phrase}
                        </p>
                        <p className="lg:max-w-[50%] text-sm mr-0 ml-auto">
                            {currentTraining?.description}
                        </p>
                    </div>
                    <div className="flex flex-col text-left gap-4 mx-auto">
                        {currentTraining?.benefits?.map((benefit) => (
                            <div className="flex flex-row gap-4">
                                <CheckBadgeIcon className="size-6 text-blue-500" />
                                <p>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="w-full bg-white p-10 py-30 text-black">
                    <div className="max-w-[1280px] mx-auto">
                        <ContactForm title={currentTraining?.cta} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Trainings;
