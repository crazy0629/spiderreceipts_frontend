import React, { useState, useEffect } from "react";
import { AppLayout } from "../../layouts";
import * as Styled from "./activate.styles";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { singleActions } from "../../redux/single";

import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import axios from "axios";
import { SERVER_URL } from "../../config";

import { Modal } from "antd";

const CheckoutForm: React.FC = () => {
  const router = useNavigate();
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState({
    date: "",
    amount: "",
    currency: "",
    orderId: "",
    receiptUrl: "",
  });

  const { flag, company, address, name, email, link, size } = useSelector(
    (state: any) => state.single
  );

  const [currentUser, setCurrentUser] = useState<any>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode: any = jwtDecode(token);
      if (decode.role) {
        router("/admin");
      }
      setCurrentUser(decode);
    }
  }, []);

  return (
    <>
      <form>
        {!flag ? (
          <>
            <Styled.PaySettingWrapper>
              <div>
                <h3>Month</h3>
                <Styled.CounterWrapper>
                  <span
                    onClick={() =>
                      setCount((prev) => (prev > 1 ? prev - 1 : prev))
                    }
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
          </>
        ) : (
          <>
            <Styled.PaySettingWrapper>
              <div>
                <h3>Price</h3>
                <h2>$8.00</h2>
              </div>
            </Styled.PaySettingWrapper>
            <Styled.Divider />
          </>
        )}
        <PaymentForm
          applicationId="sq0idp-cy8kSbhWO1avSBHRgeK0IA"
          locationId="LHBS7S12SPH5C"
          cardTokenizeResponseReceived={async (token, buyer) => {
            setOpenModal(true);
            setLoading(true);

            let amount = flag ? 8 : count * 50;

            const response = await axios.post(SERVER_URL + "/payment", {
              sourceId: token.token,
              amount: amount,
              email: flag ? email : currentUser.email,
            });

            if (response.data.data.status === "COMPLETED") {
              setModalData({
                date: response.data.data.date,
                amount: response.data.data.amount,
                currency: response.data.data.currency,
                orderId: response.data.data.orderId,
                receiptUrl: response.data.data.receiptUrl,
              });

              if (flag) {
                const res = await axios.post(SERVER_URL + "/single", {
                  company: company,
                  address: address,
                  name: name,
                  email: email,
                  link: link,
                  size: size,
                });
                if (res.data.success) {
                  setLoading(false);
                  toast.success(res.data.message);
                } else {
                  setOpenModal(false);
                  toast.error(res.data.message);
                }
              } else {
                const res = await axios.post(SERVER_URL + "/activate", {
                  userId: currentUser.id,
                  amount: amount,
                });
                if (res.data.success) {
                  setLoading(false);
                  toast.success(res.data.message);
                  localStorage.setItem("token", res.data.token);
                } else {
                  setOpenModal(false);
                  toast.error(res.data.message);
                }
              }
            } else {
              setOpenModal(false);
              toast.error(response.data.data.body);
            }
          }}
        >
          <CreditCard />
        </PaymentForm>
      </form>
      <Modal
        open={openModal}
        maskClosable={false}
        onCancel={() => {
          setOpenModal(false);
          if (flag) {
            dispatch(
              singleActions.setSingle({
                flag: false,
                company: "",
                address: "",
                name: "",
                email: "",
                link: "",
                size: "",
              })
            );
            router("/singlereceipt");
          } else {
            router("/generator");
          }
        }}
        footer={null}
        className="custom-modal"
      >
        <Styled.ModalLayout>
          {loading ? (
            <Styled.Image src="assets/loading.webp" alt="No loading" />
          ) : (
            <Styled.Single>
              <Styled.Title>
                {" "}
                {flag ? "Order Completed" : "Active Completed"}{" "}
              </Styled.Title>
              <Styled.Container>
                <Styled.Row>
                  <Styled.Header>Email:</Styled.Header>
                  <Styled.Detail>
                    {flag ? email : currentUser.email}
                  </Styled.Detail>
                </Styled.Row>
                <Styled.Row>
                  <Styled.Header>Date:</Styled.Header>
                  <Styled.Detail>
                    {new Date(modalData.date).toDateString()}
                  </Styled.Detail>
                </Styled.Row>
                <Styled.Row>
                  <Styled.Header>Amount:</Styled.Header>
                  <Styled.Detail>
                    <span>{modalData.amount}</span>
                    {modalData.currency}
                  </Styled.Detail>
                </Styled.Row>
                <Styled.Row>
                  <Styled.Header>OrderID:</Styled.Header>
                  <Styled.Detail>{modalData.orderId}</Styled.Detail>
                </Styled.Row>
                <Styled.Row>
                  <Styled.Link href={modalData.receiptUrl} target="_blank">
                    View Transaction
                  </Styled.Link>
                </Styled.Row>
              </Styled.Container>
            </Styled.Single>
          )}
        </Styled.ModalLayout>
      </Modal>
    </>
  );
};

export const Payment: React.FC = () => {
  const dispatch = useDispatch();
  const { flag } = useSelector((state: any) => state.single);

  const router = useNavigate();
  return (
    <AppLayout>
      <Styled.ActivateWrapper>
        <div
          onClick={() => {
            dispatch(
              singleActions.setSingle({
                flag: false,
                company: "",
                address: "",
                name: "",
                email: "",
                link: "",
                size: "",
              })
            );
            router(flag ? "/singlereceipt" : "/generator");
          }}
        >
          <FaArrowLeftLong /> Back
        </div>
        <div>
          <CheckoutForm />
          <Styled.TextDesc>
            All payments are handeled by&nbsp;
            <a href="https://squareup.com" target="_blank" rel="noreferrer">
              square
            </a>
            .
          </Styled.TextDesc>
        </div>
      </Styled.ActivateWrapper>
    </AppLayout>
  );
};
