import React from 'react';

// Raw Data
import { dataInput, inputs } from '../data/dataItems';

// Components
import ItemList from './ItemList';

const Requests = () => {

    return (
        <div className='w-11/12 flex flex-col justify-evenly items-start px-4 py-4 border border-slate-300 rounded my-5'>
            <h1 className='font-satoshi text-sm font-bold text-black'>Request for Quote</h1>
            <h4 className='font-satoshi text-xs font-normal text-slate-400'>Fill out these details to send the RFQ</h4>
            <form className='w-full my-3 py-3 flex flex-row flex-wrap justify-between items-center'>
                {inputs.map((item, index) => (
                    <div key={index} className='w-1/2 my-2 flex flex-col justify-around items-start'>
                        <label className='font-satoshi text-xs my-1'>{item.name}</label>
                        <input className='w-[98%] bg-slate-100 text-slate-400 font-satoshi text-xs px-2 py-2 rounded border border-slate-300' type={item.type} placeholder={item.placeholder} required/>
                    </div>
                ))
                }
            </form>
            <div className='w-full my-3 py-3 flex flex-col justify-around items-center border-t border-slate-300'>
                <label className='font-satoshi text-base font-bold text-black w-full text-left my-2'>Add Items</label>
                <ItemList data={dataInput} />
            </div>
        </div>
    )
}

export default Requests;