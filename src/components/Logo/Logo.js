import style from "./Logo.module.css";

export default function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img className={style.logo} src="./images/yandex.png" alt="yandex" />
      <p className={style.app_name}>Кликер</p>
    </div>
  );
}
