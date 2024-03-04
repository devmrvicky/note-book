import { useState } from "react";
import DialogBox from "../DialogBox";
import DialogTriggerBtn from "./DialogTriggerBtn";
import { Button } from "@/components/ui/button";
import CostumeDialogContent from "../CostumeDialogContent";
import { VscNewFolder } from "react-icons/vsc";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { CostumeFormField } from "@/components/index.components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateFolderStructure from "@/obj-classes/createFolderStructure";
import { DialogFooter } from "@/components/ui/dialog";
import { ReloadIcon } from "@radix-ui/react-icons";
import useSave from "@/methods/useSave";
import { useToast } from "@/components/ui/use-toast";

const CreateFolderBtn = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((store) => store.auth);
  const { currentDir, folders } = useSelector((store) => store.folders);

  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      folderName: `folder${folders.length}`,
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const folderObj = new CreateFolderStructure(
        data.folderName,
        false,
        [],
        userData.$id,
        userData.name,
        "folder"
      );
      const savedObj = await useSave("folder", folderObj, currentDir, dispatch);
      if (savedObj.status) {
        console.log(savedObj.message);
        toast({
          description: savedObj.message,
        });
        navigate("/notes");
      }
    } catch (error) {
      console.log(`an error occur from folder save method : ${error.message}`);
      toast({
        variant: "destructive",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogBox>
      <>
        <DialogTriggerBtn triggerClass="static">
          <Button>
            <VscNewFolder className="w-4 h-4" />
          </Button>
        </DialogTriggerBtn>
        <CostumeDialogContent
          dialogTitle="Create folder"
          dialogDescription="Create folders: digital organization for streamlined file management."
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <CostumeFormField
                form={form}
                name="folderName"
                label="Folder name"
                placeholder="Folder name"
                description="create folder for organize your note / docs."
                type="text"
              />
              <DialogFooter>
                {!loading ? (
                  <Button type="submit">Create folder</Button>
                ) : (
                  <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                )}
              </DialogFooter>
            </form>
          </Form>
        </CostumeDialogContent>
      </>
    </DialogBox>
  );
};

export default CreateFolderBtn;
