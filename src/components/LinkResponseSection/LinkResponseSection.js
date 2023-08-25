import style from "./LinkResponseSection.module.css";
import { BiTransfer } from "react-icons/bi";

export default function LinkResponseSection({ finalLink }) {
  const copyLink = () => {
    navigator.clipboard.writeText(finalLink);
  };

  return (
    <div
      style={{ display: finalLink ? "flex" : "none" }}
      className={style.result_window}
    >
      <a className={style.result_window_link} href={finalLink} target="_blank">
        <BiTransfer />
        <span>{finalLink.slice(8)}</span>
      </a>
      <button className={style.result_window_clipboard} onClick={copyLink}>
        Копировать
      </button>
    </div>
  );
}
