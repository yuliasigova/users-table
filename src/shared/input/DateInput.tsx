import {DatePicker} from "@mui/x-date-pickers";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Controller} from "react-hook-form";
import {InputLabel} from "@mui/material";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import { Input } from "./types";


export function DateInput({ name ,control, label} : Input) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}   adapterLocale="ru">
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { onChange, value } , fieldState: {error}}) => (
                     
                        <>
                            <InputLabel>{label}</InputLabel>
                            <DatePicker onChange={onChange}
                                        views={['day', 'month', 'year']}
                                        defaultValue={dayjs(value as string, "DD.MM.YYYY")}
                                      
                                        slotProps={{ 
                                            textField: {
                                                helperText:error ? error.message : null,
                                                error: !!error,
                                                margin:'normal',  
                                            },
                                        }}
                                       
                                    
                                        maxDate={dayjs(new Date())} 
                            />
                        </>
 
                    )}
                    />
                    </LocalizationProvider>
            

    )
}
