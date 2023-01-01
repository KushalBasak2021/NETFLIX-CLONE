import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.state?.movieData;
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        progress="true"
        controls
        src={movie.video}
        autoPlay
        muted
      />
    </div>
  );
};

export default Watch;
