import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export interface Iitem {
  titulo?: string;
  descricao?: string;
  foto?: string;
  favorito?: boolean;
  preco?: number;
  categoria?: string;
  quantidade?: number;
  id: string;
}

const initialState: Iitem[] = [];

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload) {
          item.favorito = !item.favorito;
        }
        return item;
      });
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    mudarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    deletarItem: (state,  { payload }) => {
      const index = state.findIndex((item) => item.id === payload);
      state.splice(index, 1);
    },
    adicionarItens: (state, { payload }) => {
      return state = payload;
    }
  },
});

export const { mudarFavorito, cadastrarItem, mudarItem, deletarItem, adicionarItens } = itensSlice.actions;

export default itensSlice.reducer;
