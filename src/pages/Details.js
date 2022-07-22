import { Link } from "react-router-dom";

function Details() {
    return (
        <div className="md:w-1/2 md:m-auto">
            <div className="py-6">
                <Link to="/"
                    className="bg-transparent text-secondary text-sm py-2 px-4 border border-secondary rounded-full my-2">
                    <i className="fa-solid fa-angle-left"></i> Back
                </Link>

                <div className="title pt-4 text-center text-3xl text-secondary">
                    <h1 className="">Sea Food Boiled Pasta With Shreaded Chicken</h1>
                </div>

                <div className="flex overflow-x-auto h-80 pt-8">
                    <div className="flex items-center justify-center px-2 min-w-full cursor-pointer overflow-hidden">
                        <img src="images/food_1.jpeg" className="h-full object-cover" alt="" />
                    </div>

                    <div className="flex items-center justify-center px-2 min-w-full cursor-pointer overflow-hidden">
                        <img src="images/food_2.jpeg" className="h-full object-cover" alt="" />
                    </div>
                    <div className="flex items-center justify-center px-2 min-w-full cursor-pointer overflow-hidden">
                        <img src="images/food_3.jpeg" className="h-full object-cover" alt="" />
                    </div>
                    <div className="flex items-center justify-center px-2 min-w-full cursor-pointer overflow-hidden">
                        <img src="images/food_4.jpeg" className="h-full object-cover" alt="" />
                    </div>
                </div>
            </div>
            <div className="relative bottom-0 p-6 bg-chineseBlack w-fill h-auto text-white" style={{ maxHeight: "30%" }}>
                <div className="h-full">
                    <div className="border-b border-b-white pb-3">
                        <span className="font-medium">Category </span>
                        <i className="fa-solid fa-arrow-right mx-3"></i>
                        <span className="font-bold">Pasta</span>
                    </div>
                    <div className="pt-6">
                        <span className="text-justify text-desertSand text-sm">
                            Roasted Prawns/Cheese/Vegetable/Shreaded Chicken
                            Roasted Prawns/Cheese/Vegetable/Shreaded Chicken
                            Vegetable/Shreaded Chicken. Roasted Prawns/Cheese/
                            Roasted Prawns/Cheese/Vegetable/Shreaded Chicken
                            Vegetable/Shreaded Chicken. Roasted Prawns/Cheese/
                        </span>
                    </div>
                    <div className="text-center py-8">
                        <div className="inline-block"><i className="fa-solid fa-bookmark"></i> Bookmark</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;