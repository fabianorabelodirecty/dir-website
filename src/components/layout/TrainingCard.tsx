import { Link } from "react-router-dom";
import { Training } from "../../utils/types/Training";

const TrainingCard: React.FC<{ training: Training }> = ({ training }) => {
    return (
        <div className="flex flex-col gap-8 lg:max-w-[1280px] mx-auto mb-14">
            <div className="text-center">
                <p className="text-5xl font-bold">{training.title}</p>
                <p className="text-lg font-light mt-4">{training.cta}</p>
            </div>

            <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-6 lg:max-w-[60%]">
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

                <div className="w-[40svw] bg-gray-500 rounded-lg p-4">
                    <img src={""} alt="Imagem do treinamento" className="w-full rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default TrainingCard;
