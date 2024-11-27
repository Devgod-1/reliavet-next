import { useState, useEffect } from "react";

export const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/categories");
                const data = await response.json();
                setCategories(data.data);
            } catch (err) {
                console.log('fetchCategories => ', err.message);
            }
        };
        fetchCategories();
    }, []);

    return { categories };
};