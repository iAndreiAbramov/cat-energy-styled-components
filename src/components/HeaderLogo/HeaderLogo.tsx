import React from 'react';
import { BreakPoint } from 'constants/style-variables';

import * as S from './HeaderLogo.styled';

export const HeaderLogo: React.FC = () => {
    return (
        <S.LogoWrapper>
            <source
                srcSet="/img/icons/logo-tablet.svg"
                media={`(min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop})`}
                width="174"
                height="52"
            />
            <source
                srcSet="/img/icons/logo-desktop.svg"
                media={`(min-width: ${BreakPoint.Desktop})`}
                width="202"
                height="60"
            />
            <img src="/img/icons/logo-mobile.svg" alt="Логотип Cat Energy" />
        </S.LogoWrapper>
    );
};
