import * as yup from "yup"



export const businessSchema = yup.object().shape({
    name:yup.string().min(3,"Numele afacerii trebuie sa contina cel putin 3 caractere").required(),
    county:yup.string(),
    city:yup.string(), 
    street:yup.string(),
    streetNumber:yup.string(),
    description:yup.string().min(40,"Descrierea afacerii trebuie sa contina minim 40 de caractere").max(250,"Descrierea afacerii trebuie sa contina maxim 250 de caractere "),
    phoneNumber : yup.number().required(),
    emailAddress:yup.string().email(),
    paymentMethod:yup.string(),


})