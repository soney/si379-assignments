import React from 'react';
import './App.css';

async function getRhymingWords(word) {
    const response = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}`);
    const data = await response.json();
    return data;
}

async function getSimilarWords(word) {
    const response = await fetch(`https://api.datamuse.com/words?ml=${word}`);
    const data = await response.json();
    return data;
}

export default function App() {
    const initialWordInputRef = React.useRef();
    const guessWordInputRef = React.useRef();
    const [targetWord, setTargetWord] = React.useState(false);
    const [targetRhymes, setTargetRhymes] = React.useState([]);
    const [targetSimilarWords, setTargetSimilarWords] = React.useState([]);
    const [matches, setMatches] = React.useState([]);
    const [score, setScore] = React.useState(0);

    const doSubmitInitialWord = React.useCallback(async () => {
        const word = initialWordInputRef.current.value;
        const rhymingWords = await getRhymingWords(word);
        const similarWords = await getSimilarWords(word);

        if(rhymingWords.length === 0 && similarWords.length === 0) {
            alert("No rhymes or similar words found");
            return;
        } else {
            setTargetWord(word);
            setTargetRhymes(rhymingWords);
            setTargetSimilarWords(similarWords);
        }
    }, []);

    const onKeyDownInitialWord = React.useCallback((event) => {
        if (event.key === 'Enter') {
            doSubmitInitialWord();
        }
    }, [doSubmitInitialWord]);


    const doSubmitGuess = React.useCallback(async () => {
        const guessWord = guessWordInputRef.current.value;
        const newMatches = [...matches];
        let newScore = score;
        let foundMatch = false;
        for(const {word, score} of targetRhymes) {
            if(word.toLowerCase() === guessWord.toLowerCase()) {
                newMatches.push({word, score, reason: "rhyme"});
                newScore += score;
                foundMatch = true;
            } 
        }
        for(const {word, score} of targetSimilarWords) {
            if(word.toLowerCase() === guessWord.toLowerCase()) {
                newMatches.push({word, score, reason: "similar"});
                newScore += score;
                foundMatch = true;
            }
        }
        if(foundMatch) {
            setMatches(newMatches);
            setScore(newScore);
        }
        guessWordInputRef.current.value = "";
    }, [matches, score, targetRhymes, targetSimilarWords]);

    const onKeyDownGuess = React.useCallback((event) => {
        if (event.key === 'Enter') {
            doSubmitGuess();
        }
    }, [doSubmitGuess]);

    return <div id="app">
        {targetWord === false && <p>Enter a word to start:</p> }
        {targetWord === false && <input id="initialWordInput" onKeyDown={onKeyDownInitialWord} type="text" ref={initialWordInputRef} /> }
        {targetWord === false && <button id="submitInitialWord" onClick={doSubmitInitialWord}>Go</button> }

        {targetWord !== false && <p id="task-description">Enter as many words as you can that <em>rhyme</em> or <em>mean something like</em> <strong>{targetWord}</strong></p> }

        {targetWord !== false && <div>
            <div id="score">Score: {score}</div>
            <input id="guessInput" type="text" ref={guessWordInputRef} onKeyDown={onKeyDownGuess}/>
            <button id="submitGuess" onClick={doSubmitGuess}>Go</button>
            <ul id="matches">
                {matches.map((match, index) => <li key={index}>{match.word} ({match.reason})</li>)}
            </ul>
        </div> }
    </div>;
}
