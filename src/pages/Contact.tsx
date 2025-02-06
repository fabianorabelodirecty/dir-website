import { useState, useRef, FormEvent } from "react";

const Contact: React.FC = () => {
    const [mensagem, setMensagem] = useState("");
    const [formData, setFormData] = useState({
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
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Dados enviados:", formData, mensagem);
    };

    return (
        <div className="max-w-6xl mx-auto p-10 flex flex-col md:flex-row gap-10">
            {/* Texto de apresentação */}
            <div className="md:w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">Fale com um consultor</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Entre em contato conosco e descubra como podemos ajudar a sua empresa a alcançar os melhores
                    resultados.
                </p>
                <h2 className="text-2xl font-semibold mb-3">Que tipo de mindset você precisa?</h2>
                <p className="text-gray-600">
                    Nosso cardápio de soluções conta com produtos e serviços que abrangem as áreas de Analytics, BI, Big
                    Data, Portais de Dados e Mobilidade.
                </p>
            </div>

            {/* Formulário de contato */}
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-black">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.keys(formData).map((key) => (
                        <div className="flex flex-col" key={key}>
                            <label className="uppercase text-sm font-semibold">{key}</label>
                            <input
                                type={key === "email" ? "email" : "text"}
                                name={key}
                                value={formData[key as keyof typeof formData]}
                                onChange={handleChange}
                                required
                                className="border-b border-gray-400 p-2 outline-none focus:border-blue-500"
                            />
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
                            className="border-b border-gray-400 p-2 outline-none resize-none focus:border-blue-500"
                            required
                            rows={3}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
