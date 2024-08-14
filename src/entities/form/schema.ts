import * as Yup from "yup";

export const schema = Yup.object({
    username: Yup.string() 
        .required('Имя обязательно к заполнению'),
    birthdate: Yup.string().defined()
        .required('Дата рождения обязательна к заполнению') ,
    email: Yup.string()
        .required('Email обязателен к заполнению'),
    favorite_food_ids: Yup.array().of(Yup.string()),
    upload_photo: Yup.object().nullable()
})
