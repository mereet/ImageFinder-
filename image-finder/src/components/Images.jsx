import { Grid } from '@mui/material';

import Image from './Image';


const Images = ({data}) => {
    return (
        <Grid container>
            {
                data.map(image => (
                    <Grid xs={3} item>
                        <Image image={image} />
                    </Grid>
                ))
            }
        </Grid>



        )
    }
    
    export default Images;