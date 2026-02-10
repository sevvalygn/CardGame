import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkMatch, flipBack } from '../store/slices/gameSlice'
import { Card } from './Card'
import styles from './GameBoard.module.css'

export function GameBoard() {
  const dispatch = useDispatch()
  const gameState = useSelector((state) => state?.game)
  const grid = gameState?.grid ?? []
  const flippedIds = gameState?.flippedIds ?? []

  useEffect(() => {
    if (flippedIds.length !== 2) return
    const timer = setTimeout(() => {
      const [id1, id2] = flippedIds
      const c1 = grid.find((c) => c && c.id === id1)
      const c2 = grid.find((c) => c && c.id === id2)
      if (c1?.symbol === c2?.symbol) {
        dispatch(checkMatch())
      } else {
        dispatch(flipBack())
      }
    }, 800)
    return () => clearTimeout(timer)
  }, [flippedIds, grid, dispatch])

  if (!Array.isArray(grid) || grid.length === 0) {
    return <div style={{ padding: '1rem', textAlign: 'center' }}>Yükleniyor...</div>
  }

  return (
    <div className={styles.board}>
      {grid.map((cell, index) =>
        cell ? (
          <Card key={cell.id} card={cell} />
        ) : (
          <div key={`empty-${index}`} className={styles.emptySlot} />
        )
      )}
    </div>
  )
}
