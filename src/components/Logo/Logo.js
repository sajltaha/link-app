import Container from "../Container/Container";
import style from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className={style.logo} src="./images/yandex.png" alt="yandex" />
          <p className={style.app_name}>Кликер</p>
        </div>
      </Container>
    </>
  );
}
