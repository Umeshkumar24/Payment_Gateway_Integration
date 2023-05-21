import { Button, Image, Text , VStack} from '@chakra-ui/react'
import React from 'react'

const Card = ({type , amount , img , checkoutHandler}) => {
  return (
     <VStack>
        <Text>{type}</Text>
        <Image src={img} boxSize={"64"}></Image>
        <Text>₹{amount}</Text>
        <Button onClick={()=>checkoutHandler(amount)}>Pay Now</Button>
     </VStack>
  )
}

export default Card