import { useState } from "react";
import Container from "../Container/Container";
import style from "./AppAction.module.css";

export default function AppAction() {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const clickChange = () => {
    if (inputValue) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <Container>
        <div style={{ margin: "16px 0 0 0", display: "flex" }}>
          <input
            className={style.link_input}
            placeholder="Введите ссылку, которую нужно сократить"
            value={inputValue}
            onChange={inputChangeHandler}
            type="text"
          />
          <button
            style={{
              background: inputValue ? "yellow" : "#475a8080",
              cursor: inputValue ? "pointer" : "default",
            }}
            className={style.link_button}
            onClick={clickChange}
          >
            Сократить
          </button>
        </div>
      </Container>
      <Container>
        <div style={{ display: isActive ? "block" : "none" }}>asdas</div>
      </Container>
    </>
  );
}
