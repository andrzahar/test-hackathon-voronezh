import Header from "./components/Header/Header.jsx";
import './index.css';
import { RenderRoutes } from "./routes/RenderRoutes.jsx";

function App() {
  return (
    <div>
      <Header/>
      <RenderRoutes/>
    </div>
  )
}

export default App
