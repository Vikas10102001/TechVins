import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Alert from "./utils/shared/component/Alert";
import { useSelector } from "react-redux";

function App() {
  const alertData = useSelector((state) => {
    return state.alert.data;
  });
  console.log(alertData);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {alertData && <Alert data={alertData} />}
    </>
  );
}

export default App;
