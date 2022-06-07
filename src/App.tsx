import Login from "./components/Login";
import StoriesList from "./components/StoriesList";
import { useSelector } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state: any) => state.login);

  return (
    <div className="app-container">
      {isLoggedIn ? <StoriesList /> : <Login />}
    </div>
  );
}

export default App;
