import './Footer.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <div className="footer_container">
                <Logo />
                <div className="footer_menu_margin">
                    <Menu
                        home="Home"
                        recipes="Recipes"
                        categories="Categories"
                        favorite="Favorite"
                        featured_posts="Featured posts"
                    />
                </div>
                <div className="icons_container">
                    <div className="first_background"></div>
                    <div className="second_background"></div>
                    <div className="third_background"></div>
                    <div className="fourth_background"></div>
                    <div className="fifth_background"></div>
                    <div className="sixth_background"></div>
                </div>
                <div className="border"></div>
                <p>@2019 Logwork. All Right Reserved.</p>
            </div>
        </>
    )
}

export default Footer
