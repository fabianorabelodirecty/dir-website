import { FormEvent, useState, useRef } from "react";
import Requests from "../../services/api";
import { ContactFormData } from "../../utils/types/reqs/ContactFormData";

const ContactForm: React.FC<{ title?: string; sub?: string; color?: string }> = ({
    title = "Que tipo de mindset você precisa?",
    sub = "Fale com um consultor e esteja em dia com as mais avançadas tecnologias disponíveis no mercado!",
    color = "black",
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [mensagem, setMensagem] = useState<string>("");
    const [formData, setFormData] = useState<ContactFormData>({
        nome: "",
        empresa: "",
        email: "",
        telefone: "",
    });

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleResize = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const clearFields = () => {
        setFormData({ nome: "", empresa: "", email: "", telefone: "" });
        setMensagem("");
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);
        try {
            const response = await Requests.sendContact({ ...formData, mensagem });
            clearFields();
            console.log(response);
        } catch (error) {
            console.error("Error sending the form:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col 2xl:flex-row gap-10">
                <div className="flex-[1] flex flex-col gap-4 my-auto">
                    <p className="font-bold text-xl">{title}</p>
                    <p className="font-light">{sub}</p>
                </div>
                <div className="flex-[1.5] my-auto">
                    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 gap-x-8 w-full">
                        {Object.keys(formData).map((key) => (
                            <div className="flex flex-col " key={key}>
                                <label className="uppercase">{key}</label>
                                <input
                                    name={key}
                                    value={formData[key as keyof ContactFormData]}
                                    onChange={handleChange}
                                    required
                                    className="border-b border-gray-500 p-2 outline-none focus:border-petrol-400"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-1 w-full mt-6">
                        <label className="uppercase">{"mensagem"}</label>
                        <textarea
                            ref={textareaRef}
                            value={mensagem}
                            onChange={(e) => {
                                setMensagem(e.target.value);
                                handleResize();
                            }}
                            placeholder="Descreva como podemos te ajudar."
                            onInput={handleResize}
                            className="border-b border-gray-500 outline-none p-2 resize-none w-full focus:border-petrol-400"
                            maxLength={500}
                            required
                            rows={1}
                        />
                    </div>
                </div>
                <button
                    disabled={isLoading}
                    className="rounded-full px-6 py-2 2xl:aspect-square text-white hover:opacity-50 transition-all my-auto disabled:opacity-10"
                    style={{ backgroundColor: color }}
                >
                    Enviar
                </button>
            </form>
        </>
    );
};

export default ContactForm;
