import { NavLink, Outlet } from "react-router-dom";

const DevRequests = () => {
  return (
    <div className="p-5 pl-[120px] h-full">
      <div className="request-nav border-b w-full">
        <NavLink
          to="/dev/requests/bug-fix-request"
          className={`py-2 px-1 text-zinc-700 hover:text-zinc-400 border-b`}
        >
          bug request
        </NavLink>
        <NavLink
          to="/dev/requests/feature-request"
          className={`py-2 px-1 text-zinc-700 hover:text-zinc-400 border-b`}
        >
          feature request
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default DevRequests;
