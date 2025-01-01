import React, { useState } from "react";

//Icons
import { BiCalendar, BiTrash }  from "react-icons/bi";

// Components
import ButtonContainer from "./ButtonContainer";

const ItemList = ({ data, ...props }) => {

    const findItemWidth = (value) => {
        let width = columns.find(item => item.name === value).width;
        return width;
    }

    const [words, setWords] = useState('');

    const checkLength = (val) => {
        setWords(val?.target.value);
        return;
    }

    const columns = [
        {
            name: 'Items',
            width: '25%',
        }, 
        {
            name: 'Variants',
            width: '10%',
        }, 
        {
            name: 'Quantity',
            width: '15%'
        }, 
        {
            name: 'Price',
            width: '15%',
        }, 
        {
            name: 'Expected Delivery Date',
            width: '15%'
        },
        {
            name: 'Amount',
            width: '15%'
        },
        {
            name: '',
            width: '5%'
        }
    ];

    return (
        <div className="w-full h-auto">
            <div className="bg-lightgray rounded-md w-full flex flex-row justify-start items-center">
                {columns.map((item, index) => (
                    <div key={index} style={item.name == 'Items' ? {width: item.width, paddingLeft: 7} : {width: item.width}} className="py-1.5">
                        <label className="font-satoshi text-xs text-bluegray font-normal">{item.name}</label>
                    </div>
                ))
                }
            </div>
            <div className="w-full bg-white border-b border-innergray pb-4">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-row w-full">
                        <div style={{width: findItemWidth('Items')}} className="flex flex-row justify-start items-start py-1.5">
                            <select value={item.name} className="w-11/12 rounded bg-gray border border-inputgray font-satoshi text-fadegray text-xs outline-none py-2 px-2">
                                <option value=''>Select an Item</option>
                                <option value={item.name}>{item.name}</option>
                            </select>
                        </div>
                        <div style={{width: findItemWidth('Variants')}} className="flex flex-row justify-start items-center py-1.5">
                            <select className="w-5/6 rounded bg-white border border-inputgray font-satoshi text-darkgray text-xs outline-none py-2 px-2">
                                <option value=''>Variant</option>
                                <option value={item.variant}>{item.variant}</option>
                            </select>
                        </div>
                        <div style={{width: findItemWidth('Quantity')}} className="flex flex-row justify-start items-center py-1.5">
                            <div className="w-5/6 flex flex-row justify-between items-center rounded bg-white border border-inputgray outline-none py-1 px-1">
                                <label className="font-satoshi text-darkgray text-xs">{item.quantity}</label>
                                <label className="bg-lightgray font-satoshi text-xs px-1 py-1 rounded text-bluegray">{item.unit}</label>
                            </div>
                        </div>
                        <div style={{width: findItemWidth('Price')}} className="flex flex-row justify-start items-center py-1.5">
                            <input 
                                className="w-5/6 rounded bg-white border border-inputgray font-satoshi text-darkgray text-xs outline-none py-2 px-2"
                                value={"$ " + item.price}
                            />
                        </div>
                        <div style={{width: findItemWidth('Expected Delivery Date')}} className="flex flex-row justify-start items-center py-1.5">
                            <div className="w-5/6 bg-white border border-inputgray rounded flex flex-row justify-between items-center px-2 py-2">
                                <BiCalendar size={16} className="text-slate-400" />
                                <input
                                    type="text" 
                                    placeholder="yyyy-mm-dd"
                                    className="w-5/6 font-satoshi text-darkgray text-xs outline-none"
                                    value= {item.delivery}
                                />
                            </div>
                        </div>
                        <div style={{width: findItemWidth('Amount')}} className="flex flex-row justify-start items-center py-1.5">
                            <input 
                                className="w-full rounded bg-white font-satoshi text-darkgray text-xs outline-none py-2 px-2"
                                value={"$" + item.amount}
                            />
                        </div>
                        <div style={{width: findItemWidth('')}} className="flex flex-row justify-center items-center py-1.5">
                            <button>
                                <BiTrash size={16} color="#98A2B3" />
                            </button>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className="w-full flex flex-col justify-center items-end pb-4 border-b border-innergray">
                <div className="w-full flex flex-row justify-end items-center my-3">
                    <label className="w-[15%] font-satoshi text-xs font-normal text-deepgray">Sub-Total:</label>
                    <label className="w-[20%] font-satoshi text-xs font-normal text-deepgray">$8000.00</label>
                </div>
                <div className="w-full flex flex-col justify-start items-start my-2">
                    <label className="w-[15%] font-satoshi text-xs font-semibold text-deepgray">Note</label>
                    <textarea onChange={checkLength} maxLength={200} minLength={10} placeholder="Enter note here" className="px-3 py-3 rounded font-satoshi text-xs border border-inputgray resize-none outline-none w-2/5 mt-1 h-24" />
                    <label className="w-2/5 text-end font-satoshi text-bluegray text-xs mt-1">{words?.length} / {200}</label>
                </div>
            </div>
            <ButtonContainer final={"Continue"} location={'/quote-response-1'} />
        </div>
    )
}

export default ItemList;