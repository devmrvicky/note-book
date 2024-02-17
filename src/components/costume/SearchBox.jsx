import { Form } from "@/components/ui/form";
import { CostumeFormField } from "@/components/index.components";

const SearchForm = ({ form, onSubmit }) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 flex flex-col text-white"
      >
        <CostumeFormField
          form={form}
          name="search"
          label="Search"
          placeholder="Search notes, todo & tags etc"
        />
      </form>
    </Form>
  );
};

export default SearchForm;
