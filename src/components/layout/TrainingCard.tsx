import { Link } from "react-router-dom";
import { Training } from "../../utils/types/Training";

const TrainingCard: React.FC<{ training: Training }> = ({ training }) => {
    return (
        <div className="flex flex-col justify-between gap-12 h-full xl:max-w-[1280px] mx-auto mb-14 px-4">
            <div className="text-center">
                <p className="text-5xl font-bold">{training.title}</p>
                <p className="text-lg font-light mt-4">{training.cta}</p>
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
                <div className="flex flex-col gap-8 xl:max-w-[60%]">
                    <h3 className="text-xl font-semibold">{training.titlePage}</h3>
                    <p className="font-light">{training.desc}</p>
                    <p className="font-light text-base opacity-50 mt-4">{training.pagePhrase}</p>
                    <div className="mt-2">
                        <Link
                            to={"/trainings" + training.page}
                            className="text-base mt-4 px-6 py-2 border bg-white text-black w-fit rounded-full text-center hover:opacity-50"
                        >
                            Saiba mais
                        </Link>
                    </div>
                </div>

                <div className="w-[40svw] hidden rounded-lg p-4 aspect-[3/2] xl:flex">
                    <img
                        src={training.picture}
                        alt="Imagem do treinamento"
                        className="size-full rounded-lg filter brightness-80"
                    />
                </div>
            </div>
        </div>
    );
};

export default TrainingCard;
