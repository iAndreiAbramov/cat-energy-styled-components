import React from 'react';

import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { Radio } from 'components/Radio';

import * as S from './CourseForm.styled';

export const CourseForm: React.FC = () => {
    return (
        <S.FormWrapper>
            <S.GeneraFieldSet className="container" name="general">
                <Input name="name" labelText="ИМЯ:*" type="text" placeholder="барсик" />
                <Input name="weight" labelText="Вес (кг):*" type="text" placeholder="7" />
                <Input name="age" labelText="Возраст (лет):" type="text" placeholder="7" />
            </S.GeneraFieldSet>
            <S.PurposeFieldSet className="container" name="purpose">
                <Radio name="weight-loss" labelText="похудение" isDefaultChecked />
                <Radio name="weight-grow" labelText="набор массы" />
                <Radio name="dont-know" labelText="Не знаю (Нужен ваш совет)" />
            </S.PurposeFieldSet>
            <S.HostFieldSet name="host-contacts">
                <S.Legend as="legend">Контактные данные (владельца кота)</S.Legend>
                <S.HostInputs className="container">
                    <Input
                        name="email"
                        labelText="E-mail:*"
                        type="email"
                        placeholder="kuklachev@gmail.com"
                    />
                    <Input
                        name="phone"
                        labelText="Телефон:*"
                        type="tel"
                        placeholder="8 (960) 900-60-90"
                    />
                </S.HostInputs>
            </S.HostFieldSet>
            <S.HabitsFieldSet>
                <S.Legend as="legend">Комментарий</S.Legend>
                <S.HabitsInputs className="container">
                    <S.HabitsTextarea placeholder="Расскажите обо всех повадках кота" />
                </S.HabitsInputs>
            </S.HabitsFieldSet>
            <S.ExtraFieldSet name="extra">
                <S.Legend as="legend">Дополнительно</S.Legend>
                <S.ExtraInputs className="container">
                    <Checkbox name="sweetener" labelText="сахарозаменитель" isDefaultChecked />
                    <Checkbox name="water" labelText="питьевая вода" />
                    <Checkbox name="milk" labelText="молоко" />
                    <Checkbox name="vitamins" labelText="витамины" />
                </S.ExtraInputs>
            </S.ExtraFieldSet>
            <S.SubmitContainer>
                <S.SubmitButton type="submit">отправить заявку</S.SubmitButton>
                <S.Note>* — Обязательные поля</S.Note>
            </S.SubmitContainer>
        </S.FormWrapper>
    );
};
