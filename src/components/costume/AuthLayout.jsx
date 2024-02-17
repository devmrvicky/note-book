import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication = true }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { status } = useSelector((store) => store.auth);

  useEffect(() => {
    if (authentication && status !== authentication) {
      navigate("/user/login");
    } else if (!authentication && status !== authentication) {
      navigate("/");
    }
    setLoading(false);
  }, [navigate, status, authentication]);

  return loading ? <div>Loading ...</div> : <>{children}</>;
};

export default AuthLayout;
