import React, { useCallback, useState } from 'react';

import * as S from './MapBlock.styled';

export const MapBlock: React.FC = () => {
    const [isMapDisabled, setIsMapDisabled] = useState(true);

    const handleMapClick = useCallback(() => {
        setIsMapDisabled(false);
    }, []);

    const handleMapMouseLeave = useCallback(() => {
        setIsMapDisabled(true);
    }, []);

    return (
        <S.MapBlockWrapper>
            <S.InvitationWrapper>
                <S.InvitationTitle>
                    приглашаем
                    <br />
                    к сотрудничеству
                    <br />
                    дилеров!
                </S.InvitationTitle>
                <S.InvitationContacts>
                    <S.InvitationContactsLocation>
                        ул. Большая
                        <br />
                        Конюшенная, д. 19/8
                    </S.InvitationContactsLocation>
                    <S.InvitationContactsCity>Санкт-Петербург</S.InvitationContactsCity>
                </S.InvitationContacts>
            </S.InvitationWrapper>
            <S.MapContainer
                isDisabled={isMapDisabled}
                onClick={handleMapClick}
                onMouseLeave={handleMapMouseLeave}
                title="Кликните по карте для взаимодействия"
            >
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A62e81ce561876e07377615a9d5bdd031a5ff2d634367a6a66c65dcc68c7469b3&amp;source=constructor"></iframe>
            </S.MapContainer>
        </S.MapBlockWrapper>
    );
};
