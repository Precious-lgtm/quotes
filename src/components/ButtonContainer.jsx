import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import { FaSpinner } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

//Images
import { ReactComponent as Sent } from '../assets/icon/sent.svg';

const ButtonContainer = ({ location, final, ...props}) => {

    const navigate = useNavigate();

    const [open, setOpen] = useState({
        confirmed: false,
        sending: false,
        sent: false
    });

    const setDefault = async() => {
        setOpen({
            ...open,
            confirmed: false,
            sending: false,
            sent: false
        });
        navigate('/');
        return;
    }

    const confirmSubmit = () => {
        setOpen({
            ...open,
            confirmed: false,
            sending: true,
            sent: false
        });
    }

    const changeLocation = () => {
        if(final == 'Submit') {
            setOpen({
                ...open,
                confirmed: true
            });
        }
        navigate(location);
        return;
    }

    useEffect(() => {
        let timer;
        if (open.sending == true) {
          // When 'sending' is true, start a timer
          timer = setTimeout(() => {
            setOpen((prev) => ({
              ...prev,
              confirmed: false,
              sending: false,
              sent: true
            }));
          }, 4000); // 4 seconds delay
        }
    
        // Cleanup the timer if the component unmounts or sending changes
        return () => clearTimeout(timer);
    }, [open.sending]);

    return (
        <div className='w-full flex flex-row justify-end items-center mt-5'>
            <button onClick={() => navigate('/')} className='px-4 py-1.5 mx-1 border border-bordergray font-satoshi text-xs rounded'>
                Cancel
            </button>
            <button className='px-6 py-1.5 mx-1 border border-primary rounded font-satoshi text-xs text-primary'>Save as Draft</button>
            <button onClick={() => changeLocation()} className='px-6 py-1.5 mx-1 bg-primary border-primary rounded font-satoshi text-xs text-white'>{final}</button>
            {open.confirmed == true &&
                <div className="w-screen h-screen bg-slate-400 bg-opacity-25 fixed top-0 right-0 flex flex-col justify-center items-center">
                    <div className="w-2/5 h-auto flex flex-col justify-start items-center bg-white px-4 py-4 rounded">
                        <label className="font-satoshi text-deepblue text-left w-full font-bold">Confirmation</label>
                        <label className="font-satoshi text-xs text-left text-deepgray w-full my-2">
                            You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?
                        </label>
                        <div className="w-full flex flex-row justify-end items-center my-4">
                            <button onClick={() => setOpen(false)} className="px-4 py-2 font-satoshi text-xs border border-primary rounded text-primary mx-1">Cancel</button>
                            <button onClick={() => confirmSubmit()} className="px-4 py-2 font-satoshi text-xs border border-primary bg-primary rounded text-white mx-1">Continue</button>
                        </div>
                    </div>
                </div>
            }
            {open.sending == true && 
                <div className="w-screen h-screen bg-slate-400 bg-opacity-25 fixed top-0 right-0 flex flex-col justify-center items-center">
                    <div className="w-1/4 flex flex-col justify-center items-center bg-white rounded px-3 py-3">
                        <FaSpinner size={20} className="text-primary" />
                        <label className='font-satoshi text-xs text-deepblue my-1.5'>Sending Quote..</label>
                    </div>
                </div>
            }
            {open.sent == true &&
                <div className="w-full h-screen bg-slate-400 bg-opacity-25 fixed top-0 right-0 flex flex-col justify-center items-center">
                    <div className="w-1/5 flex flex-row justify-between items-center bg-white rounded px-3 py-3">
                        <img src={Sent} className="w-12 h-12" alt="sent" />
                        <label className='font-satoshi text-xs text-deepblue'>RFQ ID Sent Successfully!!</label>
                        <button onClick={() => setDefault()}>
                            <CgClose size={16} className="text-darkgray" />
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ButtonContainer;