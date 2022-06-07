import { useDispatch } from "react-redux";
import { logout } from "../app/login/loginDuck";

export default function Menu() {
  const dispatch = useDispatch();

  return (
    <div>
      Menu
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
