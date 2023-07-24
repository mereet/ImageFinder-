import {Box, InputBase,styled} from '@mui/material';

const Component = styled(Box)`
    background: #F6F6F6;
    & > div {
        margin: 10px;
    }
`;

const BreadCrumb = ({setText,setCount}) =>
{
    return(
<Component>
<InputBase placeholder='Search images'
onChange={(e)=>setText(e.target.value)}
/>
<InputBase placeholder= 'Number of images'
type='number'
onChange={(e)=>setCount(e.target.value)}/>

</Component>
    )
}



export default BreadCrumb;