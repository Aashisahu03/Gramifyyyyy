import React, { useState } from 'react';
import Instaclauslogo from '../assets/Instaclauslogo.svg';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Vector from '../assets/Vector.svg';
import younggirlpart2 from '../assets/younggirlpart2.svg';
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import * as APIServices from "../Services/APIServices";

const ResetPassword = () => {

    const navigate = useNavigate();
    const [noValidPassword, showNoValidPassword] = useState(false)
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    // const [value1, setValues1] = useState({
    //     newPassword: "",
    //     showPassword: false,
    // });

    // const [value2, setValues2] = useState({
    //     confirmPassword: "",
    //     showPassword: false,
    // });

    const validatePassword = (e) => {
        console.log("-->", confirmPassword, newPassword);
        if (newPassword === confirmPassword) {
            showNoValidPassword(false);
            resetPassword()
            // navigate('/Sign')
        } else {
            showNoValidPassword(true);
        }
    }

    const resetPassword = async () => {
        let formData = {
            new_password: newPassword,
        }
        let token = localStorage.getItem('token');
        console.log("token", token)
        try {
            let response = await APIServices.reset_password(formData, token);
            if (response.code === 200) {
                console.log("res==>", response)
                navigate('/Sign')
            }
        } catch (e) {
            console.log("error-----", e);
        }
    }

    return (

        <Grid container style={{ height: '100vh', overflow: 'hidden' }}>
            <Grid item xs={6} sm={6} md={6} lg={6} className={'position-relative instaclaus-primary-colour-light'} >
                {/* <div className='position-absolute'> */}
                <img
                    alt='background'
                    src={Vector}
                    style={{ width: '100%', marginTop: '100px', position: 'absolute' }}
                />

                {/* </div>
                <div> */}
                <img
                    alt='lady'
                    src={younggirlpart2}
                    style={{ height: '70%', width: '70%', position: 'absolute', marginLeft: '300px', marginTop: '280px' }}
                />
                {/* </div> */}

            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column' }}>
                <div>
                    <img
                        src={Instaclauslogo}
                        alt='lazy'
                        style={{}} />
                </div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#498688', textAlign: 'center', marginBlock: '30px', width: '552px' }}>
                    Forgot Password? Reset
                </div>

                <div style={{ fontSize: '15px', fontWeight: '400', color: '#498688', textAlign: 'center', marginBlock: '30px', width: '452px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' }, color: '#24C6BF'
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <Input style={{ color: '#D1E1E1' }}
                        placeholder="New Password"
                        // type={value1.showPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => { setNewPassword(e.target.value) }}
                    />

                    <Input
                        placeholder="Confirm Password"
                        // type={value2.showPassword ? "text" : "password"}
                        style={{ color: '#D1E1E1', width: '100%' }}
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}


                    />{noValidPassword ? <p style={{ color: 'red', width: '100%' }}> Password does not match </p> : null}
                    <Stack >
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#1B686A', width: '100%', marginBlock: '50px' }}
                            onClick={() => { validatePassword() }}
                        >
                            Reset</Button>
                    </Stack>

                </Box>




            </Grid>
        </Grid>
    );
}

export default ResetPassword;
