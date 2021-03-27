import "./header.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const Header = ({ isBack, title }) => {
  const history = useHistory();
  return (
    <div class="header">
      <div
        class="back-btn"
        onClick={() => {
          history.replace("/");
        }}
      >
        {isBack && (
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        )}
      </div>

      <div className="title">{title}</div>
      <div> </div>
    </div>
  );
};
export default Header;
