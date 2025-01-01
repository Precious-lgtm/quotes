import React from 'react';

// Raw Data
import { menuItems, menuItems2 } from '../data/menuItems';

// Images
import Logo from '../assets/images/logo.png';
import Avatar from '../assets/images/avatar-1.png';

// Components
import MenuButton from './MenuButton';
import { PiSignOut } from 'react-icons/pi';

const MenuBar = () => {

    return (
        <div className='w-[18.75%] h-screen bg-lightgray overflow-hidden flex flex-col justify-start items-center py-5 px-2'>
            <div className='w-full h-1/12 flex flex-row justify-center items-center'>
                <img src={Logo} className='w-[4.5rem] h-6 ml-2' />
                <label className='font-satoshi text-xs text-darkblue font-bold ml-2 leading-4'>Medical Advanced Platform</label>
            </div>
            <div className='w-full h-3/4 flex flex-col justify-start items-start pt-8 pb-3'>
                {menuItems.map((item, index) => (
                    <MenuButton 
                        key={index}
                        name={item.name}
                        icon={item.icon}
                        submenu={item.children ? item.children : []}
                        alerts={item?.alerts ? item.alerts : ''}
                    />
                ))
                }
            </div>
            <div className='w-full h-1/6 flex flex-col justify-start items-start py-2'>
                {menuItems2.map((item, index) => (
                    <MenuButton
                        key={index}
                        name={item.name}
                        icon={item.icon}
                    />
                ))
                }
            </div>
            <div className='w-full h-auto flex flex-row justify-center items-center py-1'>
                <img src={Avatar} className='w-8 h-8' />
                <div className='w-2/3 h-auto flex flex-col justify-start items-start ml-2'>
                    <label className='font-satoshi text-[11px] font-bold my-0 py-0'>Mark Benson</label>
                    <label className='font-satoshi text-[10px] font-normal mt-0'>markbenson@coremed.com</label>
                </div>
                <button>
                    <PiSignOut size={15} className='text-black font-bold ' />
                </button>
            </div>
        </div>
    )
}

export default MenuBar;