import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useOnLogged = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      return navigate("/");
    }
    if (!isLogged) {
      return navigate("/login");
    }
  }, [isLogged, navigate]);
};

export default useOnLogged;
