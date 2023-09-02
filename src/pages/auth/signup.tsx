import React, { useState } from "react";
import { toast } from "react-toastify";
import * as FaIcon from "react-icons/fa";
import * as Styled from "./auth.styles";
import * as Comp from "../../components";
import type * as T from "../../types/forms";
import axios from "axios";
import { SERVER_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export const SignUpPage: React.FC = () => {
  const router = useNavigate();
  const [form, setForm] = useState<T.ISignUpFormProps>({
    email: "",
    password: "",
    rPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    if (!form.email || !form.password) {
      toast.error("Invalid your informations!");
    } else if (!form.rPassword) {
      toast.error("Enter confirm password!");
    } else if (form.password !== form.rPassword) {
      toast.error("Incorrect confirm password!");
    } else {
      const res = await axios.post(`${SERVER_URL}/auth/signup`, {
        email: form.email,
        password: form.password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        router(`/signin`);
        // router(`/sendcode?email=${form.email}`);
      } else {
        toast.error(res.data.message);
      }
    }
  };

  return (
    <Styled.AuthWrapper>
      <Comp.AppLogo />
      <Styled.AuthContainer>
        <Comp.AuthTitle title="Sign Up" subtitle="Create one account." />
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
          <Comp.Input
            value={form.rPassword}
            name="rPassword"
            type="password"
            placeholder="Comfirm your password"
            onChange={handleInputChange}
            prefix={<FaIcon.FaLock />}
          />
          <Comp.Button label="Sign Up" onClick={handleSignup} />
        </Styled.AuthFormWrapper>
        <Comp.AuthNavigate
          text="Already have one?"
          navLink="/signin"
          navText="Sign In"
        />
      </Styled.AuthContainer>
    </Styled.AuthWrapper>
  );
};
