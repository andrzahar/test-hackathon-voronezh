import {useDispatch} from "react-redux";
import {store} from "./store/index.js";
import Authorization from "./components/Authorization/Authorization.jsx";
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import './index.css';
import MainContainer from "./components/Main/MainContainer.js";

function App() {
    // console.log(store.getState())
  return (
    <div>
        <Header/>
        <Routes>
            <Route path={'/'} element={<Authorization/>}/>
            <Route path={'/main'} element={<MainContainer/>}/>
        </Routes>
    </div>
  )
}

export default App
