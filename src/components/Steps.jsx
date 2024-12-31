import React from "react";

const Steps = ({ id, ...props }) => {

    // Phases of Completion, from Requesting info to Review
    const phases = [
        {
            id: 1,
            name: 'Request Information',
            sub: "Provide Details About RFQ",
            url: '/quote-response'
        },
        {
            id: 2,
            name: 'Terms and Attachments',
            sub: "Payment and Delivery Terms",
            url: '/quote-response-1'
        },
        {
            id: 3,
            name: 'Review',
            sub: 'Confirm all information provided',
            url: '/quote-response-2'
        }
    ]

    return (
        <div className="w-11/12 flex flex-row justify-start items-center px-3 py-3 border border-slate-300 rounded mt-5" {...props}>
            {phases.map((item, index) => (
                <div key={index} className="w-1/3 flex flex-row justify-start items-center">
                    <label 
                        style={id == item.id ? {backgroundColor: '#175CFF', color: 'white'} : (item.id < id ) ? {backgroundColor: '#E7F6EC', color: '#0F973D', fontWeight: 600} : {}}
                        className="font-satoshi text-slate-400 text-xs border border-slate-300 rounded-full px-2.5 py-1"
                    >
                        {item.id}
                    </label>
                    <div className="w-auto flex flex-col justify-around items-start px-2">
                        <label 
                            style={id == item.id ? {fontWeight: 'bold', color: 'black'} : {}}
                            className="font-satoshi text-slate-400 text-sm"
                        >
                            {item.name}
                        </label>
                        <label 
                            style={id == item.id ? {color: 'black'} : {}}
                            className="font-satoshi text-slate-400 text-xs"
                        >
                            {item.sub}
                        </label>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Steps;