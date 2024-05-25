import * as yup from "yup"


export default function ValidationForm (){
    const schemaValidation=yup.object({
        title: yup.string()
        .required()
        .min(3),
        content: yup.string()
        .required()
        .min(5)
    })
    return schemaValidation;
}