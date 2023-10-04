import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import RightSideNav from "../RightSideNav/RightSideNav";
import Navbar from "../Header/Navbar";
import News from "./News";

const NewsDetails = () => {
    const {id} = useParams();
    const newses = useLoaderData();
    
    const [news, setNews] = useState([]);

    useEffect(()=>{
        const findNews = newses?.find(news =>news._id == id);
        setNews(findNews);

    },[id,newses]);
    
    return (
        <div>
             <Header></Header>
             <div className="mb-10 -mt-5">
             <Navbar></Navbar>
             </div>
             <div className="grid grid-cols-4 gap-10">
                <div className="col-span-3">
                    <News news={news}></News>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
             </div>
        </div>
    );
};

export default NewsDetails;