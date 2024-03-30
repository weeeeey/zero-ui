'use client';

import React, { useEffect, useMemo } from 'react';

export const RandomPage = () => {
    const ref = React.useRef<HTMLDivElement>(null);

    const paragraph = useMemo(
        () => (element: HTMLDivElement) => {
            const array = element.innerText.split('');
            const special = ['~', '@', '!', '#', '$', '%', '^', '&', '*'];
            const exception = [' ', '\n', '.', ','];

            const numArray: number[] = [];

            const random = (min: number, max: number) =>
                Math.floor(Math.random() * (max - min)) + 1;

            array.forEach(() => {
                const num = random(5, 40);
                numArray.push(num);
            });

            let completeCount: number = 0;
            let newText: string = '';

            const timer = setInterval(() => {
                completeCount = 0;
                newText = '';
                numArray.forEach((num, i) => {
                    if (exception.includes(array[i]) || numArray[i] === 0) {
                        newText += array[i];
                        completeCount += 1;
                    } else {
                        newText += special[numArray[i] % special.length];
                        numArray[i] = --num;
                    }
                });

                element.innerText = newText;
                if (completeCount === numArray.length) clearInterval(timer);
            }, 100);
        },
        []
    );

    useEffect(() => {
        if (!ref.current) return;
        paragraph(ref.current);
    }, [paragraph]);
    return (
        <div ref={ref}>
            MainPage AKWMXI! MainPage AKWMXI! MainPage AKWMXI! MainPage AKWMXI!
        </div>
    );
};
