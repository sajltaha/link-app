import { useState } from "react";
import Container from "../Container/Container";
import style from "./AppAction.module.css";
import { BiTransfer } from "react-icons/bi";

export default function AppAction() {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [finalLink, setFinalLink] = useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  async function clickChange() {
    if (inputValue) {
      const res = await fetch(`https://clck.ru/--?url=${inputValue}`);
      const link = await res.text();
      setFinalLink(link);
      setInputValue('')
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const copyLink = () => {
    navigator.clipboard.writeText(finalLink);
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
        <div
          style={{ display: isActive ? "flex" : "none" }}
          className={style.result_window}
        >
          <a
            className={style.result_window_link}
            href={finalLink}
            target="_blank"
          >
            <BiTransfer />
            <span>{finalLink.slice(8)}</span>
          </a>
          <button className={style.result_window_clipboard} onClick={copyLink}>
            Копировать
          </button>
        </div>
      </Container>
    </>
  );
}