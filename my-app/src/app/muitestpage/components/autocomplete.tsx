import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { filmData } from '../data/film-data';

// Example autocomplete field

export const AutocompleteExample = () => {
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={filmData}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Movie'
        />
      )}
    />
  );
};
