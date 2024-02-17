import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Container, FlexBox } from "@/components/util/index.util";
import CostumeForm from "@/components/form/CostumeForm";
import { useNavigate } from "react-router-dom";
import authService from "@/appwrite/authService";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "@/features/authSlice";
import createRootDir from "@/methods/createRootDir";
import { changeCurrentDir, updateFolders } from "@/features/folderSlice";
import CreateFolderStructure from "@/obj-classes/createFolderStructure";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await authService.signup({ ...data });
      if (result) {
        // if user created then create this user's rootDir
        // const data = {folderName: 'rootDir', rootDir: true, id: [], flag: 'folder', ownerId: result.$id, ownerName: result.name}
        const user = await authService.getUser();
        const folderObj = new CreateFolderStructure(
          "rootDir",
          true,
          [],
          user.$id,
          user.name
        );
        console.log(folderObj);
        const rootDir = await createRootDir(folderObj);
        if (rootDir) {
          // update user pref
          await authService.updateUserPrefs({ rootDir: rootDir.$id });
          dispatch(changeCurrentDir(rootDir));
          dispatch(updateFolders(rootDir));
          navigate("/");
          dispatch(login(user));
        }
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container maxWidth="max-w-sm">
      <FlexBox direction="flex-col" className="form-header py-5 text-center">
        <h1 className="text-2xl">Signup form</h1>
        <p className="text-sm text-zinc-500">
          Sign up now for instant access to exclusive features and personalized
          content—a seamless journey awaits you!
        </p>
      </FlexBox>
      <CostumeForm
        form={form}
        onSubmit={onSubmit}
        loading={loading}
        buttonName="signup"
      />
      <div className="text-sm text-zinc-500 text-center py-2">
        I have already an account.{" "}
        <Button variant="link" onClick={() => navigate("/user/login")}>
          Login
        </Button>
      </div>
    </Container>
  );
}
