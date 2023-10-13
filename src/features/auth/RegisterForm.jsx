import Joi from "joi";
import { useState } from "react";
import { toast } from "react-toastify";
import RegisterInput from "./RegisterInput";
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";

const registerSchema = Joi.object({
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).required(),
  fullName: Joi.string().trim().required(),
  userName: Joi.string().trim().required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    emailOrMobile: "",
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch((err) => {
      toast.error(err.response?.data.message);
    });
  };
  return (
    <form
      className=" grid grid-cols-2 gap-x-3 gap-y-4"
      onSubmit={handleSubmitForm}
    >
      <div>
        <RegisterInput
          placeholder="Mobile Number or Email"
          value={input.emailOrMobile}
          onChange={handleChangeInput}
          name="emailOrMobile"
          hasError={error.emailOrMobile}
        />
        {error.emailOrMobile && (
          <InputErrorMessage message={error.emailOrMobile} />
        )}
      </div>

      <div>
        <RegisterInput
          placeholder="Full Name"
          value={input.fullName}
          onChange={handleChangeInput}
          name="fullName"
          hasError={error.fullName}
        />
        {error.fullName && <InputErrorMessage message={error.fullName} />}
      </div>

      <div>
        <RegisterInput
          placeholder="Username"
          value={input.userName}
          onChange={handleChangeInput}
          name="userName"
          hasError={error.userName}
        />
        {error.userName && <InputErrorMessage message={error.userName} />}
      </div>

      <div>
        <RegisterInput
          placeholder="Password"
          type="password"
          value={input.password}
          onChange={handleChangeInput}
          name="password"
          hasError={error.password}
        />
        {error.password && <InputErrorMessage message={error.password} />}
      </div>

      <div>
        <RegisterInput
          placeholder="Confirm Password"
          type="password"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          name="confirmPassword"
          hasError={error.confirmPassword}
        />
        {error.confirmPassword && (
          <InputErrorMessage message={error.confirmPassword} />
        )}
      </div>

      <div className=" mx-auto col-span-full">
        <button className=" bg-green-500 rounded-lg text-white px-3 py-1.5 text-lg font-bold min-w-[10rem]">
          Sign up
        </button>
      </div>
    </form>
  );
}
