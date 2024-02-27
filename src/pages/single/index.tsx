import React, { useEffect, useState } from "react";

import { AppLayout } from "../../layouts";

import {
  Layout,
  ImageContainer,
  Image,
  FormContainer,
  Select,
  Input,
  SelectContainer,
  SelectLabel,
  InputContainer,
  InputLabel,
  ItemContainer,
  SubmitButton,
} from "./styled";

import { logos } from "../main/data";
import { toast } from "react-toastify";

import { useDispatch } from 'react-redux';
import { singleActions } from '../../redux/single';
import { useNavigate } from "react-router-dom";

export const Single: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logo, setLogo] = useState("Apple");

  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [size, setSize] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setDate(formattedDate);
  }, []);

  const handleSubmit = () => {
    if(address === "")
    {
      toast.error("Please input address");
      return;
    }
    if(name === "")
    {
      toast.error("Please input name");
      return;
    }
    if(email === "")
    {
      toast.error("Please input email");
      return;
    }
    if(link === "")
    {
      toast.error("Please input link");
      return;
    }
    if(size === "")
    {
      toast.error("Please input size");
      return;
    }
    if(date === "")
    {
      toast.error("Please input Date");
      return;
    }

    dispatch(singleActions.setSingle({
      flag: true,
      company : logo,
      address : address,
      name: name,
      email: email,
      link: link,
      size: size    
    }));

    navigate("/payment");    
  }

  return (
    <AppLayout>
      <Layout>
        <ImageContainer>
          <Image src={`assets/logos/${logo}.png`} alt="No Image" />
        </ImageContainer>
        <FormContainer>
          <ItemContainer>
            <SelectLabel>Company</SelectLabel>
            <SelectContainer>
              <Select
                onChange={(e) => {
                  setLogo(e.target.value);
                }}
              >
                {logos.map((item, key) => (
                  <option key={key} value={item.key}>
                    {item.key}
                  </option>
                ))}
              </Select>
            </SelectContainer>
          </ItemContainer>

          <ItemContainer>
            <InputLabel>Address: </InputLabel>
            <InputContainer>
              <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </InputContainer>
          </ItemContainer>
          <ItemContainer>
            <InputLabel>Name:</InputLabel>
            <InputContainer>
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </InputContainer>
          </ItemContainer>
          <ItemContainer>
            <InputLabel>Email</InputLabel>
            <InputContainer>
              <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </InputContainer>
          </ItemContainer>
          <ItemContainer>
            <InputLabel>Link</InputLabel>
            <InputContainer>
              <Input placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)}/>
            </InputContainer>
          </ItemContainer>
          <ItemContainer>
            <InputLabel>Size</InputLabel>
            <InputContainer>
              <Input placeholder="Size" value={size} onChange={(e) => setSize(e.target.value)} />
            </InputContainer>
          </ItemContainer>
          <ItemContainer>
            <InputLabel>Purchase Date</InputLabel>
            <InputContainer>
              <Input placeholder="Size" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </InputContainer>
          </ItemContainer>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </FormContainer>
      </Layout>
    </AppLayout>
  );
};
