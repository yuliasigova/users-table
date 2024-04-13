export interface User {
    id: number,
    username: string,
    email:string,
    birthdate: string,
    favorite_food_ids: string[],
    photo_id: number | null,
}
