import React, { useEffect, useState } from "react";
import * as Styled from "./verify.styles";
import * as Comp from "../../components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../config";
import { toast } from "react-toastify";

export const SendCode: React.FC = () => {
  const router = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search).get("email");
    if (params) {
      setEmail(params);
    } else {
      router("/signup");
    }
  }, []);

  const handleResendClick = async () => {
    setLoading(true);
    const res = await axios.post(`${SERVER_URL}/auth/resendVeriEmail`, {
      email,
    });
    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
    setLoading(false);
  };

  return (
    <Styled.VerifyPageWrapper>
      <Styled.VerifyContainer>
        <Comp.AppLogo />
        <Styled.VerifyTextWrapper>
          <h1>Verify your email</h1>
          <p>
            We've sent you a verification email to the address:{" "}
            <span>{email}</span>, please check your inbox and follow the
            instructions to verify your account
          </p>
        </Styled.VerifyTextWrapper>
        <Comp.Button
          label={loading ? "Loading..." : "Resend Verification Email"}
          disabled={loading}
          onClick={handleResendClick}
        />
        <Link to="/signup">Go Back</Link>
      </Styled.VerifyContainer>
    </Styled.VerifyPageWrapper>
  );
};
