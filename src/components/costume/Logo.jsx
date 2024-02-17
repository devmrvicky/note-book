import { logoImg } from "@/assets/index.assets";
import { FlexBox } from "../util/index.util";
import { Link } from "react-router-dom";

const Logo = ({ className, hidden }) => {
  return (
    <Link to="/" className={` ${hidden}`}>
      <FlexBox className="md:w-[169px]" justifyItems="justify-center">
        <img src={logoImg} alt="logo" />
        <div className={`max-[400px]:hidden relative top-1 ${className}`}>
          <p className="font-['Cookie'] text-[26px] leading-3">
            Write own note
          </p>
          <span className="text-xs text-zinc-500">Keep personal notes</span>
        </div>
      </FlexBox>
    </Link>
  );
};

export default Logo;
