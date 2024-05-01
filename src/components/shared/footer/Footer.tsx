import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png"
const Footer = () => {
    return (
        <Box marginTop={40} bgcolor='rgb(17,26,34)' py={5} className="mb-auto border-red-700">
            <Container>

                <Stack direction="row" gap={3} justifyContent="center">
                    <Typography color="#fff" component={Link} href={"/consultation"}>Consultation</Typography>
                    <Typography color="#fff">Health Plans</Typography>
                    <Typography color="#fff">Medicine</Typography>
                    <Typography color="#fff">Diagnostics</Typography>
                    <Typography color="#fff">NGOs</Typography>
                </Stack>
                <Stack direction="row" gap={2} justifyContent="center" py={3} >
                    <Image width={30} height={30} src={facebookIcon} alt="Facebook"></Image>
                    <Image width={30} height={30} src={facebookIcon} alt="Facebook"></Image>
                    <Image width={30} height={30} src={facebookIcon} alt="Facebook"></Image>
                    <Image width={30} height={30} src={facebookIcon} alt="Facebook"></Image>
                    <Image width={30} height={30} src={facebookIcon} alt="Facebook"></Image>
                </Stack>

                <Box sx={{
                    borderBottomWidth:"20px",
                    borderBottomColor:"red"
                    // border:"1px solid red"
                }}>
                    
                </Box>

                <Stack direction="row" gap={2} justifyContent="space-between" alignItems="center" py={3} >
                    <Typography component="p" color="#fff">
                        &copy;2024 PH HealthCare. All Rights Reserved.
                    </Typography>
                    <Typography variant='h4' color="#fff" component="h4" fontWeight={600}>

                        P<Box color="primary.main" component="span">H</Box> <span></span>
                        Health Care</Typography>


                    <Typography component="p" color="#fff">
                       Privacy Policy!{" "}Terms And Consitions
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;