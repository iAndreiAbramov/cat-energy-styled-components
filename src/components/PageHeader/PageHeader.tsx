import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from 'constants/AppRoute';
import { HiddenHint } from 'elements/HiddenHint';
import { StyledTextLogo } from 'elements/StyledTextLogo';

import { HeaderLogo } from 'components/HeaderLogo';

import {
    BurgerDash,
    HeaderBurger,
    HeaderNavigation,
    HeaderNavItem,
    HeaderNavList,
    HeaderWrapper,
} from './PageHeader.styled';

export const PageHeader: React.FC = () => {
    const { pathname } = useLocation();
    const [isDropdownOpened, setIsDropDownOpened] = useState(false);

    const handleBurgerClick = useCallback(() => setIsDropDownOpened((current) => !current), []);

    return (
        <HeaderWrapper className="container">
            <Link to={AppRoute.Home()}>
                <HeaderLogo />
            </Link>
            <Link to={AppRoute.Home()}>
                <StyledTextLogo isForHeader />
            </Link>
            <HeaderNavigation isOpened={isDropdownOpened}>
                <HeaderNavList isOpened={isDropdownOpened}>
                    <HeaderNavItem
                        isActive={pathname === AppRoute.Home()}
                        isWithPromo={pathname === AppRoute.Home()}
                    >
                        <Link to={AppRoute.Home()}>главная</Link>
                    </HeaderNavItem>
                    <HeaderNavItem
                        isActive={pathname === AppRoute.Catalog()}
                        isWithPromo={pathname === AppRoute.Home()}
                    >
                        <Link to={AppRoute.Catalog()}>каталог продукции</Link>
                    </HeaderNavItem>
                    <HeaderNavItem
                        isActive={pathname === AppRoute.Form()}
                        isWithPromo={pathname === AppRoute.Home()}
                    >
                        <Link to={AppRoute.Form()}>подбор программы</Link>
                    </HeaderNavItem>
                </HeaderNavList>
            </HeaderNavigation>
            <HeaderBurger isOpened={isDropdownOpened} onClick={handleBurgerClick}>
                <HiddenHint className="visually-hidden">Открыть меню</HiddenHint>
                <BurgerDash />
                <BurgerDash />
                <BurgerDash />
            </HeaderBurger>
        </HeaderWrapper>
    );
};
