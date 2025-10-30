import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pessoas2 from './Pessoas2.jsx'
import Pessoas from './Pessoas.jsx'
import Botao from './Botao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pessoas />
    <Pessoas2 />
  </StrictMode>,
)
