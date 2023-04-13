import { createSlice } from '@reduxjs/toolkit';

interface ICarrinho {
  id: string,
  quantidade: number
}

const initialState: any = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some((item: any) => item.id === payload);
      if (!temItem) return [
        ...state,
        {
          id: payload,
          quantidade: 1
        }
      ]
      return state.filter((item: any) => item.id !== payload);
    }
  }
})

export const { mudarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;