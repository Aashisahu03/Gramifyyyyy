import React, { useState, useCallback } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../components/CSSFile/index.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ImportRowComponent from './ImportRowComponent';



const Preview = ({ importedData }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [key, setKey] = useState(false);
    const handleClose = () => setOpen(false);


    const style2 = {
        position: 'absolute',
        top: '52%',
        left: '50%',
        width: '546px',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        border: '0.56px solid #24C6BF',
        boxShadow: 24,
        p: 4,
        borderRadius: 3,
        // overflow:'scroll',
    };


    const container_style = {
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'flex',
        // 'justify-content' : 'space-evenly'
        'border-bottom': '1px solid #7CDDD9',
        'color': '#1B686A',
        'width': '1000px',
        'font-size': '12.8785px'
    }
    const div_style = {
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        // 'border' : '1px solid',
        'width': '150px',
        'margin': '2% 0%',
        // 'height' : '60px'
        // disp
    }



    return (
        <div>
            <Box sx={style2}>
                <Typography id="modal-modal-title" variant="h6" component="h6" style={{ marginBottom: '20px' }}>
                    Preview
                </Typography>
                <div style={{ backgroundColor: '#7CDDD950', display: 'flex' }}>
                    <ErrorOutlineIcon style={{ color: '#7CDDD9' }} />
                    <Typography style={{ color: '#7CDDD9', fontWeight: '70px' }}>
                        You’re importing a file to Instaclaus. If this preview doesn’t look right, you can edit the file that you’re trying to import.
                    </Typography>


                </div>
                <div style={{ marginTop: '20px', color: '#498688' }}>
                    You will be importing approximately 20 Employees with a total. Importing will overwrite existing products.
                </div>

                {/* table  */}

                <div style={{ overflow: 'scroll' }}>
                    <div style={container_style}>
                        <div style={div_style}>
                            NAME
                        </div>
                        <div style={div_style}>
                            JOB TITLE
                        </div>
                        <div style={div_style}>
                            MOBILE NUMBER
                        </div>
                        <div style={div_style}>
                            EMAIL ID
                        </div>
                        <div style={div_style}>
                            MONTHLY SALARY
                        </div>
                        <div style={div_style}>
                            EMPLOYEE ID
                        </div>
                    </div>
                    
                    {importedData.map((e) => (

                        <ImportRowComponent mobilenumber={e.Name} email={e['Job Title']} salary={e['Mobile number']} eid={e['Email ID']} name={e['MONTHLY SALARY']} jobtitle={e['Employee ID']} />

                    ))}





                    {/* {<ImportRowComponent mbilenumber={'898'} email={'hae'} salary={'lsjdf'} eid={'ljsl'} name={'ads'} jobtitle={'fsff'} />} */}


                </div>
                <Stack spacing={2} direction="row" className='margin-top-32'>
                    <Button
                        variant="outlined"
                        className='btnheightwidth'
                        style={{ border: '1px solid #24C6BF', color: '#24C6BF' }}
                        onClick={() => { setOpen(false) }}
                    >Cancel</Button>
                    <Button
                        variant="contained"
                        className='btnheightwidth '
                        style={{ backgroundColor: '#1B686A' }}
                        onClick={() => { setKey("PREVIEW") }}
                    >
                        Start Import
                    </Button>
                </Stack>
            </Box>

        </div>
    )
}

export default Preview