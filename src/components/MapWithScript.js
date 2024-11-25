import React, { useEffect, useRef } from "react";
import Script from "next/script";

const DynamicGoogleMap = ({ addresses }) => {
    const mapRef = useRef(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (!addresses || addresses.length === 0) return;

        // Initialize the map
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 37.7749, lng: -122.4194 }, // Default center
            zoom: 3,
        });

        // Geocode and place markers for each address
        const geocoder = new window.google.maps.Geocoder();
        addresses.forEach((address) => {
            geocoder.geocode({ address }, (results, status) => {
                if (status === "OK") {
                    const marker = new window.google.maps.Marker({
                        map,
                        position: results[0].geometry.location,
                    });

                    // Adjust map bounds to fit all markers
                    map.fitBounds(results[0].geometry.viewport);
                } else {
                    console.error(`Geocode failed for ${address}: ${status}`);
                }
            });
        });
    }, [addresses]);

    return (
        <div
            ref={mapRef}
            className="rounded-xl"
            style={{ width: "100%", height: "400px" }}
        ></div>
    );
};

const MapWithScript = ({ addresses }) => {
    return (
        <>
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
                strategy="beforeInteractive"
            />
            <DynamicGoogleMap addresses={addresses} />
        </>
    );
};
export default MapWithScript;