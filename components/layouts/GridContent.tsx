import styled from "styled-components"

export interface GridContentProps {
    children?: React.ReactNode
}

const StyledWrapper = styled.div`
    width: 100%;
`

const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0px 15px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const GridContent = ({ children } : GridContentProps ) => {

    return (
       <StyledWrapper>
            <StyledContainer>
                { children }
            </StyledContainer>
       </StyledWrapper>
   )
}

export default GridContent