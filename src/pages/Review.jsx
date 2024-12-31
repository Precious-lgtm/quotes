// React Main Components
import React from "react";
import { useNavigate } from "react-router-dom";

// Icons and Images
import { BsDot } from "react-icons/bs";
import { FaBuilding, FaEdit } from "react-icons/fa";
import { FaBuildingColumns, FaIndustry,  } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

// Raw Data
import { dataItems, requestInfo } from "../data/dataItems";

// Components
import PageHeader from "../components/PageHeader";
import NavBar from  "../components/NavBar";
import Steps from "../components/Steps";
import ButtonContainer from "../components/ButtonContainer";
import ItemTable from "../components/ItemTable";
import Terms from "../components/terms";

const Review = () => {

    const navigate = useNavigate();

    const navToPage = async(name) => {
        navigate(name);
        return;
    }

    return (
        <div className="w-5/6 h-screen flex flex-col justify-start items-center overflow-auto">
            <PageHeader />
            <NavBar main={'Quotes'} sub={'Quote Response'} mainlink={'/'} sublink={'/quote-response'} />
            <Steps id={3} />
            {/* Quote Information */}
            <div className="w-11/12 h-auto flex flex-col justify-around items-center mt-5 border border-slate-300 rounded px-5 py-3">
                <div className="w-full flex flex-row justify-between items-center pb-4">
                    <label className="font-satoshi text-sm font-bold">Request Information</label>
                    <label className="font-satoshi text-xs text-slate-400 ">
                        <FaEdit size={20} className="text-slate-300" />
                    </label>
                </div>
                <div className="w-full h-auto flex flex-row justify-start items-start">
                    <div className="w-3/5 flex flex-col justify-around items-start">
                        <div className="w-full flex flex-col justify-center items-start">
                            {requestInfo.map((item, index) => (
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
                </div>
            </div>
            {/* Items */}
            <div className="w-11/12 h-auto flex flex-col justify-around items-center mt-5 border border-slate-300 rounded px-5 py-2">
                <div className="w-full flex flex-row justify-start items-center pb-4">
                    <label className="font-satoshi text-sm font-bold">Items(s)</label>
                </div>
                <ItemTable data={dataItems} />
            </div>
            <div className="w-11/12 h-auto mb-5 flex flex-col justify-center items-center">
                <Terms />
                <ButtonContainer final={"Submit"} />
            </div>
        </div>
    )
}

export default Review;