import './App.css';
import BookCardM from './Components/Molecules/Card/BookCard';
import ButtonAppBar from './Components/AppBar/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';



let theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className='AppBar'>
      <ButtonAppBar/>
    </div>
    </ThemeProvider>
    <div className="App">
      <BookCardM></BookCardM>
    </div>
   
    </>
 
  );
}

export default App;
