"use client"

import assets from '@/assets';
import userLogin from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.service';

import { Box, Button, Container, Grid, Stack, TextField, Typography, duration } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export type TLoginFormValues = {
    email: string,
    password: string
}

const Login = () => {

    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TLoginFormValues>()

    const onSubmit: SubmitHandler<TLoginFormValues> = async (values) => {

        try {
            const res = await userLogin(values)
            if(res?.data?.accessToken){
                storeUserInfo(res?.data?.accessToken)
                toast.success(res.message)
                router.replace("/",{duration:2000})
            }
            else{
                toast.error(res.message)
            }
        }
        catch (err: any) {
          
            toast.error("something went wrong")
        }
    }
    return (
        <Container>
            <Stack sx={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center"
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
                        alignItems: "center",
                        marginBottom: "5px"
                    }}>
                        <Box> <Image src={assets.svgs.logo} alt='logo' width={50} height={50}></Image></Box>
                        <Box><Typography variant='h6' fontWeight={600}>Login! PH-HealthCare</Typography></Box>
                    </Stack>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>

                                <Grid item md={6} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Email"
                                        type='email'
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                        {...register("email")}
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



                            </Grid>

                            <Box>
                                <Typography component='p' fontWeight={300} textAlign="end">Forgot Password?</Typography>
                            </Box>

                            <Box my={4}><Button type='submit' fullWidth >Login</Button></Box>
                            <Box><Typography component='p' fontWeight={400}>Don&apos;t an account? <Link href={"/register"}>Register</Link></Typography>
                            </Box>
                        </form>
                    </Box>
                </Box>




            </Stack>
        </Container>
    );
};

export default Login;