import React from 'react';
import { BreakPoint } from 'constants/style-variables';
import { StyledButton } from 'elements/StyledButton';
import { StyledMainTitle } from 'elements/StyledMainTitle';

import { PageHeader } from 'components/PageHeader';

import {
    CanWrapper,
    ImageWrapper,
    PromoWrapper,
    SelectButtonContainer,
    StyledPromoText,
    TextWrapper,
} from './Promo.styled';

export const Promo: React.FC = () => {
    return (
        <PromoWrapper>
            <PageHeader />
            <ImageWrapper />
            <TextWrapper>
                <StyledMainTitle>
                    Функциональное <br />
                    питание для котов
                </StyledMainTitle>
                <StyledPromoText>Занялся собой? Займись котом!</StyledPromoText>
            </TextWrapper>
            <CanWrapper>
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
            </CanWrapper>
            <SelectButtonContainer>
                <StyledButton>подобрать программу</StyledButton>
            </SelectButtonContainer>
        </PromoWrapper>
    );
};
