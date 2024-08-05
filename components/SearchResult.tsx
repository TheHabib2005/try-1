
import ProductCard from "./productCard";

export default function ShowProducts({ products }: { products: any[] }) {

    return (
        <>
            {
                products.map((prod: any, index: number) => {
                    return <ProductCard product={prod} key={index} />
                })
            }
        </>
    );
}
