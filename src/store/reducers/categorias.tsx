import { createSlice } from '@reduxjs/toolkit';

export interface ICategoria {
  nome: string;
  thumbnail: string;
  header: string;
  id: string;
  descricao: string;
}

const initialState: ICategoria[] = [];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategorias: (state, { payload }: { payload: ICategoria[] }) => {
      return state = payload;
    },
  },
});

export const { adicionarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;
