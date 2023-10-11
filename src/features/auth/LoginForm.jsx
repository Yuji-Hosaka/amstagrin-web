import { useState } from "react";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

export default function LoginForm() {
  const [input, setInput] = useState({
    emailOrMobile: "",
    password: "",
  });
  return (
    <form className=" grid gap-4">
      <LoginInput
        placeholder="Phone number or email"
        value={input.emailOrMobile}
        onChange={(e) => setInput({ ...input, emailOrMobile: e.target.value })}
      />
      <LoginInput
        type="password"
        placeholder="Password"
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />
      <LoginButton/>
    </form>
  );
}
