import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import {
  useKeywordFilter,
  useSpaceFlightNewsActions,
} from '../../../state/articles.state';
import { ReactComponent as SearchIcon } from '../../../resources/svg/icons/search-icon.svg';
import './Search.css'

export const Search = () => {
  const keyword = useKeywordFilter();
  const { changeKeyword } = useSpaceFlightNewsActions();

  return (
    <div>
      <header className="app__header">
        <h1 className="app__title">
          <p>Filter by keywords</p>
        </h1>
      </header>
     
      <div className="search-box">
        <TextField
          id="outlined-start-adornment"
          sx={{ width: '336px',  }}
          
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={keyword}
          onChange={(event) => {
            changeKeyword(event.target.value);
          }}
        />
       
      </div>
  
    </div>
    
  );
};
