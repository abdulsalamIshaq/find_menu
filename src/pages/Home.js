import React, { useState } from 'react';
import MenusComponet from "../components/MenusComponet";
import { Link } from "react-router-dom";

function Home() {

    const [bottomBar, setBottomBar] = useState(false);

    return (
        <div className="mb-28">
            <div className="border-b border-b-black md:text-center ">
                <div className="p-6">
                    <h1 className="not-italic text-4xl font-semibold leading-8 tracking-tight">Cbea African Resturant</h1>
                    <div className="address font-satoshi text-xl">
                        <p className="">4, Congo St, Barnawa Complex.</p>
                        <p className=""> Kaduna State, Nigeria.</p>
                    </div>

                    <div className="flex flex-row content-center flex-wrap justify-between md:justify-center mt-8">
                        <div className="share mr-2">
                            <Link to="#"
                                className="bg-transparent text-black text-sm py-2 px-4 border border-black rounded-full mr-2">
                                <i className="fa-solid fa-share-nodes"></i> Share
                            </Link>
                            <Link to="#"
                                className="bg-transparent text-black text-sm py-2 px-4 border border-black rounded-full">
                                <i className="fa-solid fa-location-dot"></i> Map
                            </Link>
                        </div>
                        <div className="category">
                            <Link to="/categories"
                                className="bg-category text-black text-sm py-2 px-4 border border-secondary rounded-b-3xl">
                                <i className="fa-solid fa-utensils"></i> Category
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-dashed border-b mb-5 border-b-black">
                <p className="px-6 py-2 font-medium text-xl">All Category</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-8 md:p-6">
                <MenusComponet />
                <MenusComponet />
                <MenusComponet />
                <MenusComponet />
            </div>
            <div className='overflow-hidden'>
                <div className={`bottom-bar overflow-y-scroll no-scrollbar w-full bg-dutchWhite bottom-0 fixed rounded-t-3xl`} style={(bottomBar) ? { height: "65%"}: { height: "80px" }}>
                    <div className={`fixed w-full z-20 px-8 py-4 items-center bg-inherit flex justify-between content-center md:justify-between rounded-t-3xl ${(bottomBar) ? 'pb-2 border-b border-secondary' : ''}`}>
                        <div className="leading-tight not-italic tracking-tighter md:text-xl">
                            <p className="font-semibold">Bookmarked Meals</p>
                            <p className="">Hazelnut Cheescake + 3</p>
                        </div>
                        <div className="align-middle cursor-pointer text-xl" onClick={() => { setBottomBar(!bottomBar) }}>
                            {(bottomBar)
                                ? <i className="fa-solid fa-circle-arrow-down"></i>
                                : <i className="fa-solid fa-circle-arrow-up"></i>
                            }
                        </div>
                    </div>

                    {(bottomBar) ?
                        <div className='px-8 py-5'>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-8 mt-16 md:py-6">
                                <div className="bottom-list border-b border-black">
                                    <div className="px-0 py-3 md:p-0">
                                        <div className="">
                                            {/* <div className="w-48"> */}
                                            <h1 className="text-2xl font-medium">Sea Food Boiled Pasta With Chicken</h1>
                                            {/* </div> */}
                                        </div>
                                        <div className="content py-2 font-normal">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                ut
                                                labore et dolore magna aliqua.
                                            </span>
                                        </div>
                                        <span className="text-sm small font-normal">
                                            N12,300.00
                                            <small className="ml-2 small">+7.5% Vat</small>
                                        </span>
                                    </div>
                                </div>

                                <div className="bottom-list border-b border-black">
                                    <div className="px-0 py-3 md:p-0">
                                        <div className="">
                                            {/* <div className="w-48"> */}
                                            <h1 className="text-2xl font-medium">Sea Food Boiled Pasta With Chicken</h1>
                                            {/* </div> */}
                                        </div>
                                        <div className="content py-2 font-normal">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                ut
                                                labore et dolore magna aliqua.
                                            </span>
                                        </div>
                                        <span className="text-sm small font-normal">
                                            N12,300.00
                                            <small className="ml-2 small">+7.5% Vat</small>
                                        </span>
                                    </div>
                                </div>

                                <div className="bottom-list border-b border-black">
                                    <div className="px-0 py-3 md:p-0">
                                        <div className="">
                                            {/* <div className="w-48"> */}
                                            <h1 className="text-2xl font-medium">Sea Food Boiled Pasta With Chicken</h1>
                                            {/* </div> */}
                                        </div>
                                        <div className="content py-2 font-normal">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                ut
                                                labore et dolore magna aliqua.
                                            </span>
                                        </div>
                                        <span className="text-sm small font-normal">
                                            N12,300.00
                                            <small className="ml-2 small">+7.5% Vat</small>
                                        </span>
                                    </div>
                                </div>

                                <div className="bottom-list border-b border-black">
                                    <div className="px-0 py-3 md:p-0">
                                        <div className="">
                                            {/* <div className="w-48"> */}
                                            <h1 className="text-2xl font-medium">Sea Food Boiled Pasta With Chicken</h1>
                                            {/* </div> */}
                                        </div>
                                        <div className="content py-2 font-normal">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                ut
                                                labore et dolore magna aliqua.
                                            </span>
                                        </div>
                                        <span className="text-sm small font-normal">
                                            N12,300.00
                                            <small className="ml-2 small">+7.5% Vat</small>
                                        </span>
                                    </div>
                                </div>

                                <div className="bottom-list border-b border-black">
                                    <div className="px-0 py-3 md:p-0">
                                        <div className="">
                                            {/* <div className="w-48"> */}
                                            <h1 className="text-2xl font-medium">Sea Food Boiled Pasta With Chicken</h1>
                                            {/* </div> */}
                                        </div>
                                        <div className="content py-2 font-normal">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                ut
                                                labore et dolore magna aliqua.
                                            </span>
                                        </div>
                                        <span className="text-sm small font-normal">
                                            N12,300.00
                                            <small className="ml-2 small">+7.5% Vat</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='py-4 flex flex-col text-xl'>
                                <div className='flex flex-row justify-between border-b border-dashed border-black'>
                                    <span>Meal Amount</span>
                                    <span>N 36,600</span>
                                </div>
                                <div className='flex flex-row justify-between border-b border-dashed border-black'>
                                    <span>Tax(7.2% Vat)</span>
                                    <span>N 3,600</span>
                                </div>
                                <div className='flex flex-row justify-between border-b border-dashed border-black font-bold'>
                                    <span>Total Amount</span>
                                    <span>N 39,600</span>
                                </div>
                            </div>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
