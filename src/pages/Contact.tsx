// src/components/Forms.tsx
import { useState, useRef, FormEvent, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Requests from "../services/api";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { ContactFormData } from "../utils/types/reqs/ContactFormData";
import { WorkWithUsFormData } from "../utils/types/reqs/WorkWithUsFormData";

const Contact: React.FC = () => {
    const [mensagem, setMensagem] = useState<string>("");

    const [formData, setFormData] = useState<ContactFormData | WorkWithUsFormData>({
        nome: "",
        empresa: "",
        email: "",
        telefone: "",
        mensagem: "",
        curriculo: undefined,
    });

    const location = useLocation();
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleResize = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const files = (e.target as HTMLInputElement).files;

        if (type === "file" && files && files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // Corrigido para aceitar tipo File
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            let response;
            if (location.pathname === "/contact") {
                response = await Requests.sendContact(formData as ContactFormData);
            } else if (location.pathname === "/work-with-us") {
                response = await Requests.sendWorkWithUs(formData as WorkWithUsFormData);
            }
            console.log(response);
        } catch (error) {
            console.error("Error sending the form:", error);
        }
    };

    useEffect(() => {
        if (location.pathname === "/work-with-us") {
            setFormData((prev) => ({
                ...prev,
                curriculo: undefined, // Inicializando como undefined para o trabalho
            }));
        }
    }, [location]);

    return (
        <div className="max-w-6xl mx-auto p-10 flex flex-col md:flex-row gap-10">
            {/* Texto de apresentação */}
            <div className="md:w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">Fale com um consultor</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Entre em contato conosco e descubra como podemos ajudar a sua empresa a alcançar
                    os melhores resultados.
                </p>
                <h2 className="text-2xl font-semibold mb-3">Que tipo de mindset você precisa?</h2>
                <p className="text-gray-600">
                    Nosso cardápio de soluções conta com produtos e serviços que abrangem as áreas
                    de Analytics, BI, Big Data, Portais de Dados e Mobilidade.
                </p>
            </div>

            {/* Formulário de contato */}
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-black">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.keys(formData).map((key) => (
                        <div className="flex flex-col" key={key}>
                            <label className="uppercase text-sm font-semibold">{key}</label>
                            {key !== "curriculo" ? (
                                <input
                                    type={key === "email" ? "email" : "text"}
                                    name={key}
                                    value={
                                        (formData as ContactFormData)[key as keyof ContactFormData]
                                    }
                                    onChange={handleChange}
                                    required
                                    className="border-b border-gray-400 p-2 outline-none focus:border-digital"
                                />
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <label
                                        htmlFor="curriculo"
                                        className="cursor-pointer py-2 px-4 rounded-md bg-digital text-white flex items-center hover:opacity-50 transition-all"
                                    >
                                        <PaperClipIcon className="h-5 w-5 mr-2" />
                                        Anexar Currículo
                                    </label>
                                    <input
                                        id="curriculo"
                                        type="file"
                                        name="curriculo"
                                        onChange={handleChange}
                                        className="hidden"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex flex-col">
                        <label className="uppercase text-sm font-semibold">Mensagem</label>
                        <textarea
                            ref={textareaRef}
                            name="mensagem"
                            value={mensagem}
                            onChange={(e) => {
                                setMensagem(e.target.value);
                                handleResize();
                            }}
                            placeholder="Descreva como podemos te ajudar."
                            className="border-b border-gray-400 p-2 outline-none resize-none focus:border-digital"
                            required
                            rows={3}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-digital text-white py-2 px-6 rounded-full rounded-tl-none hover:opacity-50 transition-all"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
