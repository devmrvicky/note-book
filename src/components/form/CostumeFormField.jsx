import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CostumeFormField = ({
  form,
  name = "",
  label = "",
  placeholder = "",
  description,
  type = "text",
  formInput = "input",
  radioItems = [],
}) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <>
                {formInput === "input" && (
                  <Input
                    placeholder={placeholder}
                    {...field}
                    type={type}
                    className="dark:border-white"
                    required
                  />
                )}
                {formInput === "textarea" && (
                  <Textarea
                    placeholder={placeholder}
                    {...field}
                    className="min-h-[200px]"
                    required
                  />
                )}
                {formInput === "radio-group" && (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {radioItems &&
                      radioItems.map((item) => (
                        <FormItem
                          key={typeof item === "string" ? item : item.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem
                              value={
                                typeof item === "string" ? item : item.value
                              }
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {typeof item === "string" ? item : item.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                  </RadioGroup>
                )}
              </>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default CostumeFormField;
