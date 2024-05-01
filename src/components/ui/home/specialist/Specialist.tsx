
import { Box, Container, Typography } from '@mui/material';


const Specialist = async() => {
    const res = await fetch("http://localhost:5000/api/v1/specialties",{
        next:{
            revalidate:30
        }
    });
    const specialist = await res.json();
   
    return (
        <Container>
           <Box sx={{
            margin:"60px 0",
            textAlign:"center"
           }}>
   <Box sx={{
    textAlign:"start"
   }}> 
    <Typography variant='h4' fontWeight={600}>Explore Treatments Across Specialisties</Typography>
    <Typography component="p" fontWeight={300} fontSize={18}>Exprienced Doctors Across All Specialists </Typography>
    </Box>

           </Box>
        </Container>
    );
};

export default Specialist;