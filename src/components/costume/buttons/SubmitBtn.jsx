import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

const SubmitBtn = ({ loading, btnTitle }) => {
  return !loading ? (
    <Button type="submit">{btnTitle}</Button>
  ) : (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
};

export default SubmitBtn;
