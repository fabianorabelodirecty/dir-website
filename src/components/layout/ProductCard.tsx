import { Link } from "react-router-dom";
import { Product } from "../../utils/types/Product";

const ProductCard: React.FC<{ product: Product; direction?: "right" | "left" }> = ({
    product,
    direction = "right",
}) => {
    return (
        <>
            <div
                className={`w-full flex gap-20 ${
                    direction === "right" ? " 2xl:flex-row" : "2xl:flex-row-reverse"
                } flex-col`}
            >
                <div className="flex flex-col relative z-10 w-full 2xl:max-w-[60%] gap-2">
                    <p className="font-bold text-4xl">{product.name}</p>
                    <p className="font-bold text-sm uppercase">{product.cta}</p>
                    <p className="text-sm my-2">{product.desc}</p>
                    <p className="font-light text-sm">{product.phrase}</p>
                    <Link
                        to={"/products" + product.page}
                        className="text-sm mt-4 px-6 py-2 border border-white w-fit rounded-full text-center hover:opacity-50"
                    >
                        Saiba mais
                    </Link>
                </div>
                <div className="2xl:w-[40svw] w-[80svw] relative">
                    <img src={product.picture} className="w-full rounded-lg" />
                    <img
                        src={product.auxPic}
                        className="w-3/10 rounded-lg absolute -right-18 bottom-6"
                    />
                </div>
            </div>
        </>
    );
};
export default ProductCard;
