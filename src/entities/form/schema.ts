import * as Yup from "yup";

export const schema = Yup.object().shape({
    username: Yup.string()
        .required('Имя обязательно к заполнению'),
    birthdate: Yup.string()
        .required('Дата рождения обязательна к заполнению'),
    email: Yup.string()
        .required('Email обязательно к заполнению')
        .email('Email неверный'),
    favorite_food_ids:  Yup.array().defined(),
    upload_photo: Yup.mixed().nullable()

})
