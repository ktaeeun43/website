import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
background-color: lightcoral;
`;

const Wrapper = styled.div`
width: 100%;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`;

const Title = styled.h1`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
font-weight: bold;
text-decoration: underline crimson;
@media only screen and (max-width: 480px){
    margin: 20px;
}
`;

const Form = styled.form`
height: 250px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px){
    flex-direction: column;
}
`;

const LeftForm = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media only screen and (max-width: 480px){
    height: 50%;
    margin-top: 5px;
    margin-left: 0;
}
`;

const RightForm = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 20px;
@media only screen and (max-width: 480px){
    height: 50%;
    margin-left: 0;
}
`;


const Input = styled.input`
width: 200px;
padding: 20px;
@media only screen and (max-width: 480px){
    padding: 5px;
}
`; 

const Button = styled.button`
border: none;
padding: 15px;
background-color: darkblue;
color: white;
font-size: 15px;
border-radius: 10px;
margin-top: 20px;
cursor: pointer;

@media only screen and (max-width: 480px){
    padding: 5px;
    font-size: 12px;
}
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;

const ErrorMessage = styled.p`
font-size: 12px;
color: red;
text-align: center;
`;

const RegisterMessage = styled.span`
margin-top: 20px;
font-size: 14px;
text-align: center;
`;

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })
  const [err, setError] = useState(null);
  const navigator = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
    await axios.post("/auth/register", inputs);
    navigator("/login")
    }catch(err) {
      setError(err.response.data);
    }
  }

  return (
    <Container>
        <Wrapper>
            <Title>Register</Title>
            <Form>
                <LeftForm>
                    <Input onChange={handleChange} type={"text"} placeholder='Your Name'/>
                    <Input onChange={handleChange} type={"text"} placeholder='Your Email'/>
                    <Input onChange={handleChange} type={"password"} placeholder='Your Password'/>
                </LeftForm>
                </Form>
                <ButtonContainer>
                    <Button onClick={handleSubmit}>Register</Button>
                    {err && <ErrorMessage>{err}</ErrorMessage>}
                </ButtonContainer>
                    <RegisterMessage>Do you have an account? <Link to="/login">Login</Link>
                    </RegisterMessage>

        </Wrapper>
    </Container>
  )
}

export default Register