import React from "react";

// Assets
import { ReactComponent as Signdoc} from '../assets/icon/sign-doc.svg';

// Icons
import { FaChevronDown } from "react-icons/fa6";

const Terms = () => {

    return (
        <div className="w-full px-2 py-2 flex flex-row justify-around items-center border rounded border-slate-300 my-5">
            <div className="w-3/4 h-auto flex flex-row justify-start items-center">
                <img src={Signdoc} className="w-16 h-8" />
                <div className="w-11/12 flex flex-col justify-center items-start">
                    <label className="font-satoshi text-black text-sm font-bold text-left">Terms and Attachments</label>
                    <label className="font-satoshi text-slate-400 text-xs ">
                        Review Payment and Delivery Terms
                    </label>
                </div>
            </div>
            <div className="w-1/5 h-auto flex flex-col justify-center items-end">
                <FaChevronDown size={16} className="text-slate-400" />
            </div>
        </div>
    )
}

export default Terms;