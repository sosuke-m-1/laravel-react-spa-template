import { css } from '@emotion/css';
import { useDispatch } from 'react-redux';
import { search } from '../stores/wordSlice'
import variables from '../Template/variables';
import LanguageSelect from './Components/LanguageSelect';
import ResultList from './Components/ResultList';
import Search from './Components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const content = css({
    margin: variables.contentMargin
})
const wrapper = css({
    padding: variables.wrapperPadding,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
})
const form = css({
    display: 'flex',
    justifyContent: 'center',
})
const button = css({
    borderRadius: '0 100px 100px 0',
    padding: '0 15px 0 10px',
    border: '1px solid #333',
    borderLeft: 'none',
    background: variables.accentColor,
    cursor: 'pointer',
    '&:focus': variables.onFocus
})

export default function App() {
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(search())
    }

    return (
        <section className={content}>
            <div className={wrapper}>
                <div className={form}>
                    <LanguageSelect />
                    <Search />
                    <button onClick={handleSearch} className={button}><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <ResultList />
            </div>
        </section>
    );
}
