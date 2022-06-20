import { BgColor, Border, BreakPoint, FontColor, FontWeight } from 'constants/style-variables';
import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
    grid-column: page-start/page-end;
    grid-row: header-start/header-end;
    z-index: 9;
    align-self: center;
    justify-self: center;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 24px;
    padding-bottom: 24px;
    height: 64px;
    width: 100%;
    max-width: 1440px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        padding-top: 42px;
        padding-bottom: 42px;
        height: 110px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        padding-top: 70px;
        padding-bottom: 42px;
        height: 140px;
    }
`;

export const BurgerDash = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${BgColor.Black};

    transition: all 0.3s linear;
`;

export const HeaderBurger = styled.button<{ isOpened: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 24px;
    height: 16px;
    padding: 0;
    margin: 0;

    appearance: none;
    border: none;
    background: none;

    @media (min-width: ${BreakPoint.TabletLow}) {
        display: none;
    }

    ${({ isOpened }) => {
        switch (isOpened) {
            case true:
                return css`
                    ${BurgerDash}:nth-of-type(2) {
                        opacity: 0;
                    }

                    ${BurgerDash}:nth-of-type(1) {
                        transform: rotate(135deg) translate(4px, -6px);
                    }

                    ${BurgerDash}:nth-of-type(3) {
                        transform: rotate(-135deg) translate(4px, 6px);
                    }
                `;
            default:
                return css``;
        }
    }}
`;

export const HeaderNavigation = styled.nav<{ isOpened: boolean }>`
    display: flex;
    align-items: center;

    @media (max-width: ${BreakPoint.MobileTop}) {
        display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
        justify-content: center;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 10;

        width: 100%;
        box-sizing: border-box;

        background-color: ${BgColor.White};
    }
`;

export const HeaderNavList = styled.ul<{ isOpened: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 34px;
    width: 100%;

    @media (max-width: ${BreakPoint.MobileTop}) {
        flex-direction: column;
        gap: 0;
    }
`;

export const HeaderNavItem = styled.li<{ isActive: boolean; isWithPromo?: boolean }>`
    position: relative;
    text-transform: uppercase;

    &:hover {
        opacity: 0.6;
    }

    &:active {
        opacity: 0.3;
    }

    & a {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: ${BreakPoint.MobileTop}) {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        border-top: ${Border.NavItemMobile};
        height: 64px;

        font-weight: ${FontWeight.Title};
        font-size: 20px;
        line-height: 1;
        text-transform: uppercase;
        color: ${FontColor.Dark};
    }

    @media (min-width: ${BreakPoint.TabletLow}) {
        ${({ isActive }) => {
            if (isActive) {
                return css`
                    &:after {
                        content: '';
                        position: absolute;
                        bottom: -10px;
                        left: 0;
                        right: 0;
                        width: 100%;
                        border-bottom: ${Border.NavItemActiveDark};
                    }
                `;
            }
        }}
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        color: ${({ isWithPromo }) => (isWithPromo ? FontColor.Light : FontColor.Dark)}
            ${({ isActive, isWithPromo }) => {
                if (isActive && isWithPromo) {
                    return css`
                        color: ${FontColor.Light};
                        & a {
                            color: ${FontColor.Light};
                        }
                        &:after {
                            content: '';
                            position: absolute;
                            bottom: -10px;
                            left: 0;
                            right: 0;
                            width: 100%;
                            border-bottom: ${Border.NavItemActiveLight};
                        }
                    `;
                }
            }};
    }
`;
