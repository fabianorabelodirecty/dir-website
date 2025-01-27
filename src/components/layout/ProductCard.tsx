import { Product } from "../../utils/types/Product";
import Button from "../ui/Button";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <>
            <div className="w-full flex flex-row gap-10">
                <div className="flex flex-col relative z-10 w-full gap-2">
                    <p className="font-bold text-4xl">{product.name}</p>
                    <p className="font-bold text-sm uppercase">{product.cta}</p>
                    <p className="text-sm my-2">{product.desc}</p>
                    <p className="font-light text-sm">{product.phrase}</p>
                    <Button className="text-sm mt-4">Saiba mais</Button>
                </div>
                <div className="w-[40svw] bg-gray-500 rounded-lg p-1">
                    <img src={""} className="w-full absolute -bottom-1 left-0 z-0" />
                </div>
            </div>
        </>
    );
};
export default ProductCard;
