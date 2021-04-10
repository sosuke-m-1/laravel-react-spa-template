import Header from './Components/Header';
import Footer from './Components/Footer';
import { css } from '@emotion/css';
import variables from './variables';

const contents = css({
    minHeight: '100vh',
    paddingBottom: variables.footerHeight
});

export default function Template(props) {
    return (
        <section className={contents}>
            <Header />
            {props.children}
            <Footer />
        </section>
    );
}
