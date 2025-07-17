import React from "react";
import { Step } from "./form";
import { useFormControls } from "./hooks/useForm";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";

const FormFooter = ({ steps }: { steps: Step[] }) => {
  const {
    handleBack,
    handleNext,
    hasNextPage,
    hasPreviousPage,
    isFinalPage,
    currentPageIndex,
  } = useFormControls();
  const { trigger } = useFormContext();

  if (isFinalPage) {
    return (
      <div className="w-full flex justify-between px-7">
        
        <Button  className="bg-gold1 text-white hover:bg-gold/90" type="submit">ارسال</Button>
        <Button className="bg-neutral-500 text-white hover:bg-neutral-500/90" type="button" onClick={handleBack} disabled={!hasPreviousPage}>
          رجوع
        </Button>
      </div>
    );
  }
  return (
    <div className="w-full flex justify-between px-7 py-12">
      <Button className="bg-gold1 text-white hover:bg-gold/90"
        onClick={async () => {
          const res = await trigger(steps[currentPageIndex].inputs, {
            shouldFocus: true,
          });
          if (!res) {
            return;
          }
          handleNext();
        }}
        type="button"
        disabled={!hasNextPage}
      >
        التالي
      </Button>
      <Button className="bg-neutral-500 text-white hover:bg-neutral-500/90" onClick={handleBack} type="button" disabled={!hasPreviousPage}>
        رجوع
      </Button>
    </div>
  );
};

export default FormFooter;