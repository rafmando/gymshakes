import styled from 'styled-components'

const StyledProductsFilterContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 20%;
    height: 500x;
    background-color: green;
    @media only screen and (max-width: 670px) {
       display: none;
     }
    
`
const StyledProductsSearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 50px;
    margin-top: -50px;
   
`
const StyledProductsSearchTextLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 30px;
    font-family: 'Roboto', sans-serif;
    margin-right: 20px;
    margin-left: 20px;

    

`
const StyledProductsSearch = styled.input`
    width: 70%;
    height: 30px;
    border-radius: 5px;
    border: 2px solid black;
    margin-left: 50px;
   



`
const StyledProductsSortBy = styled.select`
    width: 100px;
    height: 30px;
    margin-right: 50px;
    margin-left: 20px;
    border-radius: 5px;
    border: 2px solid black;
   
  

`
const StyledProductsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    
  
`
const StyledProductContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 50px;
    @media only screen and (max-width: 670px) {
       width: 100%;
    }

`
const StyledProductCard = styled.div`
    display: flex;
    justify-content: center;
    width: 250px;
    height: 350px;
    margin: 10px;
   

`
const StyledProductCardTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    

`
const StyledProductCardImg = styled.img`
    position: absolute;
    margin-top: 40px;
    width: 150px;
    height: 220px;

`
const StyledProductCardPrice = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    margin-top: 270px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;

`
const StyledProductCardAddToCartRow = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 40px;
    margin-top: 305px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;

`
const StyledProductCardAddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: white;
    color: black;
    border: none;
    text-transform: uppercase;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    border: 2px solid black;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
        width: 105px;
        height: 35px;
        color: white;
        background-color: black;
        

    }
`
const StyledProductCardQtyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90px;
    height: 30px;
  
`
const StyledProductCardQtyPlus = styled.button`
    display: flex;
    justify-content: center:
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 5px;
    border: 2px solid black;
    color: black;
    &:hover {
        color: white;
        background-color: black;
       

    }

`
const StyledProductCardQtyMinus = styled.button`
    display: flex;
    justify-content: center:
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 5px;
    border: 2px solid black;
    color: black;
    &:hover {
        color: white;
        background-color: black;
    

    }

`
const StyledProductCardQty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-size: 30px;
    
`
// eslint-disable-next-line import/no-anonymous-default-export
export default{
    StyledProductsFilterContainer,
    StyledProductsSearchContainer,
    StyledProductsSearchTextLabel,
    StyledProductsSearch,
    StyledProductsSortBy,
    StyledProductsContainer,
    StyledProductContainer,
    StyledProductCard,
    StyledProductCardTitle,
    StyledProductCardImg,
    StyledProductCardPrice ,
    StyledProductCardAddToCartRow,
    StyledProductCardAddToCartButton,
    StyledProductCardQtyContainer,
    StyledProductCardQtyPlus,
    StyledProductCardQtyMinus,
    StyledProductCardQty,
    
}