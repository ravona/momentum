import * as yup from "yup"

export const StreakSchema = yup.object({
    title: yup
        .string("title")
        .min(2, "a streak title cannot be shorter than 2 characters")
        .max(70, "a streak title cannot be longer than 70 characters")
        .required("Required"),
    motivation: yup
        .string("content")
        .min(2, "a streak cannot be shorter than 20 characters")
        .max(30, "a streak cannot be longer than 4000 characters")
        .required("Required"),
    intervalNum: yup
        .number()
        .min(1, "a streak interval cannot be shorter than 20 characters")
        .max(3, "a streak cannot be longer than 4000 characters")
        .required("Required"),
    intervalUnit: yup.string("intervalUnit").required("Required"),
    goal: yup
        .number()
        .min(0, "a streak cannot be shorter than 20 characters")
        .max(9, "a streak cannot be longer than 4000 characters"),
})

export default StreakSchema
