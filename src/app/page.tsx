"use client";
import { ChangeEvent, useState } from 'react';

export default function Home() {
    const [result, setResult] = useState('result');
    let unixTimestamp: number;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        fillUnixTimeVariableWithEnteredValue(Number(value));
    };

    function fillUnixTimeVariableWithEnteredValue(unixTimeEntered: number) {
        unixTimestamp = unixTimeEntered;
    }

    const updateResult = (value: string) => {
        setResult(value);
    }

    function convertUnixTimeAndDisplayResult() {
        let dateObj = new Date(unixTimestamp * 1000);
        let options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        let formatter = new Intl.DateTimeFormat('de-DE', options);
        let formattedTime = formatter.format(dateObj);
        updateResult(formattedTime);
    }

    return (
        <>
            <h1>Convert unix time to normal time</h1>
            <input placeholder="enter unix time" type="number" onChange={handleChange} />
            <button onClick={convertUnixTimeAndDisplayResult}>convert time</button>
            <h2>{result}</h2>
        </>
    );
}