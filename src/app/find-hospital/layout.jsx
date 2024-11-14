import Hero from "./contents/Hero";

export default async function layout({ children }) {
    return (
        <div>
            <Hero />
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    );
}
