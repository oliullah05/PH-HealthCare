import assets from '@/assets';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
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
                        <form>
                            <Grid container spacing={2}>

                                <Grid item md={6} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Email"
                                        type='email'
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Password"
                                        size='small'
                                        type='password'
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>



                            </Grid>

                            <Box>
                                <Typography component='p' fontWeight={300} textAlign="end">Forgot Password?</Typography>
                            </Box>

                            <Box my={4}><Button fullWidth >Login</Button></Box>
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