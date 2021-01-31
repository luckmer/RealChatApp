import styled from "styled-components";

export const Article = styled.article`
    width:100%;
    height:100vh;
    background-color:#FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    input {
        border:0;
        margin:5px;
        padding:10px;
        border-radius:5px;
        width:30em;
        background-color:#e8f0fe;
        color:#333;
        font-weight:bold;
    }
    button{
        margin-top:40px;
        width:200px;
        height:30px;
        border:0;
        background-color:#e8f0fe;
        cursor:pointer;
    }
`;
