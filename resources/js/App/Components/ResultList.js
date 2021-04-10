import { css } from '@emotion/css';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../../stores/wordSlice'

const ul = css({
    width: '100%'
})

export default function ResultList() {
    const list = [];
    const data = useSelector(selectData);
    const mounted = useRef(false)

    useEffect(() => {
        if (mounted.current && !list.length) {
            console.log('該当する単語が見つかりませんでした');
        } else {
            mounted.current = true
        }
    })

    for (const language in data) {
        list.push(
            <li key={language} >
                {language}
                <ul>
                    {
                        data[language].map((concept, index) => {
                            return (
                                <li key={index}>
                                    {'概念' + (index + 1) + '：'}
                                    <ul>
                                        {concept.map((WordModel, index) => {
                                            return (
                                                <li key={index}>
                                                    {WordModel.word}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })
                    }
                </ul>
            </li>
        );
    }

    return (
        <ul className={ul}>
            {list}
        </ul>
    );
}
