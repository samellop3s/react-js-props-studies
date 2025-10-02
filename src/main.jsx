import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pessoas from './Pessoas.jsx'
import Botao from './Botao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pessoas />
    <Botao />
  </StrictMode>,
)
