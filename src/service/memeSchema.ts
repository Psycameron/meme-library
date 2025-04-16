import { number, object, string } from "yup";

export const memeSchema = object({
  title: string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be at most 100 characters"),

  imageUrl: string()
    .required("Image URL is required")
    .url("Must be a valid URL"),

  likes: number()
    .required("Likes are required")
    .min(0, "Minimum is 0")
    .max(99, "Maximum is 99"),
});
