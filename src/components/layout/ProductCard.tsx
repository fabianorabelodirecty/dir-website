import { Link } from "react-router-dom";
import { Product } from "../../utils/types/Product";

const ProductCard: React.FC<{ product: Product; direction?: "right" | "left" }> = ({
    product,
    direction = "right",
}) => {
    return (
        <>
            <div
                className={`w-full flex gap-10 ${
                    direction === "right" ? " xl:flex-row" : "xl:flex-row-reverse"
                } flex-col`}
            >
                <div className="flex flex-col relative z-10 w-full xl:max-w-[60%] gap-6">
                    <p className="font-bold text-5xl">{product.name}</p>
                    <p className="font-bold text-base uppercase">{product.cta}</p>
                    <p className="text-base my-2">{product.desc}</p>
                    <p className="font-light text-base">{product.phrase}</p>
                    <Link
                        to={"/products" + product.page}
                        className="text-base mt-4 px-6 py-2 border border-white w-fit rounded-full text-center hover:opacity-50"
                    >
                        Saiba mais
                    </Link>
                </div>
                <div className="xl:w-[40svw] w-[80svw] relative my-auto pb-4">
                    <img src={product.picture} className="w-full rounded-lg" />
                    <img
                        src={product.auxPic}
                        className={`w-3/10 rounded-lg absolute top-24 ${
                            direction === "right" ? "-right-18" : "-left-18"
                        }`}
                    />
                </div>
            </div>
        </>
    );
};
export default ProductCard;
