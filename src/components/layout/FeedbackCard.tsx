import { Feedback } from "../../utils/types/Feedback";

const FeedbackCard = ({ feedback }: { feedback: Feedback }) => {
    return (
        <div className="bg-white rounded-2xl p-10 size-full h-full gap-4">
            <div className="rounded-full aspect-square overflow-hidden border-2 mx-auto -mt-20 border-white shadow-md size-20 mb-5">
                <img src={feedback.photo} alt={feedback.name} className="size-full object-cover" />
            </div>
            <div className="text-black flex flex-col gap-4">
                <p className="text-sm text-gray-500">{feedback.content}</p>
                <h3 className="font-bold text-lg text-petrol-400">{feedback.name}</h3>
                <span className="text-sm font-light">{feedback.position}</span>
            </div>
        </div>
    );
};

export default FeedbackCard;
