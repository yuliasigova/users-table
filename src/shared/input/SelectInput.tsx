import {InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import {MenuItem, Select} from "@mui/material";
import { Input } from "./types";
import { useFoodsList } from "../hooks/useFoodsList";

export function SelectInput({name , control, value}: Input) {
    const foodList  = useFoodsList()
    const foodsLabel = foodList && Object.entries(foodList) ;
   
    return (
        < >
            <InputLabel>Любимая еда</InputLabel>
            <Controller
                render={({ field: { onChange , value} }) => (
                    <Select onChange={(onChange)} 
                    defaultValue={value }   
                     multiple
                    >
                      {foodsLabel?.map((option: any) => {
                    return (
                <MenuItem key={option[0]} value={option[0]}>
                    {option[1]}
                </MenuItem>
            );
        })});
                    </Select>
                )}
                control={control}
                name={name}
            />
        </>
    );
};


