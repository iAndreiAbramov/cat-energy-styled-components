import React from 'react';
import { socials } from 'constants/socials';
import { SButton } from 'styled-elements/SButton';
import { STextarea } from 'styled-elements/STextarea';

import { Checkbox } from 'components/Checkbox';
import { FooterSocial } from 'components/FooterSocial';
import { Input } from 'components/Input';
import { PageFooter } from 'components/PageFooter';
import { PageHeader } from 'components/PageHeader';
import { Radio } from 'components/Radio';

export const FormPage: React.FC = () => {
    return (
        <>
            <PageHeader />
            <div>Form page</div>
            <SButton width="300px">Catalog</SButton>
            <Input type="text" placeholder="Барсик" width="300px" labelText="Name:*" name="Имя" />
            <Input type="email" placeholder="email" width="300px" labelText="Name:*" name="Имя" />
            <Checkbox labelText="сахарозаменитель" name="Дополнительно" value="Сахарозаменитель" />
            <Checkbox labelText="сахарозаменитель" name="Дополнительно" value="Сахарозаменитель" />
            <Checkbox labelText="сахарозаменитель" name="Дополнительно" value="Сахарозаменитель" />
            <Radio labelText="похудение" name="Цель" value="Похудение" isDefaultChecked />
            <Radio labelText="Набор массы" name="Цель" value="Набор массы" />
            <STextarea placeholder="Расскажите обо всех повадках кота" />
            {socials.map((social) => (
                <FooterSocial social={social} key={social.name} />
            ))}
            <PageFooter />
        </>
    );
};
