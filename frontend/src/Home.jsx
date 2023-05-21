import React, {useState} from 'react'
import Alert from './Alert';
import { Box, Stack ,Button , Text} from "@chakra-ui/react"
import Card from './Card'
import Navbar from './NavBar'
import Footer from './Footer'
import axios from "axios"
//import Razorpay from "razorpay"

const Home = () => {

  const checkoutHandler = async (amount) => {

    let { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey");

    if (key === null) {
      key = "rzp_test_bzgTuBP3UJLvig";
    };

    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
      amount
    })

    var options = {
      "key": key,
      "amount": order.amount,
      "currency": "INR",
      "name": "Cimit",
      "description": "Test Transaction",
      "image": "https://th.bing.com/th/id/OIP.vXLNo2m1x4yMGpzfwCLPfwAAAA?pid=ImgDet&rs=1",
      "order_id": order.id,
      "callback_url": "http://localhost:4000/api/paymentVerification",
      "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#121212"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  }
  
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState('null');

  const showAlert = (message , type) =>{
    setAlert({
        msg : message,
        type : type
    })
    setTimeout(() =>{
        setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
      if(mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled" , "success");
      }else{
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark Mode has been enabled" , "success");
      }
  }
  return (
    // <Box>
    //   <Stack h={"100vh"} justifyContent="center" alignItems="center" direction={["column", "row"]}>
    //     <Card amount={50000} img={"https://th.bing.com/th/id/OIP.vOaXez1YFRiDBf0lsV2FOwHaGY?w=228&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"} checkoutHandler={checkoutHandler} />
    //     <Card amount={75000} img={"https://th.bing.com/th?id=OIP.uj21rdWJCNqZDaOXrlqAZwHaGX&w=269&h=231&c=8&rs=1&qlt=30&o=6&dpr=1.3&pid=3.1&rm=2"} checkoutHandler={checkoutHandler} />
    //     <Card amount={4500} img={"https://th.bing.com/th/id/OIP.EXxd2SE2Fr4vv1bXJbuSuAHaHM?w=208&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"} checkoutHandler={checkoutHandler} />
    //   </Stack>
    // </Box>
    <Box>
      {/* <Alert alert = {alert}/> */}
      <Navbar title="The Sparks Foundation Bank" aboutText = "aboutText" mode = {mode} toggleMode = {toggleMode}/>
      <Stack h={"100vh"} justifyContent="center" alignItems="center" direction={["column", "row"]}>
         <Card  amount={5000} img={"https://th.bing.com/th/id/OIP.QxCoyXvvKMFoYTbZ1uG6eAHaD8?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} checkoutHandler={checkoutHandler} />
         <Card amount={7500} img={"https://th.bing.com/th/id/OIP.dZrPbnwKkFWxRmR_O4zqjgHaKa?w=145&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"} checkoutHandler={checkoutHandler} />
         <Card amount={4500} img={"https://th.bing.com/th/id/OIP.SWcbmiIqOehoEv6uKtL-UgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} checkoutHandler={checkoutHandler} />
       </Stack>
       <Footer />
    </Box>
  )
}

export default Home