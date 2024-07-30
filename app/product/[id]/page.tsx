import axios from 'axios';
import Image from 'next/image';
import React from 'react'

const SingleProduct = async ({ params }: { params: any }) => {

    const fetchProduct = async () => {
        let res = await axios.get(`http://localhost:8000/products/${params.id}`);
        return res
    };
    let apiResponse = await fetchProduct();
    return (
        <div>
            <Image
                width={300}
                height={300}
                src={apiResponse.data.thumbnail}
                alt={apiResponse.data.title}
            />
            <h1>{apiResponse.data.title}</h1>
        </div>
    )
}

export default SingleProduct