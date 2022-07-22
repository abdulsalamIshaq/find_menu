import { Link } from "react-router-dom";

function Categories() {
    return (
        <div className="p-4 md:w-1/2 md:m-auto">
            <form className="pt-4">
                <input type="search" className="w-full bg-primary py-2 border-b border-b-secondary h-11 text-3xl text-secondary"
                    placeholder="Menu category" />
            </form>
            <div className="categories flex flex-col pt-4 font-normal text-secondary">
                <div className="category py-4 border-dashed border-b border-secondary">
                    <a href="#" className="flex flex-row justify-between">
                        <span className="text-3xl">Pasta</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>
                <div className="category py-4 border-dashed border-b border-secondary">

                    <a href="#" className="flex flex-row justify-between">
                        <span className="text-3xl">Rice Meals</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>

                <div className="category py-4 border-dashed border-b border-secondary">
                    <a href="#" className="flex flex-row justify-between">
                        <span className="text-3xl">Sides</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>

                <div className="category py-4 border-dashed border-b border-secondary">
                    <a href="#" className="flex flex-row justify-between">
                        <span className="text-3xl">Sea Food</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>

                <div className="category py-4 border-dashed border-b border-secondary">
                    <a href="#" className="flex flex-row justify-between">
                        <span className="text-3xl">Italian</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>

                <div className="category py-4 border-dashed border-b border-secondary">
                    <a href="#" className="flex flex-row justify-between">
                        <span className="text-3xl">Thai</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>

                <div className="category py-4 border-dashed border-b border-secondary">
                    <a href="#" className="flex flex-row justify-between">
                        <span className="text-3xl">Desert</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>

                <div className="category py-4 border-dashed border-b border-secondary">
                    <a href="#" className="flex flex-row justify-between">
                        <span className="text-3xl">Juice</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>

                <div className="category py-4 border-dashed border-b border-secondary">
                    <a href="#" className="category flex flex-row justify-between">
                        <span className="text-3xl">Moctails</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>

                <div className="category py-4 border-dashed border-b border-secondary">
                    <a href="#" className="category flex flex-row justify-between">
                        <span className="text-3xl">Coctails</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>

                <div className="category py-4 border-dashed border-b border-secondary">

                    <a href="#" className="category flex flex-row justify-between">
                        <span className="text-3xl">Soft Drinks</span>
                        <span className="text-md font-satoshi">05</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Categories;