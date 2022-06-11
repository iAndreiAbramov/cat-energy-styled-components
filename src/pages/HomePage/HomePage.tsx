import React from 'react';

import { PageFooter } from 'components/PageFooter';
import { Promo } from 'components/Promo';

export const HomePage: React.FC = () => {
    return (
        <>
            <Promo />
            <PageFooter />
        </>
    );
};
