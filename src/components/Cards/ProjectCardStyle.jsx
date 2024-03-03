import styled from "styled-components";


export const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: default;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 180px;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    object-fit: fit;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

export const Details = styled.div`
    width: 100%,
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

export const Title = styled.div `
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-left: 2px;
    color: white;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

export const Description = styled.div`
    font-weight: 400;
    font-size: 15px;
    color: ${({ theme }) => theme.text_primary};
    // overflow: hidden;
    // text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-top: 8px;
    max-width: 100%;
`