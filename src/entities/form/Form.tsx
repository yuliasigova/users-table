import {useForm} from "react-hook-form";
import {TextInput} from "../../shared/input/TextInput";
import {DateInput} from "../../shared/input/DateInput";
import {SelectInput} from "../../shared/input/SelectInput";
import { yupResolver } from "@hookform/resolvers/yup"
import {schema} from "./schema";
import {InputPicture} from "../../shared/input/inputPicture/InputPicture";
import './form.scss'
import { UserForm } from "./userForm";

type Props = {
    defaultValues: UserForm,
    onSubmit: any,
    photoId?: number | null
    
}

export function RegisterForm ({defaultValues, onSubmit, photoId}: Props) {
    const {
        handleSubmit,
        control,
        setValue,
        formState:{errors}} = useForm(
        {
            resolver: yupResolver(schema),
            mode: 'onSubmit',
            defaultValues: defaultValues
        }
    ) 
    return (
    
        <form onSubmit = {handleSubmit(onSubmit)} className={'form'}>
            <InputPicture setValue={setValue} photoId = {photoId}/>

            <TextInput 
            type={'text'} name={'username'} label={'Имя'} control={control}
            value={setValue('username', defaultValues.username)}
             />
         
            <TextInput 
            value={setValue('email', defaultValues.email)}
            type={'email'} name={'email'} label={'Email'} control={control}
            />
           
            <DateInput name={'birthdate'} control={control} label={'Дата рождения'}
            // value={setValue('birthdate', defaultValues.birthdate)}
            />
       
            <SelectInput name={'favorite_food_ids'} control={control}></SelectInput>
         
            <button className={"btn"} type={'submit'} > Отправить </button>
        </form>
    )
}
