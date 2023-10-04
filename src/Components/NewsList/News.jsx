const News = ({news}) => {
    const {_id,image_url,title,details} = news;
    return (
        <div>
            <div className="relative flex  flex-col bg-white bg-clip-border text-gray-700 shadow-md rounded-none">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={image_url}
                        alt="ui/ux review check"
                        className="w-full"
                    />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {details}
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default News;