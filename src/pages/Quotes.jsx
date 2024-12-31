import React from "react";
import { BsDot } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { FaBuildingColumns, FaIndustry } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { dataItems, quoteInfo } from "../data/dataItems";
import ItemTable from "../components/ItemTable";
import Terms from "../components/terms";
import { useNavigate } from "react-router-dom";

const Quotes = () => {

    const navigate = useNavigate();

    const navToPage = async(name) => {
        navigate(name);
        return;
    }

    return (
        <div className="w-11/12 flex flex-col justify-center items-center">
            <div className="w-full flex flex-row justify-around items-center mt-5">
                <div className="w-1/2 flex flex-col justify-start items-start">
                    <label className="font-satoshi text-base font-bold">Quote Details</label>
                    <label className="font-satoshi text-xs font-normal">Created on Wed, 12th June 2022, 08:00am</label>
                </div>
                <div className="w-1/2 flex flex-row justify-end items-center">
                    <button onClick={() => navToPage('/quote-response')} className="font-satoshi bg-primary text-white rounded p-1.5 mx-1 text-xs">Respond</button>
                    <button className="flex flex-row justify-between bg-red items-center rounded p-1.5 mx-1">
                        <IoCloseOutline className="text-white" />
                        <label className="font-satoshi text-white text-xs">Reject</label>
                    </button>
                </div>
            </div>
            {/* Quote Information */}
            <div className="w-full h-auto flex flex-col justify-around items-center mt-5 border border-slate-300 rounded px-5 py-3">
                <div className="w-full flex flex-row justify-between items-center pb-4">
                    <label className="font-satoshi text-sm font-bold">Quote Information</label>
                    <label className="font-satoshi text-xs text-slate-400 ">Expected Delivery Date: {'2024-12-02'}</label>
                </div>
                <div className="w-full h-auto flex flex-row justify-between items-start">
                    <div className="w-3/5 flex flex-col justify-around items-start">
                        <div className="w-full flex flex-col justify-center items-start">
                            {quoteInfo.map((item, index) => (
                                <div key={index} className="w-full flex flex-row justify-between items-start my-1">
                                    <label className="font-satoshi text-xs text-slate-400 w-2/5 text-start">{item.name}</label>
                                    <label className="font-satoshi text-xs text-slate-darkgray w-3/5 text-start flex flex-row justify-start items-center">
                                        {item.tag &&
                                            <label className="px-1.5 py-1 mr-1 rounded-full bg-lightpink font-satoshi text-[8px] text-black">
                                                {item.tag}
                                            </label>
                                        }
                                        <label className= {item.name == 'Status' ? "text-orange px-1 py-1 rounded-xl bg-lightpink" : ''}>{item.value}</label>
                                        {item.role && 
                                            <label className="flex flex-row w-auto justify-center items-center">
                                                <BsDot size={15} className="text-slate-400" />
                                                <label className="text-slate-400 font-satoshi">{item.role}</label>
                                            </label>
                                        }
                                    </label>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className="w-2/5 flex flex-col justify-start items-start my-1">
                        <div className="w-full h-auto flex flex-col justify-between items-center border border-slate-300 py-2 px-2 rounded">
                            <div className="w-full flex flex-row justify-start items-center">
                                <FaBuilding className="text-slate-400" size={10} />
                                <label className="font-satoshi text-xs text-slate-400 mx-1">Client</label>
                            </div>
                            <div className="w-full flex flex-row justify-start items-center mt-1">
                                <label className="bg-lightpink text-black font-satoshi px-2 py-1 rounded-full text-xs">W</label>
                                <div className="w-auto flex flex-col justify-start items-start mx-2">
                                    <label className="font-satoshi text-xs font-bold">Westend Hospital</label>
                                    <label className="font-satoshi text-xs text-slate-400">Clear Street</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Items */}
            <div className="w-full h-auto flex flex-col justify-around items-center mt-5 border border-slate-300 rounded px-5 py-3">
                <div className="w-full flex flex-row justify-start items-center pb-4">
                    <label className="font-satoshi text-sm font-bold">Items(s)</label>
                </div>
                <ItemTable data={dataItems} />
            </div>
            <Terms />
        </div>
    )
}

export default Quotes;