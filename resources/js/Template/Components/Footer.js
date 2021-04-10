import { css } from "@emotion/css";
import variables from '../variables'

const footer = css({
    position: 'absolute',
    display: 'flex',
    background: variables.themeColor,
    color: 'white',
    padding: '10px 0',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: variables.footerHeight,
    fontSize: '0.8rem'
});

export default function Footer() {
    return (
        <footer className={footer}>
            footer
        </footer>
    );
}
