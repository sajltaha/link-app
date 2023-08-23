import Container from "../Container/Container";
import style from "./TextInfo.module.css";

export default function TextInfo() {
  return (
    <>
      <Container>
        <div style={{ margin: "16px 0 0 0" }}>
          <p className={style.text}>
            Помогите клиентам быстро найти вашу страницу в интернете. Благодаря
            короткой ссылке клиентам не придётся видеть длинные url-адреса,
            занимающие много места.
          </p>
        </div>
      </Container>
    </>
  );
}
