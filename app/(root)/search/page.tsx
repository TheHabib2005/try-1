import { getSearchResult } from '@/actions'
import Error from '@/components/Error';
import ProductNotFound from '@/components/Product-not-found';
import ShowProducts from '@/components/SearchResult';
import React from 'react'

const Search = async ({ searchParams }: { searchParams: any }) => {
    let q = searchParams.q
    let { data: products, success, message } = await getSearchResult(q);

    if (!success) {
        return <Error />
    }

    if (products.length === 0) {
        return <ProductNotFound />
    }

    return (
        <section className="w-full">
            <div className="py-6">
                <p className="font-bold text-zinc-400">
                    YOUR FOLLOWING SEARCH RESULT{" "}
                    <span className="text-blue-800 uppercase">{`"${searchParams.q}"`}</span>
                </p>
            </div>
            <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-3 w-full'>
                <ShowProducts products={products} />
            </div>
        </section>
    )
}

export default Search