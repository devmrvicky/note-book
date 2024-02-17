import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Container, FlexBox } from "@/components/util/index.util";
import CostumeForm from "@/components/form/CostumeForm";
import { useNavigate } from "react-router-dom";
import authService from "@/appwrite/authService";
import { useDispatch } from "react-redux";
import { login } from "@/features/authSlice";
import { useState } from "react";
import createRootDir from "@/methods/createRootDir";
import { changeCurrentDir, updateFolders } from "@/features/folderSlice";
import CreateFolderStructure from "@/obj-classes/createFolderStructure";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await authService.login(data);
      if (res) {
        const userData = await authService.getUser();
        dispatch(login(userData));
        const pref = await authService.getUserPrefs();
        console.log(pref);
        if (pref.rootDir) return;
        // if user data available then create root folder
        const data = new CreateFolderStructure(
          "rootDir",
          true,
          [],
          userData.$id,
          userData.name
        );
        const rootDir = await createRootDir(data);
        await authService.updateUserPrefs({rootDir: rootDir.$id})
        dispatch(changeCurrentDir(rootDir));
        dispatch(updateFolders(rootDir));
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
        <h1 className="text-2xl">Login form</h1>
        <p className="text-sm text-zinc-500">
          Log in effortlessly and securely to access your account. Your digital
          world, simplified with just a click.
        </p>
      </FlexBox>
      <CostumeForm
        form={form}
        onSubmit={onSubmit}
        loading={loading}
        fullNameField={false}
        buttonName="Login"
      />
      <div className="text-sm text-zinc-500 text-center py-2">
        I don't have any account.{" "}
        <Button variant="link" onClick={() => navigate("/user/signup")}>
          Signup
        </Button>
      </div>
    </Container>
  );
}
