import React from 'react';

import { CourseForm } from 'components/CourseForm';
import { PageFooter } from 'components/PageFooter';
import { PageHeader } from 'components/PageHeader';

import * as S from './FormPage.styled';

export const FormPage: React.FC = () => {
    return (
        <>
            <PageHeader />
            <S.MainWrapper>
                <S.FormPageTitle className="container">Подбор программы</S.FormPageTitle>
                <S.FormPageSubTitle className="container">
                    Заполните анкету, и мы подберем
                    <br />
                    программу питания для вашего кота
                </S.FormPageSubTitle>
                <CourseForm />
            </S.MainWrapper>
            <PageFooter />
        </>
    );
};
