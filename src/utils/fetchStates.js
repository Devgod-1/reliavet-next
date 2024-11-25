import { useState, useEffect } from "react";

export const useFetchStates = () => {
    const [states, setStates] = useState([]);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/states");
                const data = await response.json();
                setStates(data.data); // Set the states list
            } catch (err) {
                console.log('fetchState => ', err.message);
            }
        };
        fetchStates();
    }, []);

    return { states };
};