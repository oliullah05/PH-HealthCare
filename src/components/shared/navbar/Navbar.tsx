
import { Box, Container, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Navbar = () => {
    const AuthButton = dynamic(() => import('@/components/ui/authButton/AuthButton'), { ssr: false })
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
               <AuthButton></AuthButton>
            </Stack>
        </Container>
    );
};

export default Navbar;