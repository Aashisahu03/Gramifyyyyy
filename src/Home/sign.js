import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import * as APIServices from "../Services/APIServices";
import panel from '../assets/blackkk.jpg';
import Logo from '../assets/logonobackground22.png'

function Sign() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function signUp()
    {
        let item = { fullName, email, Password, confirmPassword }
        console.warn(item)

        let result= await fetch("http://localhost:8000/v1/sponsor/sponsorship/idpass", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        result= await result.json()
        console.log("result",result)
    }

    // const navigate = useNavigate();
    // const [fullName, setFullName] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [novalidemail, showNoValidEmail] = React.useState("");
    // const [noValidPassword, showNoValidPassword] = useState(false)
    // const [newPassword, setNewPassword] = useState();
    // const [confirmPassword, setConfirmPassword] = useState();

    // const [values, setValues] = React.useState({
    //     password: "",
    //     showPassword: false,
    // });

    // const validate = (e) => {
    //     console.log("check==>", values, email)
    //     const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    //     console.log(email === "")
    //     console.log(!email.match(isValidEmail))
    //     console.log(values.password === "")
    //     console.log(values.password.length < 8)
    //     console.log("eeee", e.target.value)

    //     if (email === "" || !email.match(isValidEmail)) {
    //         showNoValidEmail("Incorrect Email");
    //         showNoValidPassword("");
    //         return false
    //     }

    //     if (values.password === "" || values.password.length < 8) {
    //         showNoValidPassword("Incorrect password");
    //         showNoValidEmail("");
    //         return false
    //     }

    //     showNoValidEmail("");
    //     showNoValidPassword("");
    //     return true
    // }

    // const signUp = async () => {
    //     let data = {
    //         email: email,
    //         password: values.password,
    //     }
    //     let val = validate()
    //     if (val === true) {
    //         try {
    //             let response = await APIServices.check_user(data);
    //             if (newPassword === confirmPassword) {
    //                 showNoValidPassword(false);
    //                 // resetPassword()
    //                 // navigate('/Sign')
    //             } else {
    //                 showNoValidPassword(true);
    //             }
    //             // if (response.code === 200) {
    //             //     console.log("res==>", response)
    //             //     if (response.is_first_login === 'yes') {
    //             //         localStorage.setItem('token', response.token);
    //             //         navigate('/ResetPassword')
    //             //     } else {
    //             //         navigate('/drawernav')
    //             //         localStorage.setItem('token', response.token);
    //             //     }
    //             // }
    //             // else if (response.code === 401) {
    //             //     showNoValidEmail("This email ID is not registered with InstaClaus");
    //             //     showNoValidPassword("");
    //             // }
    //             // else if (response.code === 400) {
    //             //     showNoValidPassword("The password you’ve entered is incorrect");
    //             //     showNoValidEmail("");
    //             // }
    //         } catch (e) {
    //             console.log("error-------->", e);
    //         }
    //     }
    // }


    // const handleClickShowPassword = () => {
    //     setValues({ ...values, showPassword: !values.showPassword });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    // const handlePasswordChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };
    // // const [value1, setValues1] = useState({
    // //     newPassword: "",
    // //     showPassword: false,
    // // });

    // // const [value2, setValues2] = useState({
    // //     confirmPassword: "",
    // //     showPassword: false,
    // // });

    // // const validatePassword = (e) => {
    // //     console.log("-->", confirmPassword, newPassword);
    // //     if (newPassword === confirmPassword) {
    // //         showNoValidPassword(false);
    // //         resetPassword()
    // //         // navigate('/Sign')
    // //     } else {
    // //         showNoValidPassword(true);
    // //     }
    // // }

    // // const emailRegExp: "[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}" + "\\@" + "[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}" + "(" + "\\." + "[a-zA-Z][a-zA-Z\\-]{0,25}" + ")+"


    // // const validateEmail = (e) => {
    // //     console.log("eeee", e.target.value)
    // //     if (e.target.value && e.target.value.match(isValidEmail)) {
    // //         showNoValidEmail(false);
    // //         setEmail(e.target.value)
    // //     } else {
    // //         showNoValidEmail(true);
    // //         setEmail(e.target.value)
    // //     }
    // // }

    return (

        <Grid container style={{ height: '100vh', overflow: 'hidden' }}>
            <Grid item xs={6} sm={6} md={6} lg={6} className={'position-relative instaclaus-primary-colour-light'} >
                <img
                    alt='background'
                    src={panel}
                    style={{height:'100%', width: '100%', position: 'absolute' }}
                />
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column' }}>
                <div>
                    <img
                        src={Logo}
                        alt='lazy'
                        style={{ height: 100, width: 300, position: 'absolute', marginLeft: -150 }} />
                </div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'black', textAlign: 'center', marginBlock: '30px', width: '552px', marginTop: '150px' }}>
                    Sign Up 
                </div>

                <div style={{ fontSize: '22px', fontWeight: '500', color: 'black', textAlign: 'center', marginBlock: '30px', width: '452px' }}>
                “Just keep being true to yourself, if you're passionate about something go for it. Don't sacrifice anything, just have fun.”                </div>

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
                        style={{ width: '100%' }}
                        className={'custom-input'}
                        placeholder="Full Name"
                        type='text'
                        value={fullName}
                        onChange={(e) => { setFullName(e.target.value) }}
                    />

                    <Input
                        style={{ width: '100%' }}
                        className={'custom-input'}
                        placeholder="Email Address"
                        type='text'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    {/* {novalidemail !== "" ? <p style={{ color: 'red', width: '100%' }}>{novalidemail}</p> : null} */}
                    <Input
                        placeholder="Password"
                        type='text'
                        // type={value1.showPassword ? "text" : "password"}
                        value={Password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />

                    <Input
                        placeholder="Confirm Password"
                        // type={value2.showPassword ? "text" : "password"}
                        style={{ width: '100%' }}
                        type='text'
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}


                    />
                    {/* {noValidPassword ? <p style={{ color: 'red', width: '100%' }}> Password does not match </p> : null} */}
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
                            style={{ backgroundColor: 'black', width: '100%' }}
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
