import styled from "styled-components";

export const Container = styled.div`
margin: 0;
 
 grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  display: grid;
  
  padding: 0 3rem;
  
  h1 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;
    height: 100vh;
    margin-top: 50px;
  }

  img {
    margin-top: 100px;
    width: 200px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: normal;
    font-size: 120%;
    margin-bottom: 1rem;
    line-height: 130%;
  }

  .release-date {
    font-size: 100%;
    opacity: 0.8;
  }
  

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 50%;
  }

  button {
    background-color: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all .3s;
    vertical-align: middle;
    float: center;
  }

  button:hover {
    background-color:  #7F00FF;
  }

`;
export const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    justify-content: center;
    margin: 4rem 0;
    color: white;
`