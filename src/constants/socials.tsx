import React from 'react';
import { ReactComponent as FacebookIcon } from 'icons/facebook.svg';
import { ReactComponent as InstaIcon } from 'icons/instagram.svg';
import { ReactComponent as VkIcon } from 'icons/vk.svg';
import styled from 'styled-components';
import { ISocial, Social } from 'types/socials.types';

import { BreakPoint } from './style-variables';

const StyledVkIcon = styled(VkIcon)`
    width: 32px;
    height: 24px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    @media (max-width: ${BreakPoint.MobileTop}) {
        width: 22px;
        height: 16px;
    }
`;

const StyledInstaIcon = styled(InstaIcon)`
    width: 24px;
    height: 24px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    @media (max-width: ${BreakPoint.MobileTop}) {
        width: 16px;
        height: 16px;
    }
`;

const StyledFacebookIcon = styled(FacebookIcon)`
    width: 15px;
    height: 24px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    @media (max-width: ${BreakPoint.MobileTop}) {
        width: 10px;
        height: 16px;
    }
`;

export const VK_SOCIAL = {
    name: Social.VKontakte,
    src: 'https://vk.com/',
    icon: <StyledVkIcon />,
};

export const INSTA_SOCIAL = {
    name: Social.Instagram,
    src: 'https://www.instagram.com',
    icon: <StyledInstaIcon />,
};

export const FACEBOOK_SOCIAL = {
    name: Social.Facebook,
    src: 'https://www.facebook.com',
    icon: <StyledFacebookIcon />,
};

export const socials: ISocial[] = [VK_SOCIAL, INSTA_SOCIAL, FACEBOOK_SOCIAL];
