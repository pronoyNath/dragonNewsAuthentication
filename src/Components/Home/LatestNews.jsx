import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="p-3 bg-[#F3F3F3] flex gap-2">
            <button className='btn btn-secondary text-white font-semibold rounded-none'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
               <Link to={'/'} className="mr-5"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
               <Link to={'/'} className="mr-5"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
               <Link to={'/'} className="mr-5"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;