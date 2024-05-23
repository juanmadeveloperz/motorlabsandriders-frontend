import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const setFormErrors = (form, error) => {
  Object.entries(error.response.data.errors).forEach(([key, value]) => {
    form.setError(key, {
      type: "manual",
      message: value,
    });
  });
};
