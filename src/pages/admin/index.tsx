import React, { useEffect, useState } from "react";
import { AppLayout } from "../../layouts";
import * as Styled from "./admin.styles";
import axios from "axios";
import { SERVER_URL } from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const Admin: React.FC = () => {
  const router = useNavigate();
  const [userData, setUserData] = useState<any>([]);
  const [edit, setEdit] = useState(-1);
  const [editForm, setEditForm] = useState({ isActive: false, expireDate: "" });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router("/signin");
    } else {
      const decode: any = jwtDecode(token);
      if (!decode.role) {
        router("/");
      }
    }
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.post(`${SERVER_URL}/admin/getAllUser`);
    setUserData(res.data.models);
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleEditSave = async (userId: string) => {
    const res = await axios.post(`${SERVER_URL}/admin/editUser`, {
      userId,
      isActive: editForm.isActive,
      expireDate: new Date(editForm.expireDate),
    });
    if (res.data.success) {
      toast.success(res.data.message);
      setUserData((prev: any) =>
        prev.map((item: any) => {
          if (item._id === userId)
            return {
              ...item,
              isActive: editForm.isActive,
              expireDate: new Date(editForm.expireDate),
            };
          else return item;
        })
      );
      setEdit(-1);
    } else {
      toast.error(res.data.message);
    }
  };

  const handleRemove = async (userId: string) => {
    if (window.confirm("Do you want to remove this User?")) {
      const res = await axios.post(`${SERVER_URL}/admin/removeUser`, {
        userId,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setUserData((prev: any) => prev.filter((f: any) => f._id !== userId));
      } else {
        toast.error(res.data.message);
      }
    }
  };

  return (
    <AppLayout>
      <Styled.AdminWrapper>
        <h1>Users</h1>
        <Styled.AdminTableWrapper>
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Account Status</th>
              <th>Expire Date</th>
              <th>Deposit Money</th>
              <th>Action</th>
            </tr>
          </thead>
          {userData.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={6} className="empty-row">
                  No Data
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {userData.map((row: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.email}</td>
                  <td>
                    {edit > -1 && edit === index ? (
                      <label className="edit-activate" id="edit-activate">
                        <input
                          type="checkbox"
                          checked={editForm.isActive}
                          onChange={(e) =>
                            setEditForm((prev) => ({
                              ...prev,
                              isActive: e.target.checked,
                            }))
                          }
                          name="activate"
                          id="edit-activate"
                        />
                        <span>Activate</span>
                      </label>
                    ) : row.isActive ? (
                      <span className="activated">Activated</span>
                    ) : (
                      <span className="not-activated">Not Activated</span>
                    )}
                  </td>
                  <td>
                    {edit > -1 && edit === index ? (
                      <input
                        type="date"
                        className="edit-date"
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            expireDate: e.target.value,
                          }))
                        }
                        name="expireDate"
                        value={formatDate(new Date(editForm.expireDate))}
                      />
                    ) : (
                      new Date(row.expireDate).toLocaleDateString()
                    )}
                  </td>
                  <td>${row.deposit}</td>
                  <td>
                    {edit > -1 && edit === index ? (
                      <div className="table-action">
                        <span onClick={() => handleEditSave(row._id)}>
                          Save
                        </span>{" "}
                        | <span onClick={() => setEdit(-1)}>Cancel</span>
                      </div>
                    ) : (
                      <div className="table-action">
                        <span
                          onClick={() => {
                            setEdit(index);
                            setEditForm({
                              isActive: row.isActive,
                              expireDate: row.expireDate,
                            });
                          }}
                        >
                          Edit
                        </span>{" "}
                        |{" "}
                        <span onClick={() => handleRemove(row._id)}>
                          Remove
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Styled.AdminTableWrapper>
      </Styled.AdminWrapper>
    </AppLayout>
  );
};
