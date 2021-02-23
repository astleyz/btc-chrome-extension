import React, { FC, useState } from "react";
import { FormBox } from "./Authorization.styled";
import Popup from "../Popup/Popup";
import { useFormik } from "formik";
import { api } from "../../api/api";

interface AuthorizationProps {
  onLogin: () => void;
}

const Authorization: FC<AuthorizationProps> = ({ onLogin }) => {
  const [isPopupOpen, setPopopOpen] = useState(false);
  const [isBtnDisabled, setDisabled] = useState(false);

  const formik = useFormik({
    initialValues: { text: "", password: "" },
    onSubmit: async (values, { setSubmitting }) => {
      if (values.text !== "" && values.password !== "") {
        setSubmitting(false);
        setDisabled(true);
        const answer = await api.login(values);
        answer && setPopopOpen(true);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve("");
          }, 10000);
        });
        onLogin();
      }
    },
  });

  return (
    <FormBox>
      <form onSubmit={formik.handleSubmit}>
        <span className="header">Login</span>
        <div className="input-container">
          <input
            placeholder=" "
            id="login"
            type="text"
            name="text"
            spellCheck={false}
            autoComplete="off"
            onChange={formik.handleChange}
          />
          <label htmlFor="login">Wallet ID</label>
        </div>
        <div className="input-container">
          <input
            placeholder=" "
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="submit" disabled={isBtnDisabled}>
          Submit
        </button>
      </form>
      <div className="popupZone">
        <Popup
          message={`Check your email!`}
          isOpen={isPopupOpen}
          onClose={setPopopOpen}
        />
      </div>
    </FormBox>
  );
};

export default Authorization;
