import React from "react";

const ItemTable = ({ data, ...props }) => {

    const findItemWidth = (value) => {
        let width = columns.find(item => item.name === value).width;
        return width;
    }

    const columns = [
        {
            name: 'Items',
            width: '20%',
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
            name: 'Amount',
            width: '15%'
        }, 
        {
            name: 'Expected Delivery Date',
            width: '20%'
        }
    ];

    return (
        <div className="w-full h-auto">
            <div className="bg-lightgrey rounded-t-md border border-bordergray w-full flex flex-row justify-start items-center">
                <div style={{width: '5%'}} className="flex flex-row justify-center items-center py-1.5">
                    <input type="checkbox" name="all" className="border border-slate-400 rounded-md" />
                </div>
                {columns.map((item, index) => (
                    <div key={index} style={{width: item.width}} className="py-1.5">
                        <label className="font-satoshi text-sm text-darkgray font-normal">{item.name}</label>
                    </div>
                ))
                }
            </div>
            <div className="w-full bg-white rounded-b-md border-b border-l border-r border-bordergray">
                {data.map((item, index) => (
                    <div key={index} className="border-b border-b-bordergray flex flex-row w-full">
                        <div className="w-[5%] flex flex-row justify-center items-center">
                            <input type="checkbox" name="checkbox" id={item.id} className="border-slate-400 border rounded-md" />
                        </div>
                        <div style={{width: findItemWidth('Items')}} className="flex flex-row justify-start items-start py-1.5">
                            <img src={item.image} className="w-8 h-8 mr-1.5" alt="Image"/>
                            <div className="flex flex-col justify-start items-start">
                                <label className="font-satoshi text-xs font-bold text-darkgray">{item.name}</label>
                                <label className="font-satoshi text-xs font-normal text-slate-400">{item.id}</label>
                            </div>
                        </div>
                        <div style={{width: findItemWidth('Variants')}} className="flex flex-row justify-start items-center py-1.5">
                            <label className="font-satoshi text-xs font-normal text-darkgray">{item.variant}</label>
                        </div>
                        <div style={{width: findItemWidth('Quantity')}} className="flex flex-row justify-start items-center py-1.5">
                            <label className="font-satoshi text-xs font-normal text-darkgray">{item.quantity}</label>
                        </div>
                        <div style={{width: findItemWidth('Price')}} className="flex flex-row justify-start items-center py-1.5">
                            <label className="font-satoshi text-xs font-normal text-darkgray">${item.price}</label>
                        </div>
                        <div style={{width: findItemWidth('Amount')}} className="flex flex-row justify-start items-center py-1.5">
                            <label className="font-satoshi text-xs font-normal text-darkgray">${item.amount}</label>
                        </div>
                        <div style={{width: findItemWidth('Expected Delivery Date')}} className="flex flex-row justify-start items-center py-1.5">
                            <label className="font-satoshi text-xs font-normal text-darkgray">{item.delivery}</label>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className="w-full flex flex-col justify-center items-end">
                <div className="w-full flex flex-row justify-end items-center my-3">
                    <label className="w-[15%] font-satoshi text-xs font-normal text-deepgray">Sub-Total:</label>
                    <label className="w-[20%] font-satoshi text-xs font-normal text-deepgray">$8000.00</label>
                </div>
                <div className="w-full flex flex-row justify-end items-center my-2">
                    <label className="w-[15%] font-satoshi text-xs font-normal text-deepgray">Total</label>
                    <label className="w-[20%] font-satoshi text-xs font-semibold text-deepgray">$8,750.00</label>
                </div>
            </div>
        </div>
    )
}

export default ItemTable;