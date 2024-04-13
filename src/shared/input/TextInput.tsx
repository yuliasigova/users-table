import {TextField, InputLabel} from "@mui/material";
import { Controller, } from "react-hook-form";


type Search = {
    name: string,
    label?: string | undefined,
    type: string,
    control: any,
    placeholder?: string,
}

export function TextInput({name, label, type, control, placeholder}: Search) {

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({
                             field: { onChange, value },
                             fieldState: { error }

                         }) => (
                    <>
                        <InputLabel>{label}</InputLabel>
                        <TextField
                            size="medium"
                            helperText={error ? error.message : null}
                            error={!!error}
                            onChange={onChange}
                            value={value}
                            placeholder={label}
                            variant="outlined"
                            type={type}
                            fullWidth
                        />
                    </>
                )}
                />
                        </>
    )
}
