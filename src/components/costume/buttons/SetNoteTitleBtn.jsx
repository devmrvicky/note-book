import React, { useState } from "react";
import DialogBox from "../DialogBox";
import { Form } from "@/components/ui/form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CostumeFormField } from "@/components/index.components";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import CostumeDialogContent from "../CostumeDialogContent";
import DialogTriggerBtn from "./DialogTriggerBtn";
import useSave from "@/methods/useSave";

const SetNoteTitleBtn = ({ handleSaveNote }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notes, currentNote } = useSelector((store) => store.notes);
  const { currentDir } = useSelector((store) => store.folders);

  const form = useForm({
    defaultValues: {
      title: `untitled${notes.length}`,
    },
  });

  const onSubmit = async ({ title }) => {
    try {
      setLoading(true);
      if (!title) return;
      const note = { ...currentNote, title };
      const savedObj = await useSave("note", note, currentDir, dispatch);
      if (savedObj.status) {
        console.log(savedObj.message);
        navigate(`/notes/${title}`);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <DialogBox>
      <>
        <DialogTriggerBtn>
          <Button onClick={handleSaveNote}>save</Button>
        </DialogTriggerBtn>
        <CostumeDialogContent
          dialogTitle="Set title"
          dialogDescription="Make changes to your profile here. Click save when you're done."
        >
          <Form {...form} className="grid gap-4 py-4">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CostumeFormField
                description="title description"
                form={form}
                label="title"
                name="title"
                placeholder="title"
                type="text"
              />
              <DialogFooter>
                {!loading ? (
                  <Button type="submit">set title</Button>
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

export default SetNoteTitleBtn;
