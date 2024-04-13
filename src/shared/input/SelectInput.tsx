import {InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import {useGetFoodListQuery} from "../../app/api/usersApi";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFoodList, selectFoodList} from "../../app/api/userSlice";
import {MenuItem} from "@mui/material";
import {FormControl, Select} from "@mui/material";


type Search = {
    name: string,
    label?: string | undefined,
    control: any,
}
export function SelectInput({name , control, label}: Search) {
    const {data: foods} =  useGetFoodListQuery('')


    const dispatch = useDispatch();
    dispatch(getFoodList(foods))
    const foodList  = useSelector(selectFoodList)
    const foodsLabel = foodList && Object.entries(foodList) ;

    const generateSingleOptions = () => {
        return foodList && foodsLabel.map((option: any) => {
            return (
                <MenuItem key={option[0]} value={option[0]}>
                    {option[1]}
                </MenuItem>
            );
        });
    };
    return (
        < >
            <InputLabel>Любимая еда</InputLabel>
            <Controller
                render={({ field: { onChange, value } }) => (
                    <Select onChange={(onChange)} value={value}    multiple>
                        {generateSingleOptions()}
                    </Select>
                )}
                control={control}
                name={name}
            />
        </>
    );
};


