import React from 'react';
import { BreakPoint } from 'constants/style-variables';
import { SButton } from 'styled-elements/SButton';
import { SPageTitle } from 'styled-elements/SPageTitle';

import { PageHeader } from 'components/PageHeader';

import * as S from './Promo.styled';

export const Promo: React.FC = () => {
    return (
        <S.PromoWrapper>
            <PageHeader />
            <S.ImageWrapper />
            <S.TextWrapper>
                <SPageTitle>
                    Функциональное <br />
                    питание для котов
                </SPageTitle>
                <S.PromoText>Занялся собой? Займись котом!</S.PromoText>
            </S.TextWrapper>
            <S.CanWrapper>
                <picture>
                    <source
                        srcSet="/img/pictures/can-mobile.png"
                        media={`(max-width: ${BreakPoint.MobileTop})`}
                        width="280px"
                        height="270px"
                    />
                    <source
                        srcSet="/img/pictures/can-tablet.png"
                        media={`(min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop})`}
                        width="710px"
                        height="610px"
                    />
                    <img
                        src="/img/pictures/can-desktop.png"
                        alt="Стакан со вкуснейшим кошачим смузи"
                    />
                </picture>
            </S.CanWrapper>
            <S.SelectButtonContainer>
                <SButton>подобрать программу</SButton>
            </S.SelectButtonContainer>
        </S.PromoWrapper>
    );
};
