import { BgColor, BreakPoint, FontColor, FontFamily, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';

export const MapBlockWrapper = styled.article`
    position: relative;
    margin: 0 auto;
`;

export const InvitationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 6px;

    min-height: 112px;
    padding: 26px 20px;

    background-color: ${BgColor.White};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        min-height: 200px;
        padding: 56px 70px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        position: absolute;
        top: 98px;
        left: 80px;

        min-width: 566px;
        padding: 56px 80px;
    }
`;

export const InvitationTitle = styled.h3`
    font-weight: ${FontWeight.Regular};
    font-size: 16px;
    line-height: 1.25;
    text-transform: uppercase;
    color: ${FontColor.Dark};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        font-size: 20px;
        line-height: 1.3;
    }
`;

export const InvitationContacts = styled.address`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InvitationContactsLocation = styled.span`
    font-family: ${FontFamily.Arial};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: ${FontColor.Gray};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        font-size: 16px;
        line-height: 1.25;
    }
`;

export const InvitationContactsCity = styled.span`
    font-family: ${FontFamily.Arial};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: ${FontColor.Gray};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        font-size: 16px;
        line-height: 1.25;
    }
`;

export const MapContainer = styled.div<{ isDisabled: boolean }>`
    & iframe {
        pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
        width: 100%;
        height: 362px;
        border: none;
    }

    @media (min-width: ${BreakPoint.TabletLow}) {
        & iframe {
            height: 400px;
        }
    }
`;
