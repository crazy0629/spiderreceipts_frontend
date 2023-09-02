import React, { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import * as Styled from "./receiptForm.styles";
import * as Comp from "../../components";
import type { IReceiptFormProps } from "../../types";
import { formItems } from "./data";
import axios from "axios";
import { SERVER_URL } from "../../config";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export const ReceiptForm: React.FC<IReceiptFormProps> = ({
  fields,
  logo,
  onBack,
}) => {
  const [form, setForm] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const [currentUser, setCurrentUser] = useState<any>({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode: any = jwtDecode(token);
      setCurrentUser(decode);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!loading) {
      const validArr = fields.map((item) => {
        return new Object(form).hasOwnProperty(item)
          ? form[item] !== ""
          : false;
      });

      if (validArr.filter((f) => !f).length === 0) {
        console.log(form);
        setLoading(true);
        const res = await axios.post(`${SERVER_URL}/sendEmail`, {
          form: form,
          userId: currentUser.id,
          type: logo.toLowerCase(),
          title: logo,
        });
        if (res.data.success) toast.success(res.data.message);
        else toast.error(res.data.message);
        setLoading(false);
      }
    } else {
    }
  };
  return (
    <Styled.ReceiptFormWrapper>
      <Styled.BackButton onClick={onBack}>
        <FaArrowLeftLong /> <span>Back</span>
      </Styled.BackButton>
      <img src={`/assets/logos/${logo}.png`} alt="" draggable={false} />
      <h1>{logo} Receipt</h1>
      <Styled.ReceiptFormContainer onSubmit={handleSubmit}>
        {fields.map((item, key) => {
          const field = formItems.filter((f) => f.name === item)[0];
          return field.formType === "input" ? (
            <Comp.Input
              required
              onChange={handleInputChange}
              value={
                new Object(form).hasOwnProperty(field.name)
                  ? form[field.name]
                  : ""
              }
              key={key}
              {...field}
            />
          ) : (
            <Comp.Select
              required
              {...field}
              onChange={handleSelectChange}
              options={field.options ? field.options : []}
              value={
                new Object(form).hasOwnProperty(field.name)
                  ? form[field.name]
                  : ""
              }
            />
          );
        })}
        <Comp.Button
          disabled={loading}
          label={loading ? "Loading.." : "Submit"}
          onClick={() => {}}
          itemType="submit"
        />
      </Styled.ReceiptFormContainer>
    </Styled.ReceiptFormWrapper>
  );
};
