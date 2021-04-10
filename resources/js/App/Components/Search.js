import { css } from '@emotion/css';
import { useSelector, useDispatch } from 'react-redux';
import { selectWordlist, selectWord, setWord } from '../../stores/wordSlice'
import variables from '../../Template/variables';

const input = css({
    border: '1px solid #333',
    padding:'5px 10px',
    '&:focus': variables.onFocus
})

export default function Search() {
    const wordList = useSelector(selectWordlist);
    const word = useSelector(selectWord);
    const dispatch = useDispatch();
    const datalist = [];

    const handleInput = (event) => {
        dispatch(setWord(event.target.value))
    }

    for (const key in wordList) {
        datalist.push(
            <option value={wordList[key].word} key={key}></option>
        )
    }
    return (
        <>
            <input autoComplete="off" type="search" name="search" list="word-list" onChange={handleInput} value={word} className={input} />
            <datalist id="word-list">
                {datalist}
            </datalist>
        </>
    )
}
