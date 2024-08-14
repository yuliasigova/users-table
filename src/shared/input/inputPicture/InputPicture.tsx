import React, { useRef, useState, ChangeEvent } from 'react';
import logo from '../../assets/img/user-placeholder.png';
import './input-picture.scss';
import { IMG_URL } from '../../imageAvatar/ImageAvatar';

export function InputPicture({ photoId, setValue }: any) {
  const hiddenInputRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  const urlPhotoUser = photoId && `${IMG_URL}${photoId}`;
  const [preview, setPreview] = useState('');

  const changeAvatar = () => {
    if ((photoId !== undefined || photoId !== null) && preview === '') {
      return urlPhotoUser;
    }
    if (preview !== '' && (photoId === undefined || photoId === null)) {
      return preview;
    }
    if ((photoId === undefined || photoId === null) && preview === '') {
      return undefined;
    }
    if (preview !== '' && (photoId !== undefined || photoId !== null)) {
      return preview;
    }
    return undefined;
  };
  const avatar = changeAvatar();

  const handleUploadedFile = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];
    const urlImage = URL.createObjectURL(file as Blob);

    setPreview(urlImage);
    setValue('upload_photo', file);
  };

  return (
    <div className="photo">
      <div className="photo__wrapper">
        <img
          src={avatar !== undefined && avatar !== null ? avatar : logo}
          width={200}
          height={200}
          alt={'Аватар пользователя'}
          className="photo__img"
        />
      </div>
      <label className="photo__label">
        <input
          type="file"
          name="upload_photo"
          className={'visually-hidden'}
          onChange={handleUploadedFile}
          ref={hiddenInputRef}
        />
        Загрузить
      </label>
    </div>
  );
}
