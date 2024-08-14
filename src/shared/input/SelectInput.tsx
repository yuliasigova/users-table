import { InputLabel, MenuItem, Select, Chip } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Input } from './types';
// import { useFoodsList } from '../hooks/useFoodsList';
import { foods } from './types';
import { ReactNode } from 'react';

export function SelectInput({ name, control }: Input) {
  //   const foodList = useFoodsList();
  //   const foodsLabel = Object.entries(foodList);
  const foodsLabel = Object.entries(foods);

  return (
    <>
      <InputLabel>Любимая еда</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} defaultValue={value} multiple>
            {foodsLabel.map((option: Array<string>) => (
              <MenuItem key={option[0]} value={option[0]}>
                {option[1]}
              </MenuItem>
            ))}
          </Select>
        )}
        control={control}
        name={name}
      />
    </>
  );
}
