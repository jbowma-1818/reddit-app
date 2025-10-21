import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: '',
    reducers: {
        setSearchBarTerm: (state, action) => state = action.payload,
        clearSearchBarTerm: (state) => state = '',
    }
});

export const { setSearchBarTerm, clearSearchBarTerm } = searchBarSlice.actions;

export const selectSearchBarTerm = state => state.searchBar;

export default searchBarSlice.reducer;