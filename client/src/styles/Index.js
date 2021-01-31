import styled from "styled-components";

export const Article = styled.article`
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);    
    height:80vh;
    background-color:#ffff;
    box-shadow: 0px 0px 43px 18px rgba(0,0,0,0.25);
    border-radius: 20px;  
    @media screen and (min-width:500px ){
        width: 30em;
    }
    @media screen and (max-width: 500px ){
        width: 100%;
    }
`;
export const Header = styled.header`
    position: fixed;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background: rgb(110,67,232);
    background: linear-gradient(57deg, rgba(110,67,232,1) 0%, rgba(178,55,247,1) 100%);
    padding:10px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    span{
        color:#F4F5F7;
        font-weight:bold;
        font-size:20px;
        letter-spacing: 2px;
        font-family: 'Ubuntu', sans-serif;
    }
    p{
        color:#F4F5F7;
        font-weight:bold;
        letter-spacing: 2px;
        font-size: 3vh;
        font-family: 'Ubuntu', sans-serif;
    }
`;
export const SubmitFormSection = styled.section`
height: 10vh;
display: flex;
justify-content: center;
input{
    width:70%;
    margin: 10px;
    height: auto;
    border: 0;
    font-size: 30px;
    background: none;
}

`;
export const Form = styled.form`
width:100%;
button{
    border: 0;
    background: none;
    font-size: 40px;
    margin-right: 10px;
}
`;
export const MessagesView = styled.section`
    width: 100%;
    height: 70vh;
    overflow-y:scroll;
    border-top-right-radius: 20px;
    @media screen and (min-width : 500px){
        padding-top: 7vh;
    }
    @media screen and (max-width: 500px ){
        padding-top:10vh;
    }
`;
const LessCode = styled.div`
max-width:70%;
font-family: 'Ubuntu', sans-serif;
height:auto;
margin-bottom:30px;
padding:20px;
font-weight:bold;
border-radius:10px;

P{
    padding: 5px;
    margin: 5px;
}
`;
export const User = styled(LessCode)`
    color:#FFFF;
    margin-left:auto;
    background: rgb(110,67,232);
    background: linear-gradient(57deg, rgba(110,67,232,1) 0%, rgba(178,55,247,1) 100%);
`;
export const OtherUser = styled(LessCode)`
color:#333;
margin-right:auto;
background: #ECF3F9;
`;
