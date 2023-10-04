import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img01 from '../../assets/1.png';
import img02 from '../../assets/2.png';
import img03 from '../../assets/3.png';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(resp => resp.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-lg font-semibold text-[#403F3F] pb-5">All Caterogy</h3>
                {
                    categories.map(category => <Link
                        key={category.id}
                        className="block space-y-7 ml-5 text-lg text-[#9F9F9F]"
                        to={`/category/${category.id}`}>{category.name}</Link>)
                }
            </div>
            {/* cards */}
            <div className="space-y-10 pt-10">
                <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                    <figure><img src={img01} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Lorem ipsum dolor sit.
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card w-11/12 mx-auto  bg-base-100 shadow-xl">
                    <figure><img src={img02} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           Lorem, ipsum.
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                    <figure><img src={img03} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Lorem, ipsum dolor.
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;