import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[8.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
      <LoginContent />
      <div className="mt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
        <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
          <LoginForm />
          <hr className=" border-gray-300 my-4" />
          <div className=" flex justify-center">
            Don&#39;t have an account?
            <Link to="/register">
              <div className=" text-blue-700">Sign up</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
