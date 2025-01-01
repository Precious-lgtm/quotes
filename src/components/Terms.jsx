import React from "react";

// Assets
import { ReactComponent as Signdoc } from '../assets/icon/sign-doc.svg';

// Icons
import { FaChevronDown } from "react-icons/fa6";

const Terms = () => {

    return (
        <div className="w-full px-2 py-2 flex flex-row justify-between items-center border rounded border-bordergray my-5">
            <div className="w-[98%] h-auto flex flex-row justify-between items-center">
                <Signdoc className="w-16 h-8" />
                <div className="w-11/12 flex flex-col justify-center items-start">
                    <label className="font-satoshi text-black text-sm font-bold text-left">Terms and Attachments</label>
                    <label className="font-satoshi text-deepgray text-xs ">
                        Review Payment and Delivery Terms
                    </label>
                </div>
                <div className="w-auto h-auto flex flex-col justify-center items-end">
                    <FaChevronDown size={16} className="text-slate-400" />
                </div>
            </div>
        </div>
    )
}

export default Terms;