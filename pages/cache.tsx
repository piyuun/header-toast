import axios from "axios"
import { useState } from "react"
import styled from "styled-components"


const Container = styled.div`
display: flex;
flex-direction: column;
`
const Input = styled.input`
border-radius: 4px;
`
const Button = styled.button`
border-radius: 4px;
`
const Text = styled.p`
font-size: 18px;
`

export default function Cache (){
  
  const [text, setText] = useState('');
  const [res, setRes] = useState('');
  const handleChange = (e: any) => {
    setText(e.target.value);
  }
  const handleSubmit = () => {
    axios
      .post('https://header-toast.vercel.app/api', { data: text })
      .then((res) => {
        setRes(res.data.message);
      });
  }

  return (
    <Container>
      <Input onChange={handleChange} />
      <Button onClick={handleSubmit}>Send</Button>
      <Text>{res}</Text>
    </Container>
  )
}