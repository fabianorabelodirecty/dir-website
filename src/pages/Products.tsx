import { useParams } from "react-router-dom";
import { products } from "../assets/content/products";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ContactForm from "../components/layout/ContactForm";
import ReasonsCard from "../components/layout/ReasonsCard";

const Products: React.FC = () => {
    const { product } = useParams();

    const currentProduct = products.find((item) => item?.page?.split("/")[1] === product);

    return (
        <>
            <div className="flex flex-col items-center gap-40 pb-20">
                <section className="max-w-[1280px] flex items-start w-full flex-col gap-10 pt-6 xl:pt-10 2xl:pt-20">
                    <Breadcrumbs />
                    <div className="flex flex-row gap-40 justify-between  h-full min-h-[60svh]">
                        <div className="lg:max-w-[50%] flex flex-col gap-6">
                            <h1 className="text-6xl font-bold">{currentProduct?.name}</h1>
                            <div className="flex flex-row gap-10">
                                <div className="flex flex-col justify-center items-center p-1">
                                    <div className="flex-[1] w-1 bg-white h-10 absolute mt-1/2"></div>
                                    <div className="flex-[9] w-0.5 bg-white/50 "></div>
                                </div>
                                <p>{currentProduct?.contentText}</p>
                            </div>
                        </div>
                        <div className="-mt-20">
                            <div className="rounded-full h-[60svh] 2xl:max-w-full relative aspect-square items-center flex border border-gray-500/40 p-10">
                                <div className="rounded-full aspect-square bg-petrol-400 size-full justify-center items-center flex border-[1rem]">
                                    {/* <img className="w-3/4" /> */}
                                </div>
                                <div className="p-2 absolute -right-2 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full -mb-10">
                        <ChevronDownIcon className="size-6 animate-bounce mx-auto" />
                    </div>
                </section>
                <section className="w-full max-w-[1280px] flex flex-col gap-20">
                    <div className="flex flex-col gap-4">
                        <p className="uppercase font-bold text-sm">Benefícios</p>
                        <p className="lg:max-w-[60%] font-bold text-4xl">
                            {currentProduct?.pagePhrase}
                        </p>
                        <p className="lg:max-w-[50%] text-sm mr-0 ml-auto">
                            {currentProduct?.pageDesc}
                        </p>
                    </div>
                    <div className="w-full">
                        {currentProduct?.reasons?.map((item, i) => {
                            if (i === 0) return <ReasonsCard reason={item} />;
                            return (
                                <div className={"-mt-1"}>
                                    <ReasonsCard reason={item} />
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className="w-full bg-white p-10 py-30 text-black">
                    <div className="max-w-[1280px] mx-auto">
                        <ContactForm
                            title={currentProduct?.contactTitle}
                            sub={currentProduct?.contactSub}
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Products;
