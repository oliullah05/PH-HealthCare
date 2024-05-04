"use client"

import { getUserInfo, isloggedIn } from '@/services/auth.service';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const userInfo = getUserInfo()
   
    return (
        <Container>
            <Stack py={2} direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='h4' component="h4"  fontWeight={600}>

                    P<Box color="primary.main" component="span">H</Box> <span></span>               
                    Health Care</Typography>
                <Stack direction="row" gap={3} justifyContent="space-between">
                    <Typography component={Link} href={"/consultation"}>Consultation</Typography>
                    <Typography>Health Plans</Typography>
                    <Typography>Medicine</Typography>
                    <Typography>Diagnostics</Typography>
                    <Typography>NGOs</Typography>
                </Stack>
                {userInfo?.userId ? <Button color='error'>Log Out</Button>:
                <Button component={Link} href='/login'>Log in</Button>}
            </Stack>
        </Container>
    );
};

export default Navbar;