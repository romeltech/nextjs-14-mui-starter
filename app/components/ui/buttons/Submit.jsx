"use client";

import { useFormStatus } from "react-dom";
import LoadingButton from "@mui/lab/LoadingButton";
const Submit = ({}) => {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      size="large"
      type="submit"
      variant="contained"
      color="primary"
      loading={pending}
    >
      Submit
    </LoadingButton>
  );
};

export default Submit;
