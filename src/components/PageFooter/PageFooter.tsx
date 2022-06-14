import React from 'react';
import { socials } from 'constants/socials';
import { STextLogo } from 'styled-elements/STextLogo';

import { AcademyLogo } from 'components/AcademyLogo';
import { FooterSocial } from 'components/FooterSocial';
import { MapBlock } from 'components/MapBlock';

import * as S from './PageFooter.styled';

export const PageFooter: React.FC = () => {
    return (
        <S.FooterWrapper>
            <MapBlock />
            <S.FooterContentWrapper>
                <S.LogoWrapper>
                    <STextLogo />
                </S.LogoWrapper>
                <S.SocialsWrapper>
                    {socials.map((social) => (
                        <FooterSocial social={social} key={social.name} />
                    ))}
                </S.SocialsWrapper>
                <S.AcademyLogoWrapper>
                    <span>HTML Academy</span>
                    <AcademyLogo />
                </S.AcademyLogoWrapper>
            </S.FooterContentWrapper>
        </S.FooterWrapper>
    );
};
