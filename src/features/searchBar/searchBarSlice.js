import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => state = action.payload,
        clearSearchTerm: (state) => state = '',
    }
});

export const { setSearchBarTerm, clearSearchTerm } = searchBarSlice.actions;

export const selectSearchBarTerm = state => state.searchBar;

export default searchBarSlice.reducer;