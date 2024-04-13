export interface UserForm {
    username: string,
    email:string,
    birthdate: string,
    favorite_food_ids: (string | undefined)[] | undefined,
    upload_photo: {  } | null | undefined
}

export const defaultValues = {
        username: '',
        email: '',
        birthdate: '',
        favorite_food_ids: [],
        upload_photo: null

} as UserForm
