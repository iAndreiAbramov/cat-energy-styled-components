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
                        <img
                            src="/img/pictures/before-mobile.png"
                            srcSet="/img/pictures/before-mobile.png 1x, /img/pictures/before-mobile@2x.png 2x"
                            alt="Котик до диеты"
                            width="280"
                            height="232"
                        />
                    )}
                    {progressValue === 1 && (
                        <img
                            src="/img/pictures/after-mobile.png"
                            srcSet="/img/pictures/after-mobile.png 1x, /img/pictures/after-mobile@2x.png 2x"
                            alt="Котик после диеты"
                            width="243"
                            height="232"
                        />
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
                        <img
                            src="/img/pictures/before-desktop.png"
                            srcSet="/img/pictures/before-desktop.png 1x, /img/pictures/before-desktop@2x.png 2x"
                            alt="Котик до диеты"
                            width="677"
                            height="520"
                        />
                    </S.PictureWrapperDrag>
                    <S.PictureWrapperDrag
                        progressValue={progressValue}
                        style={{ clipPath: `inset(0 0 0 ${(1 - progressValue) * 100}%)` }}
                    >
                        <img
                            src="/img/pictures/after-desktop.png"
                            srcSet="/img/pictures/after-desktop.png 1x, /img/pictures/after-desktop@2x.png 2x"
                            alt="Котик до диеты"
                            width="545"
                            height="520"
                        />
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
