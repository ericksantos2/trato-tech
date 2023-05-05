import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from '../../services/categorias';
import { createStandaloneToast } from '@chakra-ui/toast';
import { resetarCarrinho } from './carrinho';

const { toast } = createStandaloneToast();

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
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarCategorias.fulfilled, (_, { payload }) => {
        toast({
          title: 'Sucesso!',
          description: 'Categorias carregadas com sucesso!',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        return payload;
      })
      .addCase(buscarCategorias.pending, (state, { payload }) => {
        toast({
          title: 'Carregando',
          description: 'Carregando categorias',
          status: 'loading',
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(buscarCategorias.rejected, (state, { payload }) => {
        toast({
          title: 'Erro',
          description: 'Erro na busca de categorias',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(resetarCarrinho.type, () => {
        toast({
          title: 'Sucesso!',
          description: 'Compra realizada com sucesso!',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      });
  },
});

export default categoriasSlice.reducer;
