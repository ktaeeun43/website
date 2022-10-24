import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../context/authContext';

const Container = styled.div`
display: flex;
justify-content: center;
`;

const Wrapper = styled.div`
width: 100%;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
background-color: white;
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


const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })
    const [err, setError] = useState(null);

    const navigate  = useNavigate();

    // const { login } = useContext(AuthContext)
    
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // await login(inputs)
            navigate("/home");
        } catch(err) {
            setError(err.response.data);
        }
    }


  return (
    <Container>
        <Wrapper>
            <Title>Agency</Title>
            <Form>
                <LeftForm>
                    <Input onChange={handleChange} type={"input"} placeholder='Your Name'/>
                    <Input onChange={handleChange} type={"input"} placeholder='Your Email'/>
                    <Input onChange={handleChange} type={"password"} placeholder='Your Password'/>
                </LeftForm>
                </Form>
                <ButtonContainer>
                    <Button onClick={handleSubmit}>Login</Button>
                </ButtonContainer>

        </Wrapper>
    </Container>
  )
}

export default Login