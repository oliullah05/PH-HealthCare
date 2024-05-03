import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';

const Register = () => {
    return (
        <Container sx={{
            padding: "50px",
            height:"100vh"

        }}>
            <Stack sx={{
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
                        alignItems: "center"
                    }}>
                        <Box> <Image src={assets.svgs.logo} alt='logo' width={50} height={50}></Image></Box>
                        <Box><Typography variant='h6' fontWeight={600}>Patients Register</Typography></Box>
                    </Stack>


                    <Box>
                        <form>
                            <Grid container spacing={2}>

                                <Grid item md={12} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Name"
                                        size='small'
                                        variant="outlined"
                                        fullWidth

                                    />
                                </Grid>
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

                                <Grid item md={6} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Contact Number"
                                        type='tel'
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item md={6} my={1}>
                                    <TextField id="outlined-basic"
                                        label="Address"
                                        size='small'
                                        type='text'
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>

                            </Grid>

                            <Box my={4}><Button fullWidth >Register</Button></Box>
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