import { createSlice } from '@reduxjs/toolkit';
import { Iitem } from './itens';

const initialState: Iitem[] = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some((item: Iitem) => item.id === payload);
      if (!temItem) return [
        ...state,
        {
          id: payload,
          quantidade: 1
        }
      ]
      return state.filter((item: Iitem) => item.id !== payload);
    }
  }
})

export const { mudarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;