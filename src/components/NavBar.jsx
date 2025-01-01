import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ main, sub, mainlink, sublink, ...props }) => {
    
    const navigate = useNavigate();

    return (
        <div className="w-11/12 flex flex-row justify-start items-center mt-5">
            <button className="font-satoshi text-xs text-primary mr-2" onClick={() => navigate(mainlink)}>{main}</button>
            <label className="text-fadegray">/</label>
            <button className="font-satoshi text-xs text- ml-2 text-bluegray" onClick={() => navigate(sublink)}>{sub}</button>
        </div>
    )
}

export default NavBar;