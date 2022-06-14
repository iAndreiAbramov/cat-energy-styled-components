import { BgColor, Border, BreakPoint, FontColor, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';

export const CompareWrapperToggle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    margin-top: 40px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        display: none;
    }
`;

export const ImageWrapperToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 232px;

    background-color: inherit;
    text-align: center;

    & img {
        height: 232px;
        object-fit: fill;
    }
}

@media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
    width: 592px;
    height: 511px;
    margin-top: 80px;
}

@media (min-width: ${BreakPoint.Desktop}) {
    width: 592px;
    height: 511px;
}
`;

export const ProgressWrapperToggle = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;

    min-height: 30px;
    margin-top: 15px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-top: 25px;
    }
`;

export const ProgressButton = styled.button.attrs({ type: 'button' })`
    appearance: none;
    border: none;
    background: none;
    margin: 0;
    padding: 0;

    font-weight: ${FontWeight.Regular};
    font-size: 16px;

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: ${FontColor.Dark};

    user-select: none;
`;

export const RangeToggle = styled.input.attrs({ type: 'range' })`
    -webkit-appearance: none;
    width: 86px;
    height: 14px;

    padding-left: 6px;
    padding-right: 6px;
    border: ${Border.InputRegular};
    border-radius: 6px;

    background: transparent;

    cursor: pointer;

    &::-webkit-slider-runnable-track {
        border-radius: 6px;

        background: transparent;
    }

    &::-moz-range-track {
        padding-left: 6px;
        padding-right: 6px;
        border-radius: 6px;

        background: transparent;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;

        width: 50%;
        height: 6px;

        border-radius: 6px;
        background-color: ${BgColor.BasicGreen};
        transition: all 0.3s linear;
    }

    &::-moz-range-thumb {
        -webkit-appearance: none;

        width: 50%;
        height: 6px;
        border: none;

        border-radius: 6px;
        background-color: ${BgColor.BasicGreen};
        transition: all 0.3s linear;
    }

    &:focus {
        outline: none;
    }
`;

export const CompareWrapperDrag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    width: 100%;
    height: 576px;
    margin-top: 80px;

    @media (max-width: ${BreakPoint.MobileTop}) {
        display: none;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        grid-row: 1/-1;
        grid-column: 2/-1;

        margin-top: 0;
    }
`;

export const ImageWrapperDrag = styled.div`
    position: relative;

    width: 592px;
    height: 510px;
    margin: 0 auto;

    background-color: inherit;
    text-align: center;
`;

export const PictureWrapperDrag = styled.div<{ progressValue: number }>`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 592px;
    overflow: hidden;

    & img {
        height: 100%;
        object-fit: cover;
    }

    &:first-of-type {
        & img {
            transform: translateX(-40px);
            object-position: center;
        }
    }

    &:last-of-type {
        & img {
            transform: translateX(15px);
            object-position: center;
        }
    }
`;

export const ProgressWrapperDrag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
`;

export const RangeDrag = styled.input.attrs({ type: 'range' })`
    -webkit-appearance: none;

    position: relative;

    flex: 1 0 424px;
    height: 6px;
    border-radius: 6px;

    cursor: pointer;

    background-color: ${BgColor.InputRange};

    &::-webkit-slider-runnable-track {
        height: 6px;
        border-radius: 3px;

        overflow: visible;
    }

    &::-moz-range-track {
        height: 6px;
        border-radius: 3px;
        background: ${BgColor.BasicGreen};
        overflow: visible;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;

        position: relative;

        width: 34px;
        height: 34px;
        padding: 10px;
        box-sizing: border-box;

        transform: translateY(-16px);

        border: ${Border.InputRegular};
        border-radius: 50%;
        background-color: ${BgColor.White};
        background-image: url('/img/icons/green-dot.svg');
        background-position: center center;
        background-repeat: no-repeat;

        filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.16));
    }

    &::-moz-range-thumb {
        -moz-appearance: none;

        width: 34px;

        border-radius: 50%;
        background-color: ${BgColor.White};
    }

    &:focus {
        outline: none;
    }
`;
