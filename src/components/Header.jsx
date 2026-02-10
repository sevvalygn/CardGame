import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame } from '../store/slices/gameSlice'
import styles from './Header.module.css'

export function Header() {
  const dispatch = useDispatch()
  const gameState = useSelector((state) => state?.game) ?? {}
  const score = gameState.score ?? 0
  const isWin = gameState.isWin ?? false

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ReactJS Memory Game</h1>
      <div className={styles.scoreBar}>
        <span className={styles.scoreLabel}>Score:</span>
        <span className={styles.scoreValue}>{score}</span>
      </div>
      {isWin && (
        <div className={styles.winBanner}>
          <p>You won! All cards matched.</p>
          <button
            type="button"
            className={styles.playAgainBtn}
            onClick={() => dispatch(resetGame())}
          >
            Yeniden Oyna
          </button>
        </div>
      )}
    </header>
  )
}
