import { useEffect, useState } from 'react';


import NavBar from './components/NavBar';
import BreadCrumb from './components/BreadCrumb';
import Images from './components/Images';
import {getImages} from './services/api';
import  SnackBar  from './components/SnackBar';

function App() {

const[open,setOpen]=useState(false);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(5);
   useEffect(()=>{
if(count<3||count>200){
  setOpen(true);
  return;
}
setOpen(false);
const getData =async()=>{
const res= await getImages(text,count);
setData(res.data.hits);
}
getData();
   },[text,count])
  
  
  
  return (
    <div >
      <NavBar/>
      <BreadCrumb setText={setText} setCount={setCount}/>
      <Images data={data}/>
      <SnackBar open={open} setOpen={setOpen} />

    </div>
  );
}

export default App;
