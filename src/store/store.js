import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    // Esto es lo que eliminamos del export default en el slice
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
})
