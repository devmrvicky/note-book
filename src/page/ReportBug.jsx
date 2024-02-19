import { CostumeFormField } from "@/components/index.components";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { changeCurrentPage } from "@/features/pageSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// Get browser name
const getBrowserName = () => {
  const userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.includes("Firefox")) {
    browserName = "Mozilla Firefox";
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    browserName = "Opera";
  } else if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
    browserName = "Internet Explorer";
  } else if (userAgent.includes("Edge")) {
    browserName = "Microsoft Edge";
  } else if (userAgent.includes("Chrome")) {
    browserName = "Google Chrome";
  } else if (userAgent.includes("Safari")) {
    browserName = "Safari";
  } else {
    browserName = "Unknown";
  }

  return browserName;
};

const getUserDeviceInfo = () => {
  // Get device information
  return {
    userAgent: navigator.userAgent,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    pixelRatio: window.devicePixelRatio,
    browserLanguage: navigator.language,
    platform: navigator.platform,
    isMobile: /Mobi/i.test(navigator.userAgent), // Detect if the user is on a mobile device
    browserName: getBrowserName(),
  };
};

const ReportBug = () => {
  const form = useForm();
  const dispatch = useDispatch();
  dispatch(changeCurrentPage("Bugs report"));

  const onSubmit = (data) => {
    const deviceInfo = getUserDeviceInfo();
    console.log(deviceInfo);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl">
        Fill all mandatory field and write create description
      </h1>
      <p className="text-zinc-400 text-sm">
        Reporting bugs is crucial for improving our web app's performance. Your
        feedback helps us fix issues swiftly, ensuring a smoother user
        experience for everyone. Thank you for helping us maintain excellence!
      </p>
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="py-5 bug-report-form"
        >
          {/* title input */}
          <CostumeFormField
            formInput="input"
            type="text"
            name="bug-title"
            label="Bug title"
            placeholder="Enter Bug Title Here"
            description="Provide a brief, descriptive title that summarizes the bug you encountered. This will help us quickly identify and prioritize the issue for resolution."
            form={form}
          />
          {/* description of bug */}
          <CostumeFormField
            formInput="textarea"
            name="bug-description"
            label="Write bug description"
            placeholder="Please describe the bug in detail.."
            description="Detail the bug you encountered here to help us swiftly address and resolve it."
            form={form}
          />
          {/* attached the img */}
          <div className="bug-img border">
            <CostumeFormField
              type="file"
              name="bug-screenshot"
              label="Bug screenshot"
              description="Attach a screenshot of the bug to provide visual context and help our team better understand the issue. Accepted file formats include .png, .jpg, and .gif. Maximum file size is 5MB."
              form={form}
            />
          </div>
          {/* choose */}
          <CostumeFormField
            formInput="radio-group"
            label="priority level of the bug"
            form={form}
            radioItems={["Critical", "High", "Medium", "Low"]}
          />
          <Button type="submit">Bug report submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ReportBug;
