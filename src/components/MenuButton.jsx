import React from "react";
import { useNavigate } from "react-router-dom";

// Context Provider
import { useStateContext } from "../contexts/ContextProvider";

// Icons
import { FaChevronRight, FaChevronUp } from "react-icons/fa6";

const MenuButton = ({icon, name, submenu, alerts, ...props}) => {

    const { estate, setEstate } = useStateContext();

    const navigate = useNavigate();

    const changePage = async(location, name, sub) => {
        navigate(location);
        changeSelection(name, sub);
    }
    
    const changeSelection = async(name, sub) => {
        if(estate == name) {
            setEstate({
                name: name,
                sub: sub ? sub : ''
            });
        } else {
            setEstate({
                name: name,
                sub: sub ? sub : ''
            });
        }
        return;
    }

    return (
        <div onClick={() => changeSelection(name, submenu[0]?.name)} className= "w-11/12 h-auto my-0.5" {...props}>
            <div style={estate?.name == name ? {backgroundColor: "#E3EAFB"} : {}} className="w-full flex flex-row justify-start items-center px-2 py-2 rounded-md">
                <img src={icon} width={16} className={estate?.name == name ? {color: '#175CFF'} : {}} />
                <label className="font-satoshi text-xs w-3/4 mx-2">{name}</label>
                {submenu?.length > 0 ?
                    estate?.name == name ? <FaChevronUp size={10} /> : <FaChevronRight size={10} />
                    : 
                    ''
                }
                {alerts > 0 ?
                    <label className="bg-primary text-white rounded-full text-[8px] p-1 font-satoshi text-center">{alerts}</label>
                    :
                    ''
                }
            </div>
            {estate?.name == name && submenu?.length > 0 && 
                <div className="w-full flex flex-col justify-around items-center">
                    {submenu.map((item, index) => (
                        <button 
                            key={index} 
                            style={estate?.sub == item?.name ? {backgroundColor: '#E3EAFB'} : {}} 
                            onClick={() => changePage(item?.url, name, item?.name)} 
                            className="font-satoshi text-xs px-3 py-1.5 my-1 w-full rounded-md text-left"
                        >
                            {item.name}
                        </button>
                    ))
                    }
                </div>
            }
        </div>
    )
}

export default MenuButton;