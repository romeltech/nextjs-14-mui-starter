"use client";

import { useFormStatus } from "react-dom";
import LoadingButton from "@mui/lab/LoadingButton";
const Submit = ({
  text = "save",
  size = "large",
  variant = "contained",
  color = "primary",
}) => {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      type="submit"
      size={size}
      variant={variant}
      color={color}
      loading={pending}
    >
      {text}
    </LoadingButton>
  );
};

export default Submit;
