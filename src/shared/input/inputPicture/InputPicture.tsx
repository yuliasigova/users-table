import React, { useRef, useState, ChangeEvent } from "react";
import { Button } from "@mui/material";
import logo from '../../assets/img/user-placeholder.png'
import './input-picture.scss'

export function  InputPicture ( {photoId, setValue}:any) {

    const hiddenInputRef:React.MutableRefObject<HTMLInputElement | null>  = useRef(null);

    const [preview, setPreview] = useState('');
    
    const handleUploadedFile = (evt:ChangeEvent<HTMLInputElement>) => {

        const file = evt.target.files?.[0];
        const urlImage = URL.createObjectURL(file as Blob);

        setPreview(urlImage);
        setValue('upload_photo', file)
    };

    const onUpload = () => {
        hiddenInputRef.current?.click();
    };

    return (
        <div className="photo">
            <input
                type="file"
                name="upload_photo"
                className={"visually-hidden"}
                onChange={handleUploadedFile}
                ref={hiddenInputRef}
            />
            <div className="photo__wrapper">
          

           <img src={preview !== '' ? preview : logo} 
           
            width={200} 
            height={200} 
            alt={'Аватар пользователя'}
            className="photo__img"/>
            
            </div>
           
            <Button variant="outlined" onClick={onUpload} >
                Загрузить
            </Button>
        </div>
    );
};
