import Header from "./components/Header";
import { Outlet } from "react-router";
function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
