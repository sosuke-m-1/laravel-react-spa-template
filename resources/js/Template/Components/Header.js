import { NavLink } from "react-router-dom";
import { css } from "@emotion/css";
import variables from '../variables'

const header = css({
    background: variables.themeColor,
    padding: '10px 0',
    color: 'white'
})
const wrapper = css({
    padding: variables.wrapperPadding,
    display: 'flex',
    justifyContent: 'space-between'
})
const headerLeft = css({
    fontWeight: 'bold'
})
const headerRight = css({

})
const active = css({
    color: variables.accentColor
})
const headerItem = css({
    margin: '0 0 0 10px'
})


export default function Header() {
    return (
        <header className={header}>
            <div className={wrapper}>
                <div className={headerLeft}>
                    <NavLink to="/">WorldWideWords</NavLink>
                </div>
                <nav className={headerRight}>
                    <NavLink exact to="/" activeClassName={active} className={headerItem}>Search</NavLink>
                    <NavLink exact to="/export" activeClassName={active} className={headerItem}>Export</NavLink>
                    <NavLink exact to="/doc" activeClassName={active} className={headerItem}>Documents</NavLink>
                </nav>
            </div>
        </header>
    );
}
