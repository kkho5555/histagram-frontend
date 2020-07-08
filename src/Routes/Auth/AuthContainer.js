import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const [requestSecret] = useMutation(LOG_IN, {
    update: (_, { data: { requestSecret } }) => {
      if (!requestSecret) {
        toast.error("해당 이메일은 존재하지 않습니다.");
        setTimeout(() => setAction("signUp"), 3000);
      }
    },
    variables: { email: email.value },
  });

  const [createAccount] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email !== "") {
        requestSecret();
      } else {
        toast.error("이메일을 입력해주세요.");
      }
    } else if (action === "signUp") {
      if (
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== "" &&
        email.value !== ""
      ) {
        createAccount();
      } else {
        toast.error("모든 항목을 입력하세요.");
      }
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
