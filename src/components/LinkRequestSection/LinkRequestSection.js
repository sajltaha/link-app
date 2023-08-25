import style from "./LinkRequestSection.module.css";

export default function LinkRequestSection({setFinalLink, setInputValue, inputValue}) {
  async function getLink() {
    const res = await fetch(`https://clck.ru/--?url=${inputValue}`);
    const link = await res.text();
    setFinalLink(link);
    setInputValue("");
  }

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
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
        disabled={!inputValue}
        className={style.link_button}
        onClick={getLink}
      >
        Сократить
      </button>
    </div>
  );
}
