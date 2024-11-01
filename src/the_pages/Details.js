import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect } from "react";
const Details = () => {
  const location = useLocation();
  const { name, image, price, description } = location.state || {};
  const navigate = useNavigate();
  console.log(location.state.description);
  const handleBack = () => {
    navigate("/");
  };
  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  }, [location.state, navigate]);

  return (
    <div style={{ textAlign: "center", margin: "5%" }}>
      <img height="300" width="300" src={image} alt={name} />
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{description}</p>
      <br />
      <Button
        size="small"
        style={{ backgroundColor: "#3f4c6b" }}
        variant="contained"
        onClick={handleBack}
      >
        Return
      </Button>
    </div>
  );
};

export default Details;
