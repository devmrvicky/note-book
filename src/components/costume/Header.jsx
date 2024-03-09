import { bg } from "@/assets/index.assets";
import Breadcrumb from "./Breadcrumb";
import Date from "./Date";
import { FlexBox } from "../util/index.util";
import SearchForm from "./SearchBox";
import { useForm } from "react-hook-form";
import { Nav } from "../index.components";
import { Button } from "../ui/button";
import { VscNewFolder } from "react-icons/vsc";
import CreateFolderBtn from "./buttons/CreateFolderBtn";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CustomSelectInput as NoteFilterSelectInput } from "./CustomSelectInput";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [selectedFilterNoteValue, setSelectedFilterNoteValue] = useState()
  const [hidden, setHidden] = useState(false);
  const { currentPage } = useSelector((store) => store.page);
  const { notes, notesInDraft } = useSelector((store) => store.notes);

  const navigate = useNavigate();
  const location = useLocation()

  const form = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const onChange = (selectedValue) => {
    if (selectedValue === "Draft") {
      navigate("/notes?filter=draft");
    } else if (selectedValue === "All") {
      navigate("/notes?filter=all");
    }
  };
  useEffect(() => {
    const notesFilter = new URLSearchParams(location.search);
    const filter = notesFilter.get("filter");
    setSelectedFilterNoteValue(filter)
    setHidden(
      currentPage === "Bugs report" || currentPage === "Feature suggestion" || currentPage === "Tasks"
        ? true
        : false
    );
  });

  return (
    <header
      className={`flex-1 w-full ${
        !hidden ? "h-[200px]" : "h-auto"
      } max-[400px]:h-auto relative after:content-[""] after:absolute after:w-full after:h-full after:bg-black/30 after:backdrop-blur-[3px] after:top-0 after:left-0 after:z-10 p-10 max-[400px]:p-0`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <Nav /> */}
      <FlexBox className="relative z-20 max-[400px]:h-full max-[400px]:px-3 max-[400px]:py-4 w-full">
        <Breadcrumb />
        <Date />
      </FlexBox>
      {!hidden && (
        <FlexBox
          justifyItems="justify-between"
          alignItems="items-end"
          className="relative z-20 max-[400px]:justify-end"
        >
          <div className="mt-3 max-w-[500px] w-full max-[400px]:hidden flex-1">
            <SearchForm form={form} onSubmit={onSubmit} />
          </div>
          <div className="p-[10px] flex gap-3">
            <div className="flex items-center gap-2">
              <span>Filter by:</span>
              <NoteFilterSelectInput
              placeholder="filter notes"
                items={[
                  ["All", notes.length],
                  ["Draft", notesInDraft.length],
                ]}
                onChange={onChange}
                selectedValue={selectedFilterNoteValue}
              />
            </div>
            <CreateFolderBtn />
          </div>
        </FlexBox>
      )}
    </header>
  );
};

export default Header;
