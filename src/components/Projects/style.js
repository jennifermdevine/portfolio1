import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

export const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`;

export const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 12px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: white;
    
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ToggleGroup = styled.div`
    display: flex;
    border: 2.3px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    font-size: 16px;
    border-radius: 9px;
    font-weight: 500;
    margin: 22px 0;

    @media (max-width: 768px){
        font-size: 12px;
    }
`;

export const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 4px;
    text-shadow: 1px px 0px black;

    ${({ active }) =>
    active &&
    `
        background-color: #19194d;
    `}
    &:hover {
        background-color: #19194d;
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background-color: #CFE3FC;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
`;