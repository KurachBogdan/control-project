import { StyledEngineProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Categories from 'pages/Categories/Categories'
import Favorite from 'pages/Favorite/Favorite'
import FeaturedPosts from 'pages/FeaturedPosts/FeaturedPosts'
import Home from 'pages/Home/Home'
import Recipes from 'pages/Recipes/Recipes'
import { Route, Routes } from 'react-router'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="recipes" element={<Recipes />} />
                <Route path="categories" element={<Categories />} />
                <Route path="favorite" element={<Favorite />} />
                <Route path="featured" element={<FeaturedPosts />} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
