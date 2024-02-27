// router
import { Navigate, Outlet, useLocation } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

//-----------------------------------------------------
const PublicRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  const { flag } = useSelector((state: any) => state.single);

  if(location.pathname === "/payment")
  {
    if(token || flag)
    {
      return <Outlet />;
    }
    return <Navigate to="/" />;
  }

  if (token) {
    if (location.pathname === "/singlereceipt") {
      return <Outlet />;
    }
    return <Navigate to="/generator" />;
  }

  return <Outlet />;
};

export default PublicRoute;
