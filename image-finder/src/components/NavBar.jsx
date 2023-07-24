
import { AppBar, Toolbar,Typography ,styled } from '@mui/material';
import { Collections } from '@mui/icons-material';


const Header = styled(AppBar)`
    background: #445A6F;
`;


const NavBar = () => {
    return (
        <Header position='satatic'>
<Toolbar>
    <Collections/>
   <Typography variant="h5">
    Image Finder
    </Typography>
</Toolbar>
        </Header>
        )
    }
    
    export default NavBar;