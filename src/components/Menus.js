import { Link } from "react-router-dom";

function Menus() 
{
    return (
        <div className="menu-list">
            <div className="px-6 py-3 md:p-0">
                <div className="flex justify-between border-b border-b-black pb-3">
                    <div className="w-48">
                        <h1 className="text-2xl font-medium">Sea Food Boiled Pasta With Chicken</h1>
                    </div>
                    <div className="flex flex-col justify-between text-right">
                        <div className="inline-block"><i className="fa-solid fa-bookmark"></i> Bookmark</div>
                        <span className="text-sm small font-normal">
                            N12,300.00
                            <small className="small">+7.5% Vat</small>
                        </span>
                    </div>
                </div>
                <div className="content py-2 font-medium">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut
                        labore et dolore magna aliqua.
                    </span>
                </div>
            </div>

            <Link to="/details"
                className="block border-dashed border-b border-black border-t md:px-0 px-6 py-3 mb-2 overflow-auto">
                <div className="float-left">
                    <span className="">View More Details</span>
                </div>
                <div className="float-right">
                    <i className="fa-solid fa-caret-right"></i>
                </div>
            </Link>
        </div>
    );
}

export default Menus;