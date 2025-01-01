import React, { useEffect } from 'react';

// Icons
import { BiBell } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa6';
import { IoChatbubblesOutline } from 'react-icons/io5';

//Images
import Avatar from '../assets/images/avatar-2.png';

const PageHeader = ({ backVisible, ...props}) => {

    return (
        <div className='bg-white border-b border-b-bordergray w-full h-[8vh] flex flex-row justify-evenly items-center py-2'>
            <div className='w-1/12 flex flex-row justify-center items-center'>
                {backVisible == true &&
                    <button className='cursor-context-menu w-auto h-auto px-2 flex flex-row justify-center items-center'>
                        <FaChevronLeft size={12} className='text-slate-400' />
                        <label className='font-satoshi mx-1 text-xs text-bluegray'>Back</label>
                    </button>
                }
            </div>
            <div className='w-[70%] flex flex-row justify-end items-center'>
                <div className='w-1/2 flex flex-row justify-end items-center border border-slate-200 rounded px-2 py-1.5'>
                    <FaSearch size={13} className='text-gray' />
                    <input name='search' placeholder='Search here...' className='w-11/12 outline-none font-satoshi text-xs mx-2' />
                </div>
            </div>
            <div className='w-1/6 flex flex-row justify-center items-center'>
                <button className='mx-1'>
                    <BiBell className='text-bluegray' />
                </button>
                <button className='mx-2'>
                    <IoChatbubblesOutline className='text-bluegray' />
                </button>
                <div className='w-auto flex flex-row justify-center items-center'>
                    <img src={Avatar} className='w-8 h-8' alt='Avatar' />
                    <FaChevronDown size={10} className='text-bluegray ml-2' />
                </div>           
            </div>
        </div>
    )
}

export default PageHeader;