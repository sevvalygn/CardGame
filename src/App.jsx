import React, { Component } from 'react'
import { Header } from './components/Header'
import { GameBoard } from './components/GameBoard'
import './App.css'

class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: '#c0392b', fontFamily: 'sans-serif' }}>
          <h2>Bir hata oluştu</h2>
          <pre style={{ background: '#f5f5f5', padding: '1rem', overflow: 'auto' }}>
            {this.state.error?.toString?.()}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <Header />
        <main>
          <GameBoard />
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
