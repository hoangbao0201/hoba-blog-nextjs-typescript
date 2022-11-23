import styled from "styled-components"


export interface OverlayLayoutProps {
    children?: React.ReactNode;
    active?: boolean
}

interface Props {
    active?: boolean
}

const StyledOverlayLayout = styled.div`
    width: 100%;
    height: 100%;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.08);
    position: fixed;
    transition: 0.2s;
    visibility: ${({ active } : Props ) => (active ? "visible" : "hidden")};
    opacity: ${({ active } : Props ) => (active ? "1" : "0")};
`

const OverlayLayout = ({ children, active } : OverlayLayoutProps) => {

    return (
       <StyledOverlayLayout active={active}>
            {children}
       </StyledOverlayLayout>
   )
}

export default OverlayLayout