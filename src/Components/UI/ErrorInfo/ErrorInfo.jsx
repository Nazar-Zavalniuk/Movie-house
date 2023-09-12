import React from "react";
import "./ErrorInfo.css";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import { v4 as uuidv4 } from "uuid";

function ErrorInfo(props) {
  const { appError } = useAppState();

  const messages = [];

  if (appError) {
    appError.forEach((error) => {
      if (error.errorMessage !== "") {
        messages.push(`${error.errorMessage} (${error.from})`);
      }
    });
  }

  return (
    <div className="error-info">
      <div className="error-title">Помилка!</div>
      <div className="error-message">
        При завантаженні сторінки виникла(и) наступна(і) помилка(и):
      </div>
      <ul className="list-errors">
        {messages.map((message) => {
          return <li key={uuidv4()}>{message}</li>;
        })}
      </ul>
    </div>
  );
}

export default ErrorInfo;
