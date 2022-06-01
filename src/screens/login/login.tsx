import { Grid } from "@mui/material";
import { useCallback } from "react";
import { Wrapper } from "./components/login.styled";

export default function Login() {
  const handleChange = useCallback(
    //callback
    (event: any) => {
      console.log(event.name, event.value);
    },
    //deps
    []
  );


  return (
    <Wrapper container justifyContent="center" alignContent={"center"}>
      <Grid container justifyContent={"center"} alignContent={"center"} xs={4}>
        <input type="text" onChange={handleChange} />
      </Grid>
    </Wrapper>
  );
}
