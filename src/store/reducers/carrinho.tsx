import { createSlice } from '@reduxjs/toolkit';
import { Iitem } from './itens';

const initialState: Iitem[] = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some((item: Iitem) => item.id === payload);
      if (!temItem)
        return [
          ...state,
          {
            id: payload,
            quantidade: 1,
          },
        ];
      return state.filter((item: Iitem) => item.id !== payload);
    },
    mudarQuantidade: (
      state: Iitem[],
      { payload }: { payload: { id: string; quantidade: number } }
    ) => {
      state = state.map((itemNoCarrinho) => {
        if (itemNoCarrinho.id === payload.id) {
          if (!itemNoCarrinho.quantidade) {
            itemNoCarrinho.quantidade = 0;
          }
          itemNoCarrinho.quantidade += payload.quantidade;
        }
        return itemNoCarrinho;
      });
    },
    resetarCarrinho: () => initialState,
  },
});

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } =
  carrinhoSlice.actions;

export default carrinhoSlice.reducer;
