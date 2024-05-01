
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';


const Specialist = async () => {
    const res = await fetch("http://localhost:5000/api/v1/specialties", {
        next: {
            revalidate: 30
        }
    });
    const specialist = await res.json();

    return (
        <Container>
            <Box sx={{
                margin: "60px 0",
                textAlign: "center"
            }}>
                <Box sx={{
                    textAlign: "start"
                }}>
                    <Typography variant='h4' fontWeight={600}>Explore Treatments Across Specialisties</Typography>
                    <Typography component="p" fontWeight={300} fontSize={18}>Exprienced Doctors Across All Specialists </Typography>
                </Box>


<Stack direction="row" gap={4} mt={5}>
{
    specialist?.data?.map((speciality:{id:string,title:string,icon:string})=>(
        <Box key={speciality.id} sx={{
            flex:1,
            width:"150px",
            backgroundColor:"rgba(245,245,245,1)",
            borderRadius:"10px",
            border:"1px solid rgba(250,250,250,1)",
            "& img":{
                width:"50px",
                height:"50px",
                margin:"0 auto",
                textAlign:"center",
                padding:"30px 10px"
            },
            "&:hover":{
                border:"1px solid blue",
            }
        }}>
            <Image src={speciality.icon} alt='spacility icon' width={100} height={100}></Image>
            <Box>
            <Typography component="p" fontWeight={600} fontSize={18} pb={4}>{speciality.title} </Typography>
            </Box>
        </Box>
    ))
}

</Stack>

<Button variant='outlined' sx={{
    marginTop:"20px"
}}>View All</Button>
            </Box>
        </Container>
    );
};

export default Specialist;