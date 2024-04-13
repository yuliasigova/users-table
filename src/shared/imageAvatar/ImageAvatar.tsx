import logo from '../../shared/assets/img/user-placeholder.png'

type ImageAvatar = {
    className: string,
    width: number,
    height: number;
    photoId?: number | null
}

const IMG_URL = 'http://tasks.tizh.ru/file/get?id='

export function ImageAvatar({className, width, height, photoId}: ImageAvatar) {
    return (
     <img   className={className} src={ photoId  ? `${IMG_URL}${photoId}` : logo}
            width={width} height={height} alt={'аватар пользователя'}/>
    )
}
