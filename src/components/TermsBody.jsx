import React, { useRef } from 'react';

// Raw Data
import { deliveryinputs } from '../data/dataItems';

// Icons
import {ReactComponent as Upload} from '../assets/icon/upload.svg';

// Components
import ButtonContainer from './ButtonContainer';

const TermsBody = () => {

    const fileInputRef = useRef(null);

    const handleBrowse = () => {
        fileInputRef.current.click();
    }

    return (
        <div className='w-11/12 flex flex-col justify-evenly items-start px-4 py-4 border border-slate-300 rounded my-5'>
            <h1 className='font-satoshi text-sm font-bold text-black'>Terms and Attachments</h1>
            <h4 className='font-satoshi text-xs font-normal text-slate-400'>Provide detailed information on payment and delivery plans.</h4>
            <form className='w-full my-3 py-3 flex flex-row flex-wrap justify-between items-center border-b border-slate-300'>
                {deliveryinputs.map((item, index) => (
                    <div key={index} className='w-1/2 my-2 flex flex-col justify-around items-start'>
                        <label className='font-satoshi text-xs my-1'>{item.name}</label>
                        <select className='w-[98%] bg-white text-slate-400 font-satoshi text-xs px-2 py-2 rounded border border-slate-300' required>
                            <option>{item.value}</option>
                        </select>
                    </div>
                ))
                }
                <div className='w-full my-2 flex flex-col justify-start items-start'>
                    <label className='font-satoshi text-xs font-bold'>Attachments</label>
                    <label className="font-satoshi text-xs text-slate-400 mb-2">Attach all necessary files or documents</label>
                    <div className="w-2/5 h-48 border border-dashed border-slate-300 rounded flex flex-col justify-center items-center">
                        <div className="w-3/5 flex flex-col justify-center items-center">
                            <img src={Upload} className="w-10 h-10" alt="Upload" />
                            <div className="w-full flex flex-row justify-center items-center mt-2 mb-1">
                                <input multiple type='file' id='fileInput' ref={fileInputRef} accept='.jpg,.png,.svg,.gif' className='hidden' />
                                <label htmlFor='fileInput' className="font-satoshi text-primary text-xs mr-1">Click to Upload</label>
                                <label className="font-satoshi text-slate-400 text-xs">or drag and drop</label>
                            </div>
                            <label className="font-satoshi text-xs text-slate-400">SVG, PNG, JPG or GIF (max. 800x400px)</label>
                            <label className="font-satoshi text-xs text-slate-400 my-2">OR</label>
                            <button onClick={() => handleBrowse()} className="border border-primary rounded font-satoshi text-xs px-4 py-1.5 text-primary">Browse Files</button>
                        </div>
                    </div>
                </div>
            </form>
            <ButtonContainer final={"Continue"} location={'/quote-response-2'}  />
        </div>
    )
}

export default TermsBody;