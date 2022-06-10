import React from 'react';
import { BreakPoint } from 'constants/style-variables';

import { LogoWrapper } from './HeaderLogo.styled';

export const HeaderLogo: React.FC = () => {
    return (
        <LogoWrapper>
            <picture>
                <source
                    srcSet="/icons/logo-tablet.svg"
                    media={`(min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop})`}
                    width="174"
                    height="52"
                />
                <source
                    srcSet="/icons/logo-desktop.svg"
                    media={`(min-width: ${BreakPoint.Desktop})`}
                    width="202"
                    height="60"
                />
                <img src="/icons/logo-mobile.svg" alt="Логотип Cat Energy" width="34" height="38" />
            </picture>
        </LogoWrapper>
    );
};
