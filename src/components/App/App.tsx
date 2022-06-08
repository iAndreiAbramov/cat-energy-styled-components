import React from 'react';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

export const App: React.FC = () => {
    return (
        <div>
            <Button width="300px">Catalog</Button>
            <Input type="text" placeholder="Барсик" width="300px" />
            <Input type="email" placeholder="email" width="300px" />
        </div>
    );
};
