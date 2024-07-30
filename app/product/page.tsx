import Input from "@/components/Input";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default async function Products({ searchParams }: { searchParams: any }) {

    const fetchProduct = async () => {
        let res = await axios.get(`http://localhost:8000/products/all`);
        return res
    };

    let apiResponse = await fetchProduct();

    if (apiResponse.status !== 200) {
        return <h1>Error</h1>
    }


    return (
        <main>
            {/* <Input /> */}
            {
                apiResponse.data.map((prod: any, index: number) => {
                    return <Link href={`/product/${prod._id}`} key={index}>
                        <Image
                            src={prod.thumbnail}
                            alt={prod.title}
                            width={200}
                            height={200}
                        />
                        <h2>{prod.title}</h2>
                        <p>{prod.description}</p>
                        <p>Price: ${prod.price}</p>
                        <hr />
                    </Link>
                })
            }

        </main>
    );
}
