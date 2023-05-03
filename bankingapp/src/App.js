
import "./App.css";
import AllRoutes from "./Componants/Routes/AllRoutes";
import { Box } from "@chakra-ui/react";
import NavBar from "./Componants/Navigation/NavBar";

function App() {
  return (
    <Box className="App">
      <NavBar />
      
      <AllRoutes />
    </Box>
  );
}

export default App;
