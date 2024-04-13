export const API_URL = 'http://tasks.tizh.ru/v1/user'

export enum AppRoute {
    Main = '/',
    Profile = '/user/:userId',
    AddProfile ='/add-profile',
    ChangeProfile = '/change-profile/:userId',
}
