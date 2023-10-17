import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import DrawerAppBar from "./Component/DrawerAppBar";
import Routes from "./routes/routes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
