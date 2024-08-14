import { TextField, InputLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Input } from './types';

export function TextInput({ name, label, type, control }: Input) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <InputLabel>{label}</InputLabel>
            <TextField
              size="medium"
              helperText={error ? error.message : null}
              error={!!error}
              onChange={onChange}
              placeholder={label}
              variant="outlined"
              type={type}
              fullWidth
              margin="normal"
              defaultValue={value}
            />
          </>
        )}
      />
    </>
  );
}
