import styled from 'styled-components'

export const Container = styled.div `
    height: 500px;
    width: 500px;
    background-color: white;
    margin: 1em;
    transition: transform .25s ease-out;

    img{
        width: 100%;
        height: 60%;
        padding: 10px 0px;
    }

    p{
        color: black;
    }

    &:hover{
        box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
        -webkit-box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);
        -moz-box-shadow: 0px -1px 21px 1px rgba(151,206,76,0.79);         
        transform: scale(1.05);
    }
`;
