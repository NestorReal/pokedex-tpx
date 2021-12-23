import styled from 'styled-components';

export const InputContainer = styled.div`
width: 500px;
display: flex;
justify-content: space-between;
input{
    border-radius: 5px;
    border: 1px solid black;
    padding: 10px;
    width: 65%;
}
button{
    border-radius: 5px;
    border: none;
    background: rgb(47,44,145);
    color: white;
    margin: 2px;
}
.buttonShow{
    width: 200px;
}`;

export const Grid = styled.div`
display: grid;
grid-template-columns: auto auto auto auto auto;
padding: 10px;
width: 100%;
div{
    border-radius: 10px;
    box-shadow: 10px 10px 10px -6px grey;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;