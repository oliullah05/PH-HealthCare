import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
    return (
        <Container sx={{
            display:"flex",
            direction:"row",
            my:"16"
        }}>
            <Box sx={{
                flex:1,
                position:"relative",
                padding:"5px"

            }}>
                <Box sx={
                    {
                        position:"absolute",
                        width:"700px",
                        top:"-90px",
                        left:"-120px"
                    }
                }>
                    <Image src={assets.svgs.grid} alt="Grid"></Image>
                </Box>

                <Typography variant="h3" component="h1" fontWeight={600}>Healthier Hearts</Typography>
                <Typography variant="h3" component="h1" fontWeight={600}>Come From</Typography>
                <Typography color="primary.main" variant="h3" component="h1" fontWeight={600}>Preventive Care</Typography>

                <Typography  variant="h6" component="p" fontWeight={400} sx={{
                    width:"50%"
                }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos provident tenetur expedita repudiandae possimus quo dolore incidunt, cum eius inventore.</Typography>
                <Button>Make Appointment</Button>
                <Button variant="outlined" sx={
                    {
                        marginLeft:"5px"
                    }
                }>Contact Us</Button>
            </Box>
            
            
            <Box>Right</Box>
        </Container>
    );
};

export default HeroSection;