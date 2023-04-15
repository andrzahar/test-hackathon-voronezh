import {useDispatch} from "react-redux";
import {store} from "./store/index.js";
import Authorization from "./components/Authorization/Authorization.jsx";

function App() {
    // console.log(store.getState())
  return (
    <div>
      <Authorization/>
    </div>
  )
}

export default App
