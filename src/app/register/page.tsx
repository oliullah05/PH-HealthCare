"use client"

import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form"

interface IPatientData {
    name: string
    email: string
    contactNumber:string
    address:string
}

type IPatientRegisterFormData= {
    patient:IPatientData
    password:string
  }
  

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<IPatientRegisterFormData>()
      const onSubmit: SubmitHandler<IPatientRegisterFormData> = (data) => console.log(data)



    return (
        <Container sx={{

        }}>
            <Stack sx={{
                justifyContent: "center",
                alignItems: "center",
                height:"100vh"
            }}>
                <Box sx={{
                    maxWidth: 600,
                    width: "100%",
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 4,
                    textAlign: "center"
                }}>
                    <Stack sx={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Box> <Image src={assets.svgs.logo} alt='logo' width={50} height={50}></Image></Box>
                        <Box><Typography variant='h6' fontWeight={600}>Patients Register</Typography></Box>
                    </Stack>


                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>

                                <Grid item md={12} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Name"
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                        {...register("patient.name")}

                                    />
                                </Grid>
                                <Grid item md={6} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Email"
                                        type='email'
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                        {...register("patient.email")}
                                    />
                                </Grid>
                                <Grid item md={6} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Password"
                                        size='small'
                                        type='password'
                                        variant="outlined"
                                        fullWidth
                                        {...register("password")}
                                    />
                                </Grid>

                                <Grid item md={6} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Contact Number"
                                        type='tel'
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                        {...register("patient.contactNumber")}
                                    />
                                </Grid>
                                <Grid item md={6} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Address"
                                        size='small'
                                        type='text'
                                        variant="outlined"
                                        fullWidth
                                        {...register("patient.address")}
                                    />
                                </Grid>

                            </Grid>

                            <Box my={4}><Button fullWidth type='submit'>Register</Button></Box>
                            <Box><Typography component='p' fontWeight={400}>Do you alrady have an account? <Link href={"/login"}>Login</Link></Typography>
                            </Box>
                        </form>
                    </Box>
                </Box>


            </Stack>
        </Container>
    );
};

export default Register;