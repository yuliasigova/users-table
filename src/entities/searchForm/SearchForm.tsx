import { TextField, InputLabel } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { selectSearch, searchUser } from '../../app/api/userSlice';
import './form-search.scss';

export function SearchForm() {
  const search = useSelector(selectSearch);
  const [values, setValues] = useState(search);
  const dispatch = useDispatch();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDateStartChange = (evt: ChangeEvent<HTMLInputElement | null>) => {
    // @ts-ignore
    const dateStart = evt?.format('DD.MM.YYYY');
    setValues({
      ...values,
      'UserSearch[birthdateStart]': dateStart,
    });
  };

  const handleDateEndChange = (evt: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const dateEnd = evt?.format('DD.MM.YYYY');
    setValues({
      ...values,
      'UserSearch[birthdateEnd]': dateEnd,
    });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(searchUser(values));
    }
  };

  return (
    <form className={'form-search'}>
      <InputLabel>Поиск по id</InputLabel>
      <TextField
        name="UserSearch[id]"
        type="number"
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        margin="normal"></TextField>

      <InputLabel>Поиск по имени</InputLabel>
      <TextField
        name="UserSearch[username]"
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        type="search"
        margin="normal"></TextField>
      <InputLabel>Поиск по email</InputLabel>
      <TextField
        name="UserSearch[email]"
        type="search"
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        margin="normal"></TextField>

      <InputLabel>Поиск по дате рождения</InputLabel>

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
        <span className="form-search__date"> Начальная дата</span>
        <DatePicker
          // @ts-ignore
          onChange={handleDateStartChange}
          slotProps={{
            textField: {
              onKeyDown: onKeyDown,
            },
          }}
          name="UserSearch[birthdateStart]"
          format={'DD.MM.YYYY'}
          views={['day', 'month', 'year']}
          maxDate={dayjs(new Date())}
        />

        <span className="form-search__date"> Конечная дата</span>
        <DatePicker
          name="UserSearch[birthdateEnd]"
          // @ts-ignore
          onChange={handleDateEndChange}
          views={['day', 'month', 'year']}
          format={'DD.MM.YYYY'}
          slotProps={{
            textField: {
              onKeyDown: onKeyDown,
            },
          }}
          maxDate={dayjs(new Date())}
        />
      </LocalizationProvider>
    </form>
  );
}
