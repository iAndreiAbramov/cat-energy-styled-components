import React from 'react';
import { socials } from 'constants/socials';
import { StyledTextLogo } from 'elements/StyledTextLogo';

import { AcademyLogo } from 'components/AcademyLogo';
import { FooterSocial } from 'components/FooterSocial';

import {
    AcademyLogoWrapper,
    FooterContentWrapper,
    FooterWrapper,
    LogoWrapper,
    SocialsWrapper,
} from './PageFooter.styled';

export const PageFooter: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterContentWrapper>
                <LogoWrapper>
                    <StyledTextLogo />
                </LogoWrapper>
                <SocialsWrapper>
                    {socials.map((social) => (
                        <FooterSocial social={social} key={social.name} />
                    ))}
                </SocialsWrapper>
                <AcademyLogoWrapper>
                    <span>HTML Academy</span>
                    <AcademyLogo />
                </AcademyLogoWrapper>
            </FooterContentWrapper>
        </FooterWrapper>
    );
};
