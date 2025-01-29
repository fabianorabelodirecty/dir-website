import { FormEvent, useState, useRef } from "react";

type ContactFormStructure = {
    nome: string;
    empresa: string;
    email: string;
    telefone: string;
};

const ContactForm: React.FC<{ title?: string; sub?: string; color?: string }> = ({
    title = "Que tipo de mindset você precisa?",
    sub = "Fale com um consultor e esteja em dia com as mais avançadas tecnologias disponíveis no mercado!",
    color = "black",
}) => {
    const [mensagem, setMensagem] = useState<string>("");
    const [formData, setFormData] = useState<ContactFormStructure>({
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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-row gap-10">
                <div className="flex-[1] flex flex-col gap-4 my-auto">
                    <p className="font-bold text-xl">{title}</p>
                    <p className="font-light">{sub}</p>
                </div>
                <div className="flex-[1.5] my-auto">
                    <div className="grid grid-cols-2 gap-6 gap-x-8 w-full">
                        {Object.keys(formData).map((key) => (
                            <div className="flex flex-col " key={key}>
                                <label className="uppercase">{key}</label>
                                <input
                                    name={key}
                                    value={formData[key as keyof ContactFormStructure]}
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
                    className="rounded-full px-6 py-2 aspect-square text-white hover:opacity-50 transition-all my-auto"
                    style={{ backgroundColor: color }}
                >
                    Enviar
                </button>
            </form>
        </>
    );
};

export default ContactForm;
