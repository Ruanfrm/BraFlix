import styled from 'styled-components';

 export const Container = styled.div`
    margin: 0 4rem;

`

export const MovieList = styled.ul`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        column-gap: 5rem;
        row-gap: 4rem;

`
export const P = styled.p`
        text-align: center;
        font-size: 18px;
        margin-top: 2rem;
`
export const Rodape = styled.footer`
        text-align: center;
        margin: 2rem 0;
        font-size: 1.4rem;

`

export const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    margin: 4rem 0;
    color: white;
`

export const Movie = styled.li`
    
        display: flex;
        flex-direction: column;
        align-items: center;
    

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    span {
        font-weight: bold;
        text-align: center;
        font-size: 14px;
    }

    a {
        transition: all 0.3s;
    }
    
    a:hover {
        transform: scale(1.1);
    }

    
`
export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
     
`
export const Header = styled.header`

justify-content: center;
align-items: center;
display: flex;

`
export const Navbar =  styled.div`
    font-weight: bold;
    justify-content: center;
    display: flex;
    padding: 2rem;
    color: white;

    ul{
        font-size: 20px ;
    }

    li{
        list-style: none;
        float: left;
        margin-right: 8px;
        
    }

    .hover-underline-animation {
  display: inline-block;
  position: relative;
  color: white;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`