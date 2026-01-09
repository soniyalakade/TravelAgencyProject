import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If not already on home, navigate to home with hash
    if (location.pathname !== "/") {
      navigate("/#contact", { replace: true });
    } else {
      // Already on home: scroll manually
      const element = document.getElementById("contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [navigate, location]);

  return null;
};

export default Contact;
