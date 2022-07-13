import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../Themes/main";


const ButtonComponent = (props: any) =>{
  return(
    <ThemeProvider theme={theme}>
      <Button {...props}>
        {props.children}
      </Button>
    </ThemeProvider>
  )
}

export default ButtonComponent;