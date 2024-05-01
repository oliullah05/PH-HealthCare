import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import { Box } from '@mui/material';
import React from 'react';

const CommonLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <Navbar></Navbar>
            <Box component="div" sx={{
                minHeight:"100vh"
            }}>
            {children}
            </Box>
            <Footer></Footer>
        </>
    );
};

export default CommonLayout;