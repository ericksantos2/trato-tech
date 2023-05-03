import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from '../../services/categorias';

export interface ICategoria {
  nome?: string;
  thumbnail?: string;
  header?: string;
  id?: string;
  descricao?: string;
}

const initialState: ICategoria[] = [];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
)

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      buscarCategorias.fulfilled,
      (_, { payload }) => {
        return payload;
      }
    )
  }
});

export default categoriasSlice.reducer;
