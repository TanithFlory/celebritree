import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const useOnLogged = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      return navigate("/");
    }
  }, [isLogged, navigate]);
};

export const useOnNotLogged = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      return navigate("/");
    }
  }, [isLogged, navigate]);
};

