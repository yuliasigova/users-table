import React, { useRef, useState, ChangeEvent } from "react";
import { Button } from "@mui/material";
import logo from '../../shared/assets/img/user-placeholder.png'


export function  InputPicture ({ register, setValue }: any) {

    const hiddenInputRef  = useRef(null);

    // const { ref: registerRef, ...rest } = register("upload_photo");
    const [preview, setPreview] = useState('');

    const handleUploadedFile = (evt:ChangeEvent<HTMLInputElement>) => {

        const file = evt.target.files?.[0];
        const urlImage = URL.createObjectURL(file);

        setPreview(urlImage);
        // hiddenInputRef.current = file
        setValue('upload_photo', file)
    };

    const onUpload = () => {
        hiddenInputRef.current.click();
    };

    return (
        <>

            <input
                type="file"
                name="upload_photo"
                className={"visually-hidden"}

                onChange={handleUploadedFile}
                // ref={(e) => {
                //     // @ts-ignore
                //     // registerRef(e);
                //     hiddenInputRef.current = e;
                // }
                // }
                ref={hiddenInputRef}



            />

            <img src={preview !== '' ? preview : logo} width={150} height={150} alt={'Аватар пользователя'}/>
            <Button variant="outlined" onClick={onUpload} >
                Загрузить
            </Button>

        </>
    );
};
