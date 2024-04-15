import { useSelector, useDispatch} from "react-redux";
import { selectFoodList, getFoodList } from "../../app/api/userSlice";
import { useGetFoodListQuery } from "../../app/api/usersApi";

export function useFoodsList () {
    const {data: foods={}, isSuccess} = useGetFoodListQuery('')
    const dispatch = useDispatch()
   if (isSuccess) {
        dispatch(getFoodList(foods))} 
    const foodsList = useSelector(selectFoodList)
    return foodsList
}