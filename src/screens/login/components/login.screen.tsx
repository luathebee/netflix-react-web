import { Grid } from "@mui/material";
import { useCallback, useEffect , useState } from "react";
//import { Button, Input, Wrapper ,Error } from "./login.styled";
import * as yup from 'yup';
import Button from "./../../../components/button/button";
import Input from "./../../../components/input/input";
import Error from "./../../../components/error/error";
import { Wrapper } from "./login.styled";

export default function Form(){
    const [data, setData] = useState({
      email: '',
      password: ''
    })
  
    const [error ,setError] = useState('')
  
    const handleChange = useCallback(
      ({ target }: any) => {
        setData( prevData => ({
            ...prevData,
            [target.name]: target.value
        }))
      },
      [setData]
    );

    const handleSend = useCallback(
      async () => {
        try{
          const schema = yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required(),
          })

          await schema.validate(data);

          setError('')

        }catch (error: any){
          setError(error.errors[0])
        };
      },
      [data]
    )
  
    useEffect(
        () => {
            console.log(data)
        },
        [data]
    )

    return(
            <Wrapper 
              container
              justifyContent="center" 
              alignContent={"center"}>
              <Grid 
                container 
                justifyContent={"center"} 
                alignContent={"center"} 
                xs={4} 
                item={true}>
                <Input 
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder='email'
                  />
                <Input 
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="password" 
                  />
                <Button 
                  onClick={handleSend}
                  >
                  Entrar
                  </Button>
                <Error>
                  {error}
                  </Error>
              </Grid>
            </Wrapper>
    )
}