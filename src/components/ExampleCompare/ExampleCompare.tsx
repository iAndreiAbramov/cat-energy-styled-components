import React, { ChangeEvent, EventHandler, useCallback, useState } from 'react';

import * as S from './ExampleCompare.styled';
import { ProgressWrapperDrag, ProgressWrapperToggle } from './ExampleCompare.styled';

export const ExampleCompare: React.FC = () => {
    const [progressValue, setProgressValue] = useState(0);

    const handleBeforeClick = useCallback(() => {
        setProgressValue(0);
    }, []);

    const handleAfterClick = useCallback(() => {
        setProgressValue(1);
    }, []);

    const handleRangeChange: EventHandler<ChangeEvent<HTMLInputElement>> = useCallback((evt) => {
        setProgressValue(Number(evt.currentTarget.value));
    }, []);

    return (
        <>
            <S.CompareWrapperToggle>
                <S.ImageWrapperToggle>
                    {progressValue === 0 && (
                        <img src="/img/pictures/before-mobile.png" alt="Котик до диеты" />
                    )}
                    {progressValue === 1 && (
                        <img src="/img/pictures/after-mobile.png" alt="Котик после диеты" />
                    )}
                </S.ImageWrapperToggle>
                <ProgressWrapperToggle>
                    <S.ProgressButton onClick={handleBeforeClick}>было</S.ProgressButton>
                    <S.RangeToggle
                        min={0}
                        max={1}
                        step={1}
                        value={progressValue}
                        onChange={handleRangeChange}
                    />
                    <S.ProgressButton onClick={handleAfterClick}>стало</S.ProgressButton>
                </ProgressWrapperToggle>
            </S.CompareWrapperToggle>
            <S.CompareWrapperDrag>
                <S.ImageWrapperDrag>
                    <S.PictureWrapperDrag
                        progressValue={progressValue}
                        style={{ clipPath: `inset(0 ${progressValue * 100}% 0 0)` }}
                    >
                        <img src="/img/pictures/before-mobile.png" alt="Котик до диеты" />
                    </S.PictureWrapperDrag>
                    <S.PictureWrapperDrag
                        progressValue={progressValue}
                        style={{ clipPath: `inset(0 0 0 ${(1 - progressValue) * 100}%)` }}
                    >
                        <img src="/img/pictures/after-mobile.png" alt="Котик после диеты" />
                    </S.PictureWrapperDrag>
                </S.ImageWrapperDrag>
                <ProgressWrapperDrag>
                    <S.ProgressButton onClick={handleBeforeClick}>было</S.ProgressButton>
                    <S.RangeDrag
                        min={0}
                        max={1}
                        step={0.01}
                        value={progressValue}
                        onChange={handleRangeChange}
                    />
                    <S.ProgressButton onClick={handleAfterClick}>стало</S.ProgressButton>
                </ProgressWrapperDrag>
            </S.CompareWrapperDrag>
        </>
    );
};
