import { Link } from "react-router-dom";
import { Training } from "../../utils/types/Training";

const TrainingCard: React.FC<{ training: Training }> = ({ training }) => {
    return (
        <div className="flex flex-col gap-8 2xl:max-w-[1280px] mx-auto mb-14 px-4">
            <div className="text-center">
                <p className="text-5xl font-bold">{training.title}</p>
                <p className="text-lg font-light mt-4">{training.cta}</p>
            </div>

            <div className="flex flex-col 2xl:flex-row gap-6">
                <div className="flex flex-col gap-6 2xl:max-w-[60%]">
                    <h3 className="text-2xl font-semibold">{training.titlePage}</h3>
                    <p className="font-light">{training.desc}</p>
                    <p className="font-light text-sm opacity-50 mt-4">{training.pagePhrase}</p>
                    <div className="mt-2">
                        <Link
                            to={"/trainings" + training.page}
                            className="text-sm mt-4 px-6 py-2 border bg-white text-black w-fit rounded-full text-center hover:opacity-50"
                        >
                            Saiba mais
                        </Link>
                    </div>
                </div>

                <div className="w-[40svw] hidden rounded-lg p-4 aspect-[3/2] 2xl:flex">
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
