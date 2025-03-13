import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();

  const { authUser } = useAuthStore();

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);
  return <div>HomePage</div>;
};

export default HomePage;
