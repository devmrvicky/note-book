import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FlexBox } from "../util/index.util";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { FaArrowRightToBracket } from "react-icons/fa6";
import authService from "@/appwrite/authService";
import { logout } from "@/features/authSlice";
import { ReloadIcon } from "@radix-ui/react-icons";
import { extraMenus } from "./Aside";
import { ModeToggle } from "./theme/ModeToggle";
import { NavLink } from "react-router-dom";

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [fallback, setFallback] = useState("CN");
  const { name, email } = useSelector((store) => store.auth.userData);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const res = await authService.logout();
      if (res) {
        dispatch(logout());
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!name && !email) return;
    const nameArr = name.toUpperCase().split(" ");
    if (nameArr.length >= 2) {
      setFallback(`${nameArr[0][0]}${nameArr[1][0]}`);
    } else {
      setFallback(`${nameArr[0][0]}`);
    }
  }, [name]);

  return (
    <Popover>
      <PopoverTrigger>
        <FlexBox
          className="w-full md:border rounded px-0 md:px-3 h-14 md:hover:bg-zinc-400/10 cursor-pointer min-[400px]:mt-auto max-[400px]:w-14 flex-nowrap"
          justifyItems="md:justify-start justify-center"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
          <FlexBox
            alignItems="items-start"
            direction="flex-col"
            gap="gap-0 hidden md:flex"
          >
            <p>{name || "Your name"}</p>
            <span className="text-xs text-zinc-500">
              {email || "Your email"}
            </span>
          </FlexBox>
        </FlexBox>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        {/* profile */}
        {/* appearance */}
        <ModeToggle />
        <div className="extra-menus flex flex-col gap-1 before:content-['options'] before:text-xs before:text-zinc-500 my-2">
          {extraMenus.map(({ path, name, icon, fillIcon }) => (
            <NavLink
              to={path}
              key={name}
              className={({ isActive }) =>
                isActive
                  ? `px-3 py-1 dark:text-[#aaaaaa] bg-[#1d1d1d] rounded-md text-[1rem] flex items-center gap-3 md:w-auto max-[400px]:h-12 max-[400px]:rounded-full w-full`
                  : `px-3 py-1 dark:text-[#747373] dark:hover:text-[#aaaaaa] hover:bg-[#1d1d1d] rounded-md text-[1rem] flex items-center gap-3 md:w-auto max-[400px]:h-12 max-[400px]:rounded-full w-full`
              }
            >
              {({ isActive }) =>
                isActive ? (
                  <>
                    {fillIcon} <span className="">{name}</span>
                  </>
                ) : (
                  <>
                    {icon} <span className="">{name}</span>
                  </>
                )
              }
            </NavLink>
          ))}
        </div>
        <Button
          variant="outline"
          onClick={handleLogout}
          disabled={loading}
          className="w-full"
        >
          {!loading ? (
            <>
              <FaArrowRightToBracket className="w-4 h-4 mr-2" />
              <span>Logout</span>
            </>
          ) : (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          )}
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default Auth;
