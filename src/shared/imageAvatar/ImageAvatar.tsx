import logo from '../../shared/assets/img/user-placeholder.png'

interface ImageAvatar {
    className: string,
    width: number,
    height: number;
    photoId?: number | null
}

export const IMG_URL = 'http://tasks.tizh.ru/file/get?id='

export function ImageAvatar({className, width, height, photoId}: ImageAvatar) {
    return (
     <img   className={className} src={ photoId  ? `${IMG_URL}${photoId}` : logo}
            width={width} height={height} alt={'аватар пользователя'}/>
    )
}
