import React, { useState } from "react";
import axios from "axios";
import * as FaIcon from "react-icons/fa";
import * as Styled from "./auth.styles";
import * as Comp from "../../components";
import type * as T from "../../types/forms";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../config";
import jwtDecode from "jwt-decode";

export const SignIn: React.FC = () => {
  const router = useNavigate();
  const [form, setForm] = useState<T.ISignInFormProps>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignIn = async () => {
    if (!form.email || !form.password) {
      toast.error("Invalid your informations!");
    } else {
      const res = await axios.post(`${SERVER_URL}/auth/signin`, {
        email: form.email,
        password: form.password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        const decode: any = jwtDecode(res.data.token);
        decode.role ? router("/admin") : router("/generator");
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleForgot = async () => {
    if (form.email === "") {
      toast.error("Please input email!");
      return;
    }
    const res = await axios.post(SERVER_URL + "/auth/forgotPassword", {email: form.email});
    if(res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message)
    }
  }

  return (
    <Styled.AuthWrapper>
      <Comp.AppLogo />
      <Styled.AuthContainer>
        <Comp.AuthTitle
          title="Sign In"
          subtitle="Welcome back! Please enter your details."
        />
        <Styled.AuthFormWrapper>
          <Comp.Input
            value={form.email}
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            prefix={<FaIcon.FaUser />}
          />
          <Comp.Input
            value={form.password}
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            prefix={<FaIcon.FaLock />}
          />
          <Comp.Button label="Sign In" onClick={handleSignIn} />
        </Styled.AuthFormWrapper>

        <Styled.Forgot onClick={handleForgot}>
          Forgot Password?
        </Styled.Forgot>

        <Comp.AuthNavigate
          text="Don't have an account?"
          navLink="/signup"
          navText="Sign up"
        />
      </Styled.AuthContainer>
    </Styled.AuthWrapper>
  );
};
