import styled from "styled-components";

export const Player = styled.div`
    background-color: ${(props) => props.theme.Footer};
    position: absolute;
    left: 0%;
    right: 0%;
    top: 88.44%;
    bottom: 0%;
    overflow-x:hidden;
    overflow-y:hidden;
    &::-webkit-scrollbar {
        display: none;
    };
    box-shadow: ${(props) => props.theme.FooterShadow};
`;