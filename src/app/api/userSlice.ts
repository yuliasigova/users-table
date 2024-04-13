import { createSlice} from "@reduxjs/toolkit";

type InitialState = {
    sortType: string,
    search: {},
    foodList: {}
}

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        sortType: '',
        search: {
            'UserSearch[id]': '',
            'UserSearch[username]': '',
            'UserSearch[email]': '',
            'UserSearch[birthdateStart]': '',
            'UserSearch[birthdateEnd]': ''
          },
        foodList: {}
    } as InitialState,
    reducers: {
        changeSort: (state, action) => {

            state.sortType = action.payload
        },
        searchUser: (state, action) => {
            state.search = action.payload
        },
        getFoodList: (state, action) => {
            state.foodList = action.payload
        },
    },
    selectors: {
        selectSort: state => state.sortType,
        selectSearch: state => state.search,
        selectFoodList: state => state.foodList,
    },
})
export const {changeSort, searchUser, getFoodList} = userSlice.actions

export const {selectSort, selectFoodList, selectSearch} = userSlice.selectors
export default userSlice.reducer
