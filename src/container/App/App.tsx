import { StyledEngineProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CommentPage from 'pages/CommentPage/CommentPage'
import Favorite from 'pages/Favorite/Favorite'
import FeaturedPosts from 'pages/FeaturedPosts/FeaturedPosts'
import Home from 'pages/Home/Home'
import Recipes from 'pages/Recipes/Recipes'
import { Route, Routes } from 'react-router'

type Props = {}

const links = [
    {
        path: '/',
        title: 'Home',
        Component: Home,
    },
    {
        path: '/recipes',
        title: 'Recipes',
        Component: Recipes,
    },
    {
        path: '/favorite',
        title: 'Favorite',
        Component: Favorite,
    },
    {
        path: '/featured',
        title: 'Featured posts',
        Component: FeaturedPosts,
    },
]

const App = (props: Props) => {
    return (
        <div className='parent'>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header links={links} />
                <Routes>
                    {links.map(({ path, Component }, index) => (
                        <Route
                            id={`route_${index}`}
                            path={path}
                            element={<Component />}
                            key={index}
                        />
                    ))}
                    <Route path="/comment_page" element={<CommentPage />} />
                </Routes>
                <Footer links={links} />
            </StyledEngineProvider>
        </div>
    )
}

export default App
