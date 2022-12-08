import success from "../images/success.png";
import fail from "../images/fail.png";
import { useDispatch, useSelector } from "react-redux";
import { infotooltipSelector } from "redux/selectors";
import { hide } from "redux/store/infotooltip/infotooltip.slice";

function InfoTooltip() {

  const infotooltipState = useSelector(infotooltipSelector);
  const dispatch = useDispatch();


  function onClose() {
    dispatch(hide())
  }

  return (
    <div
      className={`popup${infotooltipState.isVisible ? " popup_opened" : ""}`}
      onMouseDown={(e) => {
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
