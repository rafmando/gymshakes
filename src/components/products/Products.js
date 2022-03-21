import React, {useState, useEffect} from 'react'
import HeaderStyles from './Products.styles'
import {useDispatch} from 'react-redux'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import { storeItems } from '../../redux/cartSlice'


const {
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
    StyledProductCardPrice,
    StyledProductCardAddToCartRow,
    StyledProductCardAddToCartButton,
    StyledProductCardQtyContainer,
    StyledProductCardQtyPlus,
    StyledProductCardQtyMinus,
    StyledProductCardQty,
} = HeaderStyles

const Products = ({data}) => {

    const [products,setProducts] = useState(data)
    const [searchTerm,setSearchTerm] = useState('')
    const dispatch = useDispatch()
   
    
   
    const increaseQty = (index) => {
        const copyProducts = [...products];

        if(copyProducts[index].quantity >= 0 && copyProducts[index].quantity < 9){
            
            copyProducts[index].quantity++;
            const newProducts = copyProducts

            setProducts(newProducts);
        }
    }

    const decreaseQty = (index) => {
        const newProducts = [...products];

        if(newProducts[index].quantity > 0){

            newProducts[index].quantity--;

            setProducts(newProducts);
        }
    }


    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSortBy = (e) => {
        const optionVal = e.target.value

        if(optionVal === "high"){
            const highList = data.sort((a,b) => {
                if(a.price < b.price){
                    return 1
                }else{
                    return -1
                }
            }).map((prod)=>{
                return prod
            })
            setProducts(highList)
        }

        if(optionVal === "low"){
            const lowList = data.sort((a,b) => {
                if(a.price > b.price){
                    return 1
                }else{
                    return -1
                }
            }).map((prod)=>{
                return prod
            })
            setProducts(lowList)
        }
    }

    const addToCart = (prod) => {
        const cartItem = {
            id: prod.id,
            name: prod.name,
            price: prod.price,
            quantity: prod.quantity
        }
        dispatch(storeItems(cartItem))
    }
    
    
    return (
        <StyledProductsContainer data-testid="products">
            <StyledProductContainer>
            <StyledProductsSearchContainer>
                <StyledProductsSearch placeholder="Search" onChange={handleSearch}/>
                <StyledProductsSortBy onChange={(e) => {
                    handleSortBy(e)
                }} >
                    <option value="normal">Relevance</option>
                    <option value="high">Price (High to Low)</option>
                    <option value="low">Price (Low to High)</option>
                </StyledProductsSortBy>
            </StyledProductsSearchContainer>
            {products.filter((prodVal) => {
                if (searchTerm === "") {
                    return prodVal;
                } else if (
                prodVal.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                return prodVal;
                }
            })
            .map((prod,index) => {
                const {id,name,image,price,quantity} = prod
                return(
                    <StyledProductCard key={id}>
                        <StyledProductCardTitle>{name}</StyledProductCardTitle>
                        <StyledProductCardImg src={image}/>
                        <StyledProductCardPrice>£{price}</StyledProductCardPrice>
                        <StyledProductCardAddToCartRow>
                            <StyledProductCardAddToCartButton data-testid="addToCartButton" onClick={() => {addToCart(prod)}}>Add to cart</StyledProductCardAddToCartButton>
                            <StyledProductCardQtyContainer>
                                <StyledProductCardQtyPlus data-testid="increaseButton" onClick={() => increaseQty(index)}><AiOutlinePlus style={{width: '25px', height: '25px'}}/></StyledProductCardQtyPlus>
                                <StyledProductCardQty data-testid="quantity">{quantity}</StyledProductCardQty>
                                <StyledProductCardQtyMinus data-testid="decreaseButton" onClick={() => decreaseQty(index)}><AiOutlineMinus style={{width: '25px', height: '25px'}}/></StyledProductCardQtyMinus>
                            </StyledProductCardQtyContainer>
                        </StyledProductCardAddToCartRow>
                    </StyledProductCard>
                )
            })} 
            </StyledProductContainer>
        </StyledProductsContainer>
    )
}



export default (Products)
