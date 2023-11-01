import { useState } from "react";
import "./scrollbar.css";
import { BrowserRouter } from "react-router-dom";
import DrawerAppBar from "./Component/DrawerAppBar";
import Routes from "./routes/routes";
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import { createTheme } from '@mui/material/styles';
function App() {
  const [count, setCount] = useState(0);
  const theme = createTheme({
    typography: {
      fontFamily: 'IBM Plex Sans Thai, sans-serif',
      fontWeight: {
        // กำหนดความหนาต่าง ๆ
        light: 300,
        regular: 400, // ค่าความหนาเริ่มต้น
        medium: 500,
        bold: 700,

      },

    },
  });



  return (
    <div style={{ backgroundColor: '#F7FAFF', width: "100vw", height: "100vh" }}>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <DrawerAppBar />
          <Routes />
          {/* <Narbar />
        <Routes>
          <Route>
            <Route path="/" element={<SignIn />} />
            <Route path="/absent" element={<Absent />} />
            <Route path="/sigup" element={<SignUp />} />
          </Route>
        </Routes> */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
