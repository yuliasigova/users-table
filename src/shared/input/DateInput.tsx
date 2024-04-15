import {DatePicker} from "@mui/x-date-pickers";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Controller} from "react-hook-form";
import {InputLabel} from "@mui/material";
import dayjs from "dayjs";
import 'dayjs/locale/de';
import { Input } from "./types";

export function DateInput({ name ,control, label, value } : Input) {
    console.log(dayjs(new Date()))
    console.log(dayjs('2019-01-25'))
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { onChange, value } , fieldState: {error}}) => (
                        <>
                            <InputLabel>{label}</InputLabel>
                            <DatePicker onChange={onChange}
                                        views={['day', 'month', 'year']}
                                       
                                        slotProps={{
                                            textField: {
                                                helperText: error ? error.message : null,
                                                // value:  dayjs(value),
                                                // value: dayjs(dayjs(value).toDate()),
                                                
                                                margin:'normal'
                                            },
                                        }}
                                        maxDate={dayjs(new Date())} />
                        </>

                    )}
                />
            </LocalizationProvider>

    )
}
