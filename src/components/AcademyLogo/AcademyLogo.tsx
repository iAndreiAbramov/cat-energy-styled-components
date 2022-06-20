import React from 'react';

import * as S from './AcademyLogo.styled';

export const AcademyLogo: React.FC = () => {
    return (
        <a
            href="https://htmlacademy.ru/intensive/adaptive"
            title="На страницу интенсива по адаптивной верстке от HTMLAcademy"
        >
            <S.StyledAcademyLogo />
        </a>
    );
};
