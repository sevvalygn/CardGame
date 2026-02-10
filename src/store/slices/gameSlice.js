import { createSlice } from '@reduxjs/toolkit'

const SYMBOLS = ['🍎', '🍋', '🍇', '🍓', '🍑', '🍒', '🥝', '🍊', '🍉', '🫐', '🍈', '🥭']
const GRID_SIZE = 25 // 5x5
const PAIRS_COUNT = 12 // 24 kart, 1 boş slot

function createShuffledGrid() {
  const pairs = []
  for (let i = 0; i < PAIRS_COUNT; i++) {
    const symbol = SYMBOLS[i]
    pairs.push(
      { id: i * 2, pairId: i, symbol, isFlipped: false, isMatched: false },
      { id: i * 2 + 1, pairId: i, symbol, isFlipped: false, isMatched: false }
    )
  }
  const shuffled = pairs.sort(() => Math.random() - 0.5)
  const grid = [...shuffled, null].sort(() => Math.random() - 0.5)
  return grid
}

const initialState = {
  grid: createShuffledGrid(),
  flippedIds: [],
  score: 0,
  isWin: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    flipCard: (state, action) => {
      const id = action.payload
      const cell = state.grid.find((c) => c && c.id === id)
      if (!cell || cell.isMatched || cell.isFlipped) return
      if (state.flippedIds.length >= 2) return

      cell.isFlipped = true
      state.flippedIds.push(id)
    },
    checkMatch: (state) => {
      if (state.flippedIds.length !== 2) return
      const [id1, id2] = state.flippedIds
      const card1 = state.grid.find((c) => c && c.id === id1)
      const card2 = state.grid.find((c) => c && c.id === id2)
      if (card1 && card2 && card1.symbol === card2.symbol) {
        card1.isMatched = true
        card2.isMatched = true
        state.score += 50
        state.isWin = state.grid.every((c) => c == null || c.isMatched)
      } else {
        state.score -= 10
      }
      state.flippedIds = []
    },
    flipBack: (state) => {
      state.flippedIds.forEach((id) => {
        const cell = state.grid.find((c) => c && c.id === id)
        if (cell && !cell.isMatched) cell.isFlipped = false
      })
      state.flippedIds = []
    },
    resetGame: () => ({
      grid: createShuffledGrid(),
      flippedIds: [],
      score: 0,
      isWin: false,
    }),
  },
})

export const { flipCard, checkMatch, flipBack, resetGame } = gameSlice.actions

export default gameSlice.reducer
