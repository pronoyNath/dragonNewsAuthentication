import { Link } from "react-router-dom";

const NewsCard = ({aNews}) => {
    
    const {_id,image_url,title,details} = aNews;
    return (
        <div>
            <div>
                <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-10">
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            src={image_url}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                      
                           {
                            details.length > 200 ?
                            <p className="mt-3 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">{details.slice(0,200)} <Link to={`/news/${_id}`} className="font-bold text-blue-700">Read more...</Link></p> :
                            <p>{details}</p>
                           }
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;