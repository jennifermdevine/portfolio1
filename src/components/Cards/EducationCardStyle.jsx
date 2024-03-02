import styled from "styled-components";

export const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px black;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    :hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 1px solid #CFE3FC;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24p;
`;

export const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%
`;

export const Image = styled.img`
    height: 50px;
    border-radius: 10px;
    margin-top: 4px;

    @media (max-width: 768px) {
        height: 40px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: white;
    text-shadow: 1px 0px 1px navy;

    @media (max-width: 768px){
        font-size: 14px;
    }
`;

export const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: white;
    text-shadow: 1px 0px 1px navy;

    @media (max-width: 768px){
        font-size: 10px;
    }
`;

export const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: white;
    text-shadow: 1px 0px 1px navy;

    @media (max-width: 768px){
        font-size: 12px;
    }
`;

export const Description = styled.div`
    font-size: 15px;
    width: 100%;
    font-weight: 500px;
    color: ${({ theme }) => theme.text_primary +99};
    margin-bottom: 10px;

    @media (max-width: 768px){
        font-size: 12px;
    }
`;