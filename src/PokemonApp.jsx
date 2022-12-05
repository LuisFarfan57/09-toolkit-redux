import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

export const PokemonApp = () => {
  const { isLoading, nextPage, pokemons } = useSelector((state) => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? 'true' : 'false'}</span>

      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button
        onClick={() => dispatch(getPokemons(nextPage))}
      >
        Next
      </button>
    </>
  )
}
