import axios from "axios";
import React, { useEffect } from "react";
import { SERVER_URL } from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Verify: React.FC = () => {
  const router = useNavigate();
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const token = params.get("token");
    const email = params.get("email");
    console.log(token, email);
    if (token && email) {
      verifyEmail(token, email);
    }
  }, []);

  const verifyEmail = async (token: string, email: string) => {
    const res = await axios.post(`${SERVER_URL}/auth/checkEmailVerified`, {
      token,
      email,
    });
    if (res.data.success) {
      toast.success(res.data.message);
      router("/verified");
    } else {
      toast.error(res.data.message);
      router("/sendcode?email=" + email);
    }
  };

  return <div>Wait...</div>;
};
