import React from 'react'
import { useDispatch } from 'react-redux'
import { flipCard } from '../store/slices/gameSlice'
import styles from './Card.module.css'

export function Card({ card }) {
  const dispatch = useDispatch()
  const showFront = card.isFlipped || card.isMatched

  const handleClick = () => {
    if (card.isMatched || card.isFlipped) return
    dispatch(flipCard(card.id))
  }

  return (
    <button
      type="button"
      className={`${styles.card} ${showFront ? styles.flipped : ''}`}
      onClick={handleClick}
      disabled={card.isMatched}
    >
      <div className={styles.inner}>
        <div className={styles.back}>?</div>
        <div className={styles.front}>{card.symbol}</div>
      </div>
    </button>
  )
}
