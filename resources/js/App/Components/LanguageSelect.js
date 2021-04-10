import { css } from '@emotion/css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage, fetch, setLanguage } from '../../stores/wordSlice'
import variables from '../../Template/variables';

const select = css({
    padding: '5px 15px 5px 20px',
    borderRadius: '100px 0 0 100px',
    borderRight: 'none',
    cursor: 'pointer',
    '&:focus': variables.onFocus,
})

export default function LanguageSelect() {
    const lang = useSelector(selectLanguage);
    const dispatch = useDispatch();
    const handleLanguageChange = (event) => {
        dispatch(setLanguage(event.target.value))
    }

    useEffect(() => {
        dispatch(fetch())
    }, [lang]);

    return (
        <select value={lang} onChange={handleLanguageChange} className={select}>
            <option value="english">english</option>
            <option value="japanese">japanese</option>
            <option value="french">french</option>
        </select>
    );
}
