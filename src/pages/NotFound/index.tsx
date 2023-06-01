import { useLocation, useNavigate } from "react-router-dom";

import "./index.scss";
import routes from "shared/lib/routes";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const doesAnyHistoryEntryExist = location.key !== "default";

  return (
    <main className="not-found">
      <div className="not-found__text-block">
        <h1 className="not-found__status">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button
        className="not-found__btn"
        onClick={() =>
          doesAnyHistoryEntryExist ? navigate(-1) : navigate(routes.main)
        }
      >
        {doesAnyHistoryEntryExist ? "Назад" : "На главную"}
      </button>
    </main>
  );
};

export default NotFound;
