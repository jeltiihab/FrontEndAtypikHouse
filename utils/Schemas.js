import * as yup from "yup"
import moment from 'moment'


// Regex to verify the phone number
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userschema = yup.object().shape({
    userRole: yup.string().required(),
    firstName: yup
        .string().required("Le nom est un champ obligatoire").min(1, "Le nom doit comporter au moins 1 caractères"),
    lastName: yup
        .string()
        .required("Le prénom est un champ obligatoire")
        .min(1, "Le prénom doit comporter au moins 1 caractères"),
    birthDate: yup
        .string("Veuillez indiquer votre âge")
        .required("Veuillez indiquer votre âge")
        .test("Date de naissance", "Vous devez avoir au moins 18 ans", (value) => {
            return moment().diff(moment(value), "years") >= 18;
        })
        .nullable()
        /*.number()
        .required("Veuillez indiquer votre âge")
        .min(18, "Vous devez avoir au moins 18 ans")
        .max(99, "Vous devez avoir au plus 99 ans")*/,
    sexe: yup.string().required(),
    phone: yup.string().matches(phoneRegExp, 'Le numéro de téléphone n\'est pas valide'),
    email: yup
        .string()
        .email()
        .required("L'e-mail est un champ obligatoire"),
    password: yup
        .string()
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial"
        ),
    password_confirmation: yup
        .string()
        .required("Veuillez confirmer votre mot de passe")
        .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("password")], "Le mot de passe ne correspond pas")
        })
    /*termsOfService: yup
        .boolean()
        .required("The terms and conditions must be accepted.")
        .oneOf([true], "The terms and conditions must be accepted.")*/
});

const propertyschema = yup.object().shape({
    property_name: yup.string().required('Le nom est un champ obligatoire'),
    rooms: yup
      .number()
      .required('Le nombre des chambres est un champ obligatoire')
      .min(1, 'Le nombre de chambre minimum est 1'),
    hosting_capacity: yup
      .number()
      .required('La Capacité d accueil est un champ obligatoire')
      .min(1, 'La Capacité d accueil minimum est 1'),
    description: yup.string().required('La Description est un champ obligatoire'),
    price: yup.number().required('Le prix est un champ obligatoire'),
    checkin_at: yup.string().required("L'heure d'entrée est obligatoire"),
    checkout_at: yup.string().required("L'heure de sortie est obligatoire"),
    street_number: yup
      .number()
      .required('Le numéro de rue est un champ obligatoire')
      .min(1, 'Le numero de rue doit être supérieur 1'),
    street: yup
      .string()
      .required('La Rue de votre address est un champ obligatoire')
      .min(1, 'La Capacité d accueil minimum est 1'),
    postal_code: yup.string().required('Le code postal est un champ obligatoire'),
    city: yup.string().required('La ville est un champ obligatoire'),
    country: yup.string().required('Le pays est un champ obligatoire'),
  });

const profileschema = yup.object().shape({
first_name: yup
    .string()
    .required('Le nom est un champ obligatoire')
    .min(1, 'Le nom doit comporter au moins 1 caractères'),
last_name: yup
    .string()
    .required('Le prénom est un champ obligatoire')
    .min(1, 'Le prénom doit comporter au moins 1 caractères'),
phone: yup
    .string()
    .required("S'il vous plait entrez votre numéro de télephone")
    .matches(phoneRegExp, "Le numéro de téléphone n'est pas valide"),
password: yup
    .string()
    .required("S'il vous plait entrez votre mot de passe")
    .matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    'Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial'
    ),
images: yup.array().min(1,"select at least 1 file")

});  

export {
    userschema,
    propertyschema,
    profileschema
}