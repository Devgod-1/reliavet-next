import AllArticles from "./contents/AllArticles";
import Hero from "./contents/Hero";
import PopularArticles from "./contents/PopularArticles";
import Promo from "./contents/Promo";
import RecentArticles from "./contents/RecentArticles";

export default function page() {
    return (
        <div>
            <Hero />
            <PopularArticles />
            <RecentArticles />
            <AllArticles />
            <Promo />
        </div>
    );
}
