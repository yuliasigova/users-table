import {useForm} from "react-hook-form";
import {TextInput} from "../../shared/input/TextInput";
import {DateInput} from "../../shared/input/DateInput";
import {SelectInput} from "../../shared/input/SelectInput";
import { yupResolver } from "@hookform/resolvers/yup"
import {schema} from "./schema";
import {Button} from "@mui/material";
import {InputPicture} from "../../shared/input/InputPicture";


export function RegisterForm ({defaultValues, onSubmit}) {
    
    const {
        handleSubmit,
        control,
        getValues,
        register,
        setValue,
        formState:{errors}} = useForm(
        {
            resolver: yupResolver(schema),
            mode: 'onChange',
            defaultValues: defaultValues
        }
    )

    return (
    
        <form onSubmit = {handleSubmit(onSubmit)} className={'form'}>
            <div className={'form__photo'}>
               <InputPicture setValue={setValue}/>

            </div>

            <TextInput type={'text'} name={'username'} label={'Имя'} control={control}/>
            <TextInput type={'email'} name={'email'} label={'Email'} control={control}/>
            <DateInput name={'birthdate'} control={control} label={'Дата рождения'}/>
            <SelectInput name={'favorite_food_ids'} control={control}></SelectInput>

            <Button variant="contained" type={'submit'} > Отправить </Button>
        </form>
    )
}
