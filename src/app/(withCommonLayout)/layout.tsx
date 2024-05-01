import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const CommonLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-screen w-96 bg-red-500'>
            {children}
            </div>
            <Footer></Footer>
        </>
    );
};

export default CommonLayout;