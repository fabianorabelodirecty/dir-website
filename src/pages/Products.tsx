import { useParams } from "react-router-dom";
import { ProductsAssets } from "../assets/content/ProductsAssets";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ContactForm from "../components/layout/ContactForm";
import ReasonsCard from "../components/layout/ReasonsCard";
import { Fade, Slide } from "react-awesome-reveal";
import React from "react";

const Products: React.FC = () => {
    const { product } = useParams();

    const currentProduct = ProductsAssets.find((item) => item?.page?.split("/")[1] === product);

    return (
        <>
            <div className="flex flex-col items-center gap-40 pb-20   overflow-x-hidden">
                <section className="max-w-[1280px] flex px-4 xl:px-0 items-start w-full flex-col gap-10 pt-6 xl:pt-10 xl:pt-20">
                    <Breadcrumbs />
                    <div className="flex flex-col xl:flex-row xl:gap-40 xl:justify-between h-full min-h-[60svh] relative max-w-svw">
                        <div className="xl:max-w-[50%] flex flex-col gap-8 max-w-[90%] mx-auto w-full">
                            <h1 className="text-5xl xl:text-6xl font-bold">{currentProduct?.name}</h1>
                            <div className="flex flex-row gap-10">
                                <div className="flex flex-col justify-center items-center p-1">
                                    <div className="flex-[1] w-1 bg-white h-10 absolute mt-1/2"></div>
                                    <div className="flex-[9] w-0.5 bg-white/50 "></div>
                                </div>
                                <p>{currentProduct?.contentText}</p>
                            </div>
                        </div>
                        <Slide direction="right" className="max-w-[90%] mx-auto w-full">
                            <div className="xl:-mt-20 mt-10 relative flex items-center justify-center ">
                                <div className="rounded-full xl:h-[60svh] mx-auto xl:max-w-full relative aspect-square  items-center flex border border-gray-500/40 p-10">
                                    <div className="rounded-full relative bg-petrol-400 size-full aspect-square max-w-[60svw] max-h-[60svw] mx-auto justify-center items-center flex border-[1rem] overflow-hidden">
                                        <img
                                            className="size-full object-cover aspect-square"
                                            src={currentProduct?.picture}
                                        />
                                        <img
                                            src={currentProduct?.auxPic}
                                            className="w-2/5 rounded-lg absolute left-[65%] top-[30%]"
                                        />
                                    </div>
                                    <div className="p-2 absolute -right-2 rounded-full" />
                                </div>
                            </div>
                        </Slide>
                    </div>

                    <div className="w-full -mb-10">
                        <ChevronDownIcon className="size-6 animate-bounce mx-auto" />
                    </div>
                </section>
                <section className="w-full max-w-[1280px] px-4 xl:px-0 flex flex-col gap-20">
                    <div className="flex flex-col gap-4">
                        <Fade>
                            <p className="uppercase font-bold text-base">Benefícios</p>
                        </Fade>
                        <Slide direction="right">
                            <p className="xl:max-w-[60%] font-bold text-4xl">{currentProduct?.pagePhrase}</p>
                        </Slide>
                        <Slide direction="left">
                            <p className="xl:max-w-[50%] text-base mr-0 ml-auto">{currentProduct?.pageDesc}</p>
                        </Slide>
                    </div>
                    <Slide direction="up">
                        <div className="w-full">
                            {currentProduct?.reasons?.map((item, i) => {
                                return (
                                    <React.Fragment key={item.title}>
                                        {i === 0 ? (
                                            <ReasonsCard reason={item} />
                                        ) : (
                                            <div className={"-mt-1"}>
                                                <ReasonsCard reason={item} />
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </Slide>
                </section>
                <section className="w-full bg-white p-10 py-30 text-black">
                    <Fade>
                        <div className="max-w-[1280px] mx-auto">
                            <ContactForm title={currentProduct?.contactTitle} sub={currentProduct?.contactSub} />
                        </div>
                    </Fade>
                </section>
            </div>
        </>
    );
};

export default Products;
