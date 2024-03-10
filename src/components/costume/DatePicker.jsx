import { useEffect, useState } from "react";

import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import getDate from "@/methods/getdate";
import { useDispatch } from "react-redux";
import { setTaskDueDate } from "@/features/tasksSlice";

function DatePicker() {
  const [date, setDate] = useState();

  const dispatch = useDispatch()

  useEffect(() => {
    const { fullDate } = getDate(date);
    dispatch(setTaskDueDate(fullDate));
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-auto justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className={`${date && "mr-2"} h-4 w-4`} />
          {date && format(date, "PPP")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default DatePicker;
