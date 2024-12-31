import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MenuBar from '../components/MenuBar.jsx';

export default function MainLayout() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className='w-screen h-screen bg-white overflow-auto flex flex-row justify-center align-center'>
            <MenuBar />
            <Outlet />
        </div>
    )
}
