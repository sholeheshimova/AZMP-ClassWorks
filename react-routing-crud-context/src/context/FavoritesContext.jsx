import React, { createContext } from 'react'
import { useState } from 'react'

export const FavoritesContext = createContext(null)

const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const toggleFavorite = (product) => {
        const found = favorites.find((p) =>p.id === product.id)
        if (found) {
            setFavorites((prev) => prev.filter((q)=> q.id !== product.id))
        }else{
            setFavorites((prev)=>[...prev, product ])
        }
    }
  return (
    <div>
      <FavoritesContext.Provider value = {{favorites, toggleFavorite}}>{children}</FavoritesContext.Provider>
    </div>
  )
}

export default FavoritesProvider
