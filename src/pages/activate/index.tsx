import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { StripeCardElement, loadStripe } from "@stripe/stripe-js";
import { AppLayout } from "../../layouts";
import * as Styled from "./activate.styles";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../config";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useTheme } from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";

const CheckoutForm: React.FC = () => {
  const router = useNavigate();
  const theme = useTheme();

  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState(1);

  const [currentUser, setCurrentUser] = useState<any>({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router("/signin");
    } else {
      const decode: any = jwtDecode(token);
      if (decode.role) {
        router("/admin");
      }
      setCurrentUser(decode);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      // setError(error.message);
      setProcessing(false);
      return;
    }

    const res = await axios.post(`${SERVER_URL}/charge`, {
      userId: currentUser.id,
      month: count,
      money: 50 * count,
      paymentMethod: paymentMethod.id,
    });

    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);
      router("/");
    } else {
      toast.error(res.data.message);
    }
    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Styled.PaySettingWrapper>
        <div>
          <h3>Month</h3>
          <Styled.CounterWrapper>
            <span
              onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))}
            >
              -
            </span>
            <input
              value={count}
              onChange={(e) =>
                !isNaN(Number(e.target.value)) &&
                Number(e.target.value) > 0 &&
                setCount(Number(e.target.value))
              }
            />
            <span onClick={() => setCount((prev) => prev + 1)}>+</span>
          </Styled.CounterWrapper>
        </div>
        <div>
          <h3>Price</h3>
          <h2>${50 * count}.00</h2>
        </div>
      </Styled.PaySettingWrapper>
      <Styled.Divider />
      <CardElement
        className="card-input"
        options={{ style: { base: { color: theme.text } } }}
      />
      <Styled.PayButton type="submit" disabled={!stripe || processing}>
        Pay
      </Styled.PayButton>
      {error && <div>{error}</div>}
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_live_51LSSaEK0UiMUkMCCDTpfdvJjiQgOO5q5CghTP2oMp8HpE8nC85xkH7j1yo6wcu3OYka1NsjXkbUfjQGt3YjP46Fi001h3sy6Wt"
);

export const Activate: React.FC = () => {
  const router = useNavigate();
  return (
    <AppLayout>
      <Styled.ActivateWrapper>
        <span onClick={() => router("/")}>
          <FaArrowLeftLong /> Back
        </span>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </Styled.ActivateWrapper>
    </AppLayout>
  );
};
