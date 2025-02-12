import { useState, useRef, FormEvent, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Requests from "../services/api";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { ContactFormData } from "../utils/types/reqs/ContactFormData";

type ContactLocations = "message" | "work-with-us";

const Contact: React.FC = () => {
    const location: ContactLocations = useLocation()
        ?.pathname?.split("/")
        .slice(-1)[0] as ContactLocations;

    const [mensagem, setMensagem] = useState<string>("");
    const [curriculo, setCurriculo] = useState<File | undefined>(undefined);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as HTMLInputElement;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCurriculo(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            let response;
            if (location === "message") {
                response = await Requests.sendContact({ ...formData, mensagem });
            } else if (location === "work-with-us") {
                response = await Requests.sendWorkWithUs({ ...formData, curriculo });
            }
            console.log(response);
        } catch (error) {
            console.error("Error sending the form:", error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 pt-[4.5%]">
            <div className="md:w-1/2 flex flex-col justify-center">{getText(location)}</div>
            <div className="md:w-1/2 bg-white/90 p-6 rounded-lg shadow-lg text-black mb-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.keys(formData).map((key) => {
                        return (
                            <div className="flex flex-col" key={key}>
                                <label className="uppercase text-sm font-semibold">{key}</label>
                                {key !== "curriculo" ? (
                                    <input
                                        type={key === "email" ? "email" : "text"}
                                        name={key}
                                        value={
                                            (formData as ContactFormData)[
                                                key as keyof ContactFormData
                                            ]
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
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    {location === "message" ? (
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
                    ) : (
                        <div className="flex flex-col" key={"Curriculo"}>
                            <label className="uppercase text-sm font-semibold">{"Curriculo"}</label>
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
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-digital text-white py-2 px-6 rounded-full rounded-tl-none hover:opacity-50 mt-6 transition-all"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

const getText = (location: ContactLocations): ReactNode => {
    console.log(location);
    switch (location) {
        case "message":
            return (
                <>
                    <h1 className="text-4xl font-bold mb-4">Fale com um consultor</h1>
                    <p className="text-lg text-gray-400 mb-10">
                        Entre em contato conosco e descubra como podemos ajudar a sua empresa a
                        alcançar os melhores resultados.
                    </p>
                    <h2 className="text-2xl font-semibold mb-3">
                        Que tipo de mindset você precisa?
                    </h2>
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-400">
                            Nosso cardápio de soluções conta com produtos e serviços que abrangem as
                            áreas de Analytics, BI, Big Data, Portais de Dados e Mobilidade.
                        </p>
                        <p className="text-gray-400">
                            Através de uma consultoria, entendemos todas as necessidades do cliente
                            para desenvolver soluções personalizadas que tragam melhores resultados.
                        </p>
                        <p className="text-gray-400">
                            Entre em contato conosco para agendarmos uma conversa.
                        </p>
                    </div>
                </>
            );

        case "work-with-us":
            return (
                <>
                    <h1 className="text-4xl font-bold mb-4">Trabalhe Conosco</h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-gray-400">
                            Na Directy, acreditamos na excelência, na inovação e no compromisso com
                            resultados sólidos. Nossa equipe é movida por desafios e pela busca
                            constante por soluções estratégicas que fazem a diferença no mercado.
                        </p>
                        <p className="text-lg text-gray-400">
                            Se você é uma pessoa que valoriza a precisão nos processos, a
                            integridade nas relações e a busca contínua por conhecimento, queremos
                            te conhecer. Aqui, cada profissional tem a oportunidade de crescer,
                            impactar grandes projetos e construir uma trajetória de sucesso.
                        </p>
                        <p className="text-lg text-gray-400 mb-14">
                            📩 Envie seu currículo e venha fazer parte da transformação com a
                            Directy!
                        </p>
                    </div>
                </>
            );

        default:
            return (
                <>
                    <h1 className="text-4xl font-bold mb-4">Fale com um consultor</h1>
                    <p className="text-lg text-gray-700 mb-14">
                        Entre em contato conosco e descubra como podemos ajudar a sua empresa a
                        alcançar os melhores resultados.
                    </p>
                    <h2 className="text-2xl font-semibold mb-3">
                        Que tipo de mindset você precisa?
                    </h2>
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-600">
                            Nosso cardápio de soluções conta com produtos e serviços que abrangem as
                            áreas de Analytics, BI, Big Data, Portais de Dados e Mobilidade.
                        </p>
                        <p className="text-gray-600">
                            Através de uma consultoria, entendemos todas as necessidades do cliente
                            para desenvolver soluções personalizadas que tragam melhores resultados.
                        </p>
                        <p className="text-gray-600">
                            Entre em contato conosco para agendarmos uma conversa.
                        </p>
                    </div>
                </>
            );
    }
};

export default Contact;
