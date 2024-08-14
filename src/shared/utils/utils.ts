import dayjs from 'dayjs';

export const serializeDate = (date: string) => {
  return dayjs(date).format('DD.MM.YYYY');
};
