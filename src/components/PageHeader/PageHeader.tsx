import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from 'constants/AppRoute';
import { SHiddenHint } from 'styled-elements/SHiddenHint';
import { STextLogo } from 'styled-elements/STextLogo';

import { HeaderLogo } from 'components/HeaderLogo';

import * as S from './PageHeader.styled';

export const PageHeader: React.FC = () => {
    const { pathname } = useLocation();
    const [isDropdownOpened, setIsDropDownOpened] = useState(false);

    const handleBurgerClick = useCallback(() => setIsDropDownOpened((current) => !current), []);

    return (
        <S.HeaderWrapper className="container">
            <Link to={AppRoute.Home()}>
                <HeaderLogo />
            </Link>
            <Link to={AppRoute.Home()}>
                <STextLogo isForHeader />
            </Link>
            <S.HeaderNavigation isOpened={isDropdownOpened}>
                <S.HeaderNavList isOpened={isDropdownOpened}>
                    <S.HeaderNavItem
                        isActive={pathname === AppRoute.Home()}
                        isWithPromo={pathname === AppRoute.Home()}
                    >
                        <Link to={AppRoute.Home()}>главная</Link>
                    </S.HeaderNavItem>
                    <S.HeaderNavItem
                        isActive={pathname === AppRoute.Catalog()}
                        isWithPromo={pathname === AppRoute.Home()}
                    >
                        <Link to={AppRoute.Catalog()}>каталог продукции</Link>
                    </S.HeaderNavItem>
                    <S.HeaderNavItem
                        isActive={pathname === AppRoute.Form()}
                        isWithPromo={pathname === AppRoute.Home()}
                    >
                        <Link to={AppRoute.Form()}>подбор программы</Link>
                    </S.HeaderNavItem>
                </S.HeaderNavList>
            </S.HeaderNavigation>
            <S.HeaderBurger isOpened={isDropdownOpened} onClick={handleBurgerClick}>
                <SHiddenHint className="visually-hidden">Открыть меню</SHiddenHint>
                <S.BurgerDash />
                <S.BurgerDash />
                <S.BurgerDash />
            </S.HeaderBurger>
        </S.HeaderWrapper>
    );
};
