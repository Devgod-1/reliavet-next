export const getUserState = async (latitude, longitude) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch location data");
    }

    const data = await response.json();

    // Find the "administrative_area_level_1" (state) component
    for (const result of data.results) {
        const addressComponents = result.address_components;
        const state = addressComponents?.find((component) =>
            component.types.includes("administrative_area_level_1")
        )?.short_name;

        if (state) {
            // return state; // Return the state as soon as it's found
            return 'SC';
        }
    }

    return 'SC';
};