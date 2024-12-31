import React from 'react';

// Icons
import { BiBell } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa6';
import { IoChatbubblesOutline } from 'react-icons/io5';

//Images
import Avatar from '../assets/images/avatar-2.png';

const PageHeader = () => {

    return (
        <div className='bg-white border-b border-b-background w-full h-[8vh] flex flex-row justify-evenly items-center py-2'>
            <div className='w-1/12 flex flex-row justify-center items-center'>
                <button className='cursor-context-menu w-auto h-auto px-2 flex flex-row justify-center items-center'>
                    <FaChevronLeft size={12} className='text-slate-400' />
                    <label className='font-satoshi mx-1 text-xs text-slate-400'>Back</label>
                </button>
            </div>
            <div className='w-3/4 flex flex-row justify-end items-center'>
                <div className='w-3/4 flex flex-row justify-start items-center border border-slate-200 rounded px-2 py-1'>
                    <FaSearch size={13} className='text-gray' />
                    <input name='search' placeholder='Search here...' className='w-11/12 outline-none font-satoshi text-sm mx-2' />
                </div>
            </div>
            <div className='w-1/12 flex flex-row justify-around items-center'>
                <button className='mx-1'>
                    <BiBell className='text-slate-400' />
                </button>
                <button className='mx-2'>
                    <IoChatbubblesOutline className='text-slate-400' />
                </button>
                <div className='w-auto flex flex-row justify-center items-center'>
                    <img src={Avatar} className='w-8 h-8' alt='Avatar' />
                    <FaChevronDown size={10} className='text-darkgray ml-2' />
                </div>           
            </div>
        </div>
    )
}

export default PageHeader;