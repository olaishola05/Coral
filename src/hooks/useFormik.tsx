import { useFormik } from "formik";
import * as Yup from "yup";

interface CustomFormikProps {
  initialValues: any;
  onSubmit: any;
}

export const useCustomFormik: React.FC<CustomFormikProps> = (initialValues, onSubmit) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
  });

  return formik;
}