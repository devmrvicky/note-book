import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CostumeFormField } from "@/components/index.components";
import { ReloadIcon } from "@radix-ui/react-icons";

const CostumeForm = ({
  form,
  onSubmit,
  loading,
  fullNameField = true,
  emailField = true,
  passwordField = true,
  buttonName
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 flex flex-col"
      >
        {fullNameField && (
          <CostumeFormField
            form={form}
            name="name"
            label="Full name"
            placeholder="Full name"
          />
        )}
        {emailField && (
          <CostumeFormField
            form={form}
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
          />
        )}
        {passwordField && (
          <CostumeFormField
            form={form}
            name="password"
            label="password"
            placeholder="password"
            type="password"
          />
        )}
        {!loading ? (
          <Button type="submit">{buttonName}</Button>
        ) : (
          <Button disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        )}
      </form>
    </Form>
  );
};

export default CostumeForm;
