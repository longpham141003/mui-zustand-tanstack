import { TextField, InputAdornment  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <>
      <TextField 
        sx={{
          ml: 8,
          width: "500px",
          "& .MuiInputBase-root": { height: "40px", display: "flex", textAlign: "center" },
          "& .MuiInputLabel-root": {
            fontSize: "0.8rem",
            top: "50%",
            left: "4%",
            transform: "translateY(-50%)"
          },
        }}
        id="outlined-basic"
        variant="outlined"
        placeholder="Tìm kiếm"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}

export default Search;
