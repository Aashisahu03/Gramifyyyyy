import React, { useState } from 'react';
import Instaclauslogo from '../assets/Instaclauslogo.svg';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Vector from '../assets/Vector.svg';
import younggirl from '../assets/younggirl.svg';
import { Button, Grid } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Stack from '@mui/material/Stack';
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from '@mui/material/Link';
import { useNavigate} from "react-router-dom";
import * as APIServices from "../Services/APIServices";

function Sign() {

    const navigate = useNavigate();
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [novalidemail, showNoValidEmail] = React.useState("");
    // const [novalidPassword, showNoValidPassword] = React.useState("");
    const [noValidPassword, showNoValidPassword] = useState(false)
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const validate = (e) => {
        console.log("check==>", values, email)
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        console.log(email === "")
        console.log(!email.match(isValidEmail))
        console.log(values.password === "")
        console.log(values.password.length < 8)
        console.log("eeee", e.target.value)

        if (email === "" || !email.match(isValidEmail)) {
            showNoValidEmail("Incorrect Email");
            showNoValidPassword("");
            return false
        }

        if (values.password === "" || values.password.length < 8) {
            showNoValidPassword("Incorrect password");
            showNoValidEmail("");
            return false
        }

        showNoValidEmail("");
        showNoValidPassword("");
        return true
    }

    const signUp = async () => {
        let data = {
            email: email,
            password: values.password,
        }
        let val = validate()
        if (val === true) {
            try {
                let response = await APIServices.check_user(data);
                if (newPassword === confirmPassword) {
                    showNoValidPassword(false);
                    // resetPassword()
                    // navigate('/Sign')
                } else {
                    showNoValidPassword(true);
                }
                // if (response.code === 200) {
                //     console.log("res==>", response)
                //     if (response.is_first_login === 'yes') {
                //         localStorage.setItem('token', response.token);
                //         navigate('/ResetPassword')
                //     } else {
                //         navigate('/drawernav')
                //         localStorage.setItem('token', response.token);
                //     }
                // }
                // else if (response.code === 401) {
                //     showNoValidEmail("This email ID is not registered with InstaClaus");
                //     showNoValidPassword("");
                // }
                // else if (response.code === 400) {
                //     showNoValidPassword("The password you’ve entered is incorrect");
                //     showNoValidEmail("");
                // }
            } catch (e) {
                console.log("error-------->", e);
            }
        }
    }


    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
        // const [value1, setValues1] = useState({
        //     newPassword: "",
        //     showPassword: false,
        // });
    
        // const [value2, setValues2] = useState({
        //     confirmPassword: "",
        //     showPassword: false,
        // });
    
        // const validatePassword = (e) => {
        //     console.log("-->", confirmPassword, newPassword);
        //     if (newPassword === confirmPassword) {
        //         showNoValidPassword(false);
        //         resetPassword()
        //         // navigate('/Sign')
        //     } else {
        //         showNoValidPassword(true);
        //     }
        // }

    // const emailRegExp: "[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}" + "\\@" + "[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}" + "(" + "\\." + "[a-zA-Z][a-zA-Z\\-]{0,25}" + ")+"


    // const validateEmail = (e) => {
    //     console.log("eeee", e.target.value)
    //     if (e.target.value && e.target.value.match(isValidEmail)) {
    //         showNoValidEmail(false);
    //         setEmail(e.target.value)
    //     } else {
    //         showNoValidEmail(true);
    //         setEmail(e.target.value)
    //     }
    // }

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
                    src={younggirl}
                    style={{ height: '70%', width: '70%', position: 'absolute', marginLeft: '330px', marginTop: '280px' }}
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
                    Sign in to Admin Panel
                </div>

                <div style={{ fontSize: '15px', fontWeight: '400', color: '#498688', textAlign: 'center', marginBlock: '30px', width: '452px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' }, color: '#24C6BF'
                    }}
                    style={{ width: '452px' }}
                    noValidate
                    autoComplete="off"

                >
                    <Input
                        style={{ color: '#D1E1E1', width: '100%' }}
                        className={'custom-input'}
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => { setFullName(e.target.value) }}
                    />

                    <Input
                        style={{ color: '#D1E1E1', width: '100%' }}
                        className={'custom-input'}
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    {novalidemail !== "" ? <p style={{ color: 'red', width: '100%' }}>{novalidemail}</p> : null}
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


                    />
                    {noValidPassword ? <p style={{ color: 'red', width: '100%' }}> Password does not match </p> : null}
                </Box>

                {/* <div style={{ fontSize: '15px', fontWeight: '400', color: '#24C6BF', textAlign: 'right', width: '452px' }}>
                    <Link href="/ResetPassword" underline="always" style={{ color: '#24C6BF' }}>
                        {'Reset Password'}
                    </Link>
                </div> */}
                <div className='instaclaus-text-colour-light text-center' style={{ fontSize: '15px', fontWeight: '400', marginBlock: '20px', width: '480px', marginLeft: '20px' }}>
                    <Stack >
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#1B686A', width: '100%' }}
                            onClick={() => { signUp() }}
                        >Sign Up</Button>
                    </Stack>
                </div>
                {/* <div style={{ fontSize: '15px', fontWeight: '400', color: '#1B686A', textAlign: 'center' }}>
                    Not yet registered?

                    <Link href="#" underline="always" style={{ color: '#24C6BF', marginBlock: '40px', marginLeft: '10px' }}>
                        {'Signup here'}
                    </Link>
                </div> */}



            </Grid>
        </Grid>
    );
}

export default Sign;
