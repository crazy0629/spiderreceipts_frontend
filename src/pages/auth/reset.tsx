import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ResetLayout,ResetForm, ResetButton } from "./auth.styles";
import * as Comp from "../../components";
import * as FaIcon from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { SERVER_URL } from "../../config";

export const Reset: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleReset = async () => {
    if(password === ""){
      toast.error("Please input password!")
      return;
    }
    if(passwordConfirm === ""){
      toast.error("Please input confirm-password!")
      return;
    }
    if(password !== passwordConfirm)
    {
      toast.error("Not matched!")
      return;
    }

    const response = await axios.post(SERVER_URL + "/auth/resetPassword", {token: token, email: email, password:password});

    if(response.data.success){
      toast.success(response.data.message)
      navigate("/")
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <ResetLayout>
      <ResetForm>
        <Comp.Input
          value={password}
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          prefix={<FaIcon.FaLock />}
        />
        <Comp.Input
          value={passwordConfirm}
          name="password-confirm"
          type="password"
          placeholder="Enter your password confirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          prefix={<FaIcon.FaLock />}
        />
        <ResetButton onClick={handleReset}>
          Reset Password
          </ResetButton>
      </ResetForm>
    </ResetLayout>
  );
};
