import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export const CustomSelectInput = ({
  placeholder = "",
  items = [],
  onChange,
  selectedValue,
}) => {
  return (
    <Select onValueChange={onChange} defaultValue={selectedValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, index) => (
          <SelectItem key={index} value={Array.isArray(item) ? item[0] : item}>
            <div className="flex justify-between items-center">
              <span>{Array.isArray(item) ? item[0] : item}</span>
              <Badge>{Array.isArray(item) ? item[1] : ""}</Badge>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
