import { ReactElement } from 'react';

export enum Social {
    Facebook = 'Facebook',
    Instagram = 'Instagram',
    VKontakte = 'VKontakte',
}

export interface ISocial {
    src: string;
    name: Social;
    icon: ReactElement;
}
