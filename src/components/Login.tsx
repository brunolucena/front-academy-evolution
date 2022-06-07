import { useDispatch } from "react-redux";
import { login } from "../app/login/loginDuck";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <input placeholder="email" type="email" />
      <input placeholder="password" type="password" />
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
}
