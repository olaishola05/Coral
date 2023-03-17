import { useState } from 'react';
import { useFormik, FormikConfig } from 'formik';
import * as Yup from 'yup';

interface FormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

const initialValues: FormData = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export function useLoginFormik(props: FormikConfig<FormData>, onSubmit: () => void) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik<FormData>({
    ...props,
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        // Make API call to login user here
        await onSubmit();
        resetForm();
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return {
    formik,
    isSubmitting,
  };
}