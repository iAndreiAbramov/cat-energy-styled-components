import React from 'react';
import { BreakPoint } from 'constants/style-variables';
import { ReactComponent as Gift } from 'icons/icon-gift.svg';

import * as S from './ExtraPromo.styled';

export const ExtraPromo: React.FC = () => {
    return (
        <S.ExtraPromoWrapper>
            <S.ExtraPromoImageWrapper>
                <source
                    srcSet="/img/pictures/gift-desktop.png"
                    media={`(min-width: ${BreakPoint.Desktop})`}
                />
                <source
                    srcSet="/img/pictures/gift-tablet.png"
                    media={`(min-width: ${BreakPoint.TabletLow})`}
                />
                <img
                    src="/img/pictures/gift-mobile.png"
                    alt="Переноска для кота"
                    width="279"
                    height="289"
                />
            </S.ExtraPromoImageWrapper>
            <S.ExtraPromoContent>
                <S.ExtraPromoIconWrapper>
                    <Gift />
                </S.ExtraPromoIconWrapper>
                <S.ExtraPromoText>
                    Закажите все и получите чехол для кота в подарок!
                </S.ExtraPromoText>
            </S.ExtraPromoContent>
        </S.ExtraPromoWrapper>
    );
};
