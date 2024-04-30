import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
    return (
        <Container>
            <Stack py={2} direction="row" justifyContent="space-between">
                <Typography variant='h5' component="h2" fontWeight={600}>P<Box color="primary.main" component="span">H</Box> Health Care</Typography>

            </Stack>
        </Container>
    );
};

export default Navbar;