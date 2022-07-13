import React from 'react';
import './App.css';
import { ThemeProvider , CssBaseline} from '@mui/material';
import Template from './Components/Template/TemplateComponent';
import { theme } from './Themes/main';


function App() {
  return (
    <div className="App">
     <ThemeProvider theme={theme}> 
     <CssBaseline />
     <Template />
     </ThemeProvider>
    </div>
  );
}

export default App;
