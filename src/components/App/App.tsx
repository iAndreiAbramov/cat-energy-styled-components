import React from 'react';
import { StyledButton } from 'atomic/StyledButton';
import { StyledTextarea } from 'atomic/StyledTextarea/StyledTextarea';

import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { Radio } from 'components/Radio';

export const App: React.FC = () => {
    return (
        <>
            <StyledButton width="300px">Catalog</StyledButton>
            <Input type="text" placeholder="Барсик" width="300px" labelText="Name:*" name="Имя" />
            <Input type="email" placeholder="email" width="300px" labelText="Name:*" name="Имя" />
            <Checkbox labelText="сахарозаменитель" name="Дополнительно" value="Сахарозаменитель" />
            <Checkbox labelText="сахарозаменитель" name="Дополнительно" value="Сахарозаменитель" />
            <Checkbox labelText="сахарозаменитель" name="Дополнительно" value="Сахарозаменитель" />
            <Radio labelText="похудение" name="Цель" value="Похудение" />
            <Radio labelText="Набор массы" name="Цель" value="Набор массы" />
            <StyledTextarea placeholder="Расскажите обо всех повадках кота" />
        </>
    );
};
