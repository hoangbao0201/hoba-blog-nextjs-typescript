import styled from "styled-components";

export interface ButtonProps {
    bg?: string;
    boxSd?: string;
    width?: string;
    size?: string;
    bgHover?: string;
    textColor?: string;
    textHoverColor?: string;
}

export interface ImageProps {
    height?: string;
}

// Wrapper

export const StyledWrapper = styled.div`
    width: 100%;
`;
export const StyledContainer = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1200px;
    padding: 0px 15px;
`;

// Form

export const StydelForm = styled.form`
    width: 100%;
    max-width: 650px;
    min-height: 500px;
    margin: 15px auto;
    padding: 40px;
    border-radius: 4px;
    background-color: var(--bg-form-color);
    box-shadow: var(--shadow-form-color);

    transition: all 0.2s;
`
export const StydedButton = styled.div`
    width: 100%;
    height: 46px;
    cursor: pointer;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    position: relative;

    max-width: ${({ width }) => (width ? width : "100%")};
    font-size: ${({ size }) => (size ? size : "18px")};
    background-color: ${({ bg } : ButtonProps) => (bg ? bg : "#3b49df")};
    color: ${({ textColor } : ButtonProps) => (textColor ? textColor : "")};
    box-shadow: 0px 0px 0px 1px ${({ boxSd }) => (boxSd ? boxSd : "rgba(0, 0, 0, 0.1)")};

    display: flex;
    align-items: center;
    justify-content: center;

    & + & {
        margin-top: 15px;
    }
    :hover {
        color: ${({ textHoverColor } : ButtonProps) => (textHoverColor ? textHoverColor : "")};
        background-color: ${({ bgHover } : ButtonProps) => (bgHover ? bgHover : "#1c2de2")};
    }
`
export const GridIcon = styled.div`
    left: 0px;
    padding: 0px 15px;
    border-right: 1px solid #ccc;
    position: absolute;
    > svg {
        width: 20px;
        display: block;
        fill: #ffff
    }
`

// Form logo

export const StyledImgae = styled.img`
    height: ${({ height } : ImageProps) => (height ? height : "60px")};
    display: block;
    margin: 0px auto;
    margin-bottom: 25px;
`

// Form Input
export const StyledFormGroup = styled.div`
    margin-bottom: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
`
export const StyledInput = styled.input`
    width: 100%;
    height: 46px;
    padding-left: 20px;
    font-size: 17px;

    :focus {
        border-color: var(--focus-input-border-color);
        box-shadow: var(--focus-input-box-shadow-color);
    }
`
export const StyledFormTitle = styled.label`
    font-size: 17px;
    font-weight: 600;
    padding: 0px 10px 10px 5px;
    cursor: pointer;
    background-color: var(--bg-form-color);

    transition: all 0.2s ease;
`

// Devider

export const StyledDevider = styled.div`
    width: 100%;
    padding: 20px 0px;
    border-color: var(--border-color);
`