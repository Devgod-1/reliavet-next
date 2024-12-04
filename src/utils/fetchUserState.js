import { useState, useEffect } from "react";
import { getUserPosition } from "@/utils/getUserPosition"; // Adjust the path to your utility functions
import { getUserState } from "@/utils/getUserState"; // Adjust the path to your utility functions

export const useFetchUserState = () => {
    const [selectedState, setSelectedState] = useState(null);

    useEffect(() => {
        const fetchUserState = async () => {
            try {
                const { latitude, longitude } = await getUserPosition();
                const state = await getUserState(latitude, longitude);
                setSelectedState(state);
            } catch (err) {
                console.log('fetchUserState => ', err.message);
            }
        };
        fetchUserState();
    }, []);

    return { selectedState, setSelectedState };
};
