import React, {useState} from 'react'
import HeaderStyles from './Products.styles'
import {data} from './data/ProductData'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

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

const Products = () => {

    const [products,setProducts] = useState(data)
    const [searchTerm,setSearchTerm] = useState('')
    const [qty,setQty] = useState(1)
    
    const increaseQty = () => {
        if(qty >= 0){
            setQty(qty + 1)
        }
    }

    const decreaseQty = () => {
        if(qty >= 0){
            setQty(qty - 1)
        }
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSortBy = (e) => {
        console.log(e.target.value)
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
            console.log(highList)
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
            console.log(lowList)
        }

        if(optionVal ==='normal'){
            setProducts(data)
        }
       
    }
    
    return (
        <StyledProductsContainer>
            <StyledProductContainer>
            <StyledProductsSearchContainer>
                <StyledProductsSearch placeholder="Search" onChange={handleSearch}/>
                <StyledProductsSortBy onChange={(e) => {
                    handleSortBy(e)
                }} >
                <option  value='normal'>Relevance</option>
                    <option value="high" >Price (High to Low)</option>
                    <option value="low" >Price (Low to High)</option>
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
            .map((prod) => {
                const {id,name,image,price} = prod
                return(
                    <StyledProductCard key={id}>
                        <StyledProductCardTitle>{name}</StyledProductCardTitle>
                        <StyledProductCardImg src={image}/>
                        <StyledProductCardPrice>£{price}</StyledProductCardPrice>
                        <StyledProductCardAddToCartRow>
                            <StyledProductCardAddToCartButton>Add to cart</StyledProductCardAddToCartButton>
                            <StyledProductCardQtyContainer>
                                <StyledProductCardQtyPlus onClick={increaseQty}><AiOutlinePlus style={{width: '25px', height: '25px'}}/></StyledProductCardQtyPlus>
                                <StyledProductCardQty>{qty}</StyledProductCardQty>
                                <StyledProductCardQtyMinus onClick={decreaseQty}><AiOutlineMinus style={{width: '25px', height: '25px'}}/></StyledProductCardQtyMinus>
                            </StyledProductCardQtyContainer>
                        </StyledProductCardAddToCartRow>
                    </StyledProductCard>
                )
        })} 
            </StyledProductContainer>
        </StyledProductsContainer>
    )
}

export default Products
