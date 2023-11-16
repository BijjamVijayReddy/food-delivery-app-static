import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { interntTxt } from '../../data/Transaltion';
import { useSelector } from 'react-redux';

const Internet = () => {
    const lan = useSelector((state) => state.cart.language);
    const [isOpen, setIsOpen] = useState(false)
    const [isStatus, setIsStatus] = useState(() => {
        if (navigator.onLine) {
            return true
        } else {
            return false
        }
    })

    // React Title function.
    

    React.useEffect(() => {
        setIsOpen(true)
        window.ononline = () => {
            setIsStatus(true)
        };
        window.onoffline = () => {
            console.log("You are currently offline.");
            setIsStatus(false)
        }
    }, [isStatus]);

   

   
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
    };

    return (
        <div >
            {isStatus ? (<Snackbar open={isOpen} sx={{ width: "90%", margin: "0 auto" }} autoHideDuration={4000} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }} onClose={handleClose}>
                <Alert variant="filled" severity="success" onClose={handleClose}>
                    <p style={{fontSize:"12px"}}> {interntTxt[lan].online}</p>
                </Alert>
            </Snackbar>) : (<Snackbar open={isOpen} sx={{ maxWidth: "100%", margin: "0 auto" }} autoHideDuration={4000} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }} onClose={handleClose}>
                <Alert variant="filled" severity="error" onClose={handleClose}>
                   <p style={{fontSize:"7px"}}>{interntTxt[lan].offline}</p> 
                </Alert>
            </Snackbar>)}

        </div>
    )
}

export default Internet