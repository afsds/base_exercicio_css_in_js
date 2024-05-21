import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './Containers/ListaVagas'

import themeOrigin from './Containers/theme/origin'

import Cabecalho from './components/Cabecalho'
import EstiloGlobal, { Containers } from './styles'

function App() {
  return (
    <ThemeProvider theme={themeOrigin}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Containers>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
