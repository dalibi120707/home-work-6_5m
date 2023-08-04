import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./components/hoc/LayOut";
import MainPage from "./pages/MainPage/MainPage";
import Bucket from "./pages/Bucket/Bucket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/bucket" element={<Bucket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
