
import { fetchProduct } from "@/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery, } from "react-query";

const useFetchProduct = () => {
    const [products, setProducts] = useState<any[]>([]);
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const searchQuery = params.get("q");
    let brands = params.get("brands")?.split(" ")
    let query = {}

    if (params.get("brands")) {
        query = {
            brands,
        }
    }

    // let isData = JSON.parse(localStorage.getItem("data")!)

    // useEffect(() => {

    //     if (isData) {
    //         setProducts(isData);
    //         return
    //     }
    // }, [params.toString()])


    const { isLoading, isError, isFetching, error, refetch, status } = useQuery({
        queryKey: ["fetch-product", searchQuery, params.toString()],
        queryFn: () => fetchProduct(query),
        // Callbacks
        onSuccess: (data) => {
            setProducts(data);
            localStorage.setItem("data", JSON.stringify(data));
        },
        onError: (error) => {
            console.error("Error fetching products:", error);
        },
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        // Caching
        cacheTime: 5 * 60 * 1000, // Time in milliseconds, data remains in cache (5 minutes)
        staleTime: 0, // Time in milliseconds before data is considered stale
        keepPreviousData: true,
        placeholderData: []// Keep previous data while fetching new data
    });

    return { isLoading, isFetching, products, isError, error };
};

export default useFetchProduct;