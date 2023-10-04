import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const NewsList = () => {
    const news = useLoaderData()
   

    return (
        <div>
            <div>
            <h3 className="text-lg font-semibold text-[#403F3F] pb-5">Dragon News Home</h3>
            </div>
            {
                news.map(aNews =>
                     <NewsCard key={aNews.id} aNews={aNews}></NewsCard>
                     )
            }
        </div>
    );
};

export default NewsList;