import {  Snackbar, Alert } from '@mui/material';



const SnackBar=({open,setOpen})=>{
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }




    return(
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
<Alert severity ="info" onClose={handleClose}>
Number of Images should be between 3 and 200

</Alert>
        </Snackbar>
    )
}
export default SnackBar;