import { Border, FontFamily, TextColor } from 'constants/style-variables';
import styled from 'styled-components';

interface IStyledCheckboxLabel {
    isDisabled?: boolean;
}

export const StyledCheckboxLabel = styled.label<IStyledCheckboxLabel>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;

    height: 40px;

    font-family: ${FontFamily.Oswald};
    font-weight: 400;
    font-size: 20px;
    color: ${TextColor.Dark};
    text-transform: uppercase;

    opacity: ${(props) => (props.isDisabled ? 0.3 : 1)};
`;
export const StiledCheckboxHidden = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0 none;
    clip-path: inset(100%);
`;

export const StyledCheckboxVisible = styled.div`
    box-sizing: border-box;
    width: 40px;
    height: 40px;

    border: ${Border.InputRegular};

    ${StiledCheckboxHidden}:checked + & {
        background-image: url('/icons/checked.svg');
        background-repeat: no-repeat;
        background-position: center center;
    }

    ${StiledCheckboxHidden}:disabled + & {
        opacity: 0.3;
    }
`;
