import React from 'react';
import { ISocial } from 'types/socials.types';

interface IFooterSocial {
    social: ISocial;
}

export const FooterSocial: React.FC<IFooterSocial> = ({ social }) => {
    const { name, src, icon } = social;

    return (
        <a href={src} title={name}>
            {icon}
        </a>
    );
};
