import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as Styled from "./log.styles";
import * as FiIcon from "react-icons/fi";
import * as Comp from "../../components";

import jwtDecode from "jwt-decode";

export const LogButton: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [currentUser, setCurrentUser] = useState<any>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode: any = jwtDecode(token);
      setCurrentUser(decode);
    }
  }, []);

  const handleActivate = () => {
    navigate("/payment");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return pathname !== "/payment" ? (
    <>
      {currentUser ? (
        <Styled.LogButtonWrapper>
          {!currentUser.role && !currentUser.isActive && (
            <>
              <Styled.LogButton
                onClick={() => {
                  navigate("/singlereceipt");
                }}
                className="changePage"
              >
                <span>Single Receipt</span>
                <FiIcon.FiShoppingCart />
              </Styled.LogButton>
              <Styled.LogButton onClick={handleActivate}>
                <span>Activate</span>
                <FiIcon.FiShoppingCart />
              </Styled.LogButton>
            </>
          )}
          <Styled.LogButton onClick={handleLogout} className="logout">
            <span>Log out</span>
            <FiIcon.FiLogOut />
          </Styled.LogButton>
        </Styled.LogButtonWrapper>
      ) : (
        <Styled.HomeHeaderButton>
          <Comp.Button
            label="LogIn"
            onClick={() => {
              navigate("/signin");
            }}
            className="log-button"
          />
          <Comp.Button
            label="Register"
            onClick={() => {
              navigate("/signup");
            }}
            className="log-button"
          />
        </Styled.HomeHeaderButton>
      )}
    </>
  ) : (
    <></>
  );
};
