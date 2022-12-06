import success from "../images/success.png";
import fail from "../images/fail.png";
import { useDispatch, useSelector } from "react-redux";

function InfoTooltip() {

  const infotooltipState = useSelector(state => state.infotooltip);
  const dispatch = useDispatch();


  function onClose() {
  }

  return (
    <div
      className={`popup${infotooltipState.isVisible ? " popup_opened" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup")) {
          onClose();
        }
      }}
    >
      <div className="popup__container">
        <div className="info-tooltip">
          <img src={infotooltipState.status ? success : fail} alt="" />
          <h2 className="info-tooltip__header">{infotooltipState.message}</h2>
        </div>
        <button className="popup__close-btn" onClick={onClose} />
      </div>
    </div>
  );
}

export default InfoTooltip;
