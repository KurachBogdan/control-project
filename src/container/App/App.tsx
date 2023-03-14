import { StyledEngineProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </ StyledEngineProvider>
    )
}

export default App
