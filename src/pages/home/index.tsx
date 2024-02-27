import React, { useState } from "react";
import * as Styled from "./home.styles";
import * as Comp from "../../components";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaHandPointRight,
  FaRocket,
  FaTrophy,
  FaTruck,
} from "react-icons/fa6";

import { AppFooter } from "../../layouts/appLayout/AppFooter";

import { Modal } from "antd";
import { SERVER_URL } from "../../config";
import axios from "axios";
import { toast } from "react-toastify";


export const Home: React.FC = () => {
  const router = useNavigate();
  const [openModal, setOpenModal] = useState(true);

  const [email, setEmail] = useState("");

  const ModalSubmit = async (e: any) => {
    e.preventDefault();
    setOpenModal(false);
    
    const response = await axios.get(SERVER_URL + `/addmember/${email}`);
    console.log(response)
    if(response.data.success){
      toast.success("Successfully Added.");
    } else {
      toast.info(response.data.error.response.text);
    }
  };

  return (
    <>
      <Styled.HomeWrapper>
        <Styled.HomeHeaderWrapper>
          <Comp.AppLogo />
          <Styled.HomeHeaderButton>
            <Styled.LinkBox>
              <Styled.LinkItem to="/singlereceipt">
                Single Receipt
              </Styled.LinkItem>
              <Styled.LinkItem
                to="https://t.me/+ivUhAc83iO8zMjkx"
                target="_blank"
              >
                Testimonials
              </Styled.LinkItem>
              <Styled.LinkItem to="/contact">Connect us</Styled.LinkItem>
              <Styled.LinkItem to="/t-o-s">T.O.S</Styled.LinkItem>
            </Styled.LinkBox>

            <Styled.AuthButtonBox>
              <Comp.Button
                label="Login"
                onClick={() => router("/signin")}
                className="log-button"
              />
              <Comp.Button
                label="Register"
                onClick={() => router("/signup")}
                className="log-button"
              />
            </Styled.AuthButtonBox>
          </Styled.HomeHeaderButton>
        </Styled.HomeHeaderWrapper>

        <Styled.HomeBodyWrapper>
          <Styled.HomeVideoWrapper>
            <video src="/assets/2023_GENERATOR.mp4" loop autoPlay muted></video>
          </Styled.HomeVideoWrapper>
          <Styled.HomeAnouncementWrapper>
            <h1>2023 Generator announcment!</h1>
            <p>
              The team at Spyder is proud to announce the release of their all
              new receipt generator. The team has been hard at work for weeks on
              end to deliver the best possible service to our valued customers .
              Check out our T.O.S to learn more or to buy the generator visit
              the link down below!
            </p>
            <Comp.Button
              label="spyderreceipts.com"
              onClick={() => {}}
              className="home-button"
            />
            <Styled.AnounceGridWrapper>
              <div>
                <span>
                  <FaTrophy size={30} />
                </span>
                <p>24 hour or less shipping times</p>
              </div>
              <div>
                <span>
                  <FaTruck size={30} />
                </span>
                <p>24 hour or less shipping times</p>
              </div>
              <div>
                <span>
                  <FaRocket size={30} />
                </span>
                <p>24/7 support team</p>
              </div>
              <div>
                <span>
                  <FaHandPointRight size={30} />
                </span>
                <p>99.9% satisfaction guarantee</p>
              </div>
            </Styled.AnounceGridWrapper>
          </Styled.HomeAnouncementWrapper>
          <Styled.HomeSubscribeWrapper>
            <div>
              <h3>Quick Links</h3>
              <p>
                <a
                  href="https://t.me/+ivUhAc83iO8zMjkx"
                  target="_blank"
                  rel="noreferrer"
                >
                  Testimonials
                </a>
                <Link to="/contact" target="_blank">
                  Connect with us
                </Link>
                <Link to="/t-o-s" target="_blank">
                  T.O.S
                </Link>
              </p>
            </div>
            <div>
              <h3>Subscribe to our newsletter</h3>
              <p>
                Stay up to date with the latest announcements and news from the
                team at spyder!
              </p>
              <Styled.SubscribeInputWrapper>
                <input onChange={() => {}} />
                <button>
                  <FaEnvelope />
                </button>
              </Styled.SubscribeInputWrapper>
            </div>
          </Styled.HomeSubscribeWrapper>
        </Styled.HomeBodyWrapper>
        <AppFooter />
      </Styled.HomeWrapper>
      <Modal
        open={openModal}
        maskClosable={false}
        onCancel={() => {
          setOpenModal(false);
        }}
        footer={null}
        className="custom-modal"
      >
        <Styled.ModalContainer>
          <Styled.ModalLayout onSubmit={ModalSubmit}>
            <img src="assets/app_logo_light.png" alt="" />
            <Styled.ModalTitle>
              RECEIVE EARLY ACCESS TO NEW RELEASES AND ITEM UPDATES
            </Styled.ModalTitle>
            <Styled.ModalInput
              placeholder="Please input your email."
              type={"email"}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Styled.ModalButton type="submit" />
          </Styled.ModalLayout>
        </Styled.ModalContainer>
      </Modal>
    </>
  );
};
