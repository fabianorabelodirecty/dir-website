import { Link } from "react-router-dom";
import { Training } from "../../utils/types/Training";

const TrainingCard: React.FC<{ training: Training }> = ({ training }) => {
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <p className="text-center text-5xl font-bold mx-auto">{training.title}</p>
                    <p className="text-center font-light mx-auto">{training.cta}</p>
                </div>
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                            <p className="text-lg font-bold">{training.name}</p>
                            <p className="font-light">{training.sub}</p>
                            <p className="mx-auto">{training.desc}</p>
                            <p className="font-light">{training.phrase}</p>
                        </div>
                        <Link to={training.target} className="rounded-full px-6 py-2 border white text-white w-fit">
                            Saiba mais{" "}
                        </Link>
                    </div>
                    <div className="w-[40svw] bg-gray-500 rounded-lg p-1">
                        <img src={""} className="w-full absolute -bottom-1 left-0 z-0" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrainingCard;
