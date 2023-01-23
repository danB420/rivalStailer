import * as yup from "yup"

export const loginSchema= yup.object().shape({
    phoneNumber : yup.number().required(),
    password : yup.string().min(8,"Parola trebuie sa contina minim 8 caractere").max(24,"Parola trebuie sa contina maxim 24 caractere")

})

export const registerSchema = yup.object().shape({
    phoneNumber : yup.number().required(),
    password : yup.string().min(8,"Parola trebuie sa contina minim 8 caractere").max(24,"Parola trebuie sa contina maxim 24 caractere").required(),
    firstName:yup.string().min(3,"Numele trebuie sa contina cel putin 3 caractere").required(),
    lastName:yup.string().min(3,"Prenumele trebuie sa contina cel putin 3 caractere").required(),
    emailAddress:yup.string().email()

})