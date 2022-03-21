import { fireEvent } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import Products from '../Products'
import renderConnected from '../../../utils/renderConnected';
import React from 'react'
import userEvent from '@testing-library/user-event';

const initialState = {
    items: {}
}

const mockData = [
    {id:1, name: 'Optimum Nutrition Gold ', price: 30.99, quantity: 0, image:'/images/protein1.png'},
    {id:2, name: 'ProJym', price: 25.31,  quantity: 0, image:'/images/protein2.png'},
    {id:3, name: 'Signature Whey', price: 19.52, quantity: 0, image:'/images/protein3.jpeg'},
    {id:4, name: 'Nitro Tech', price: 24.82, quantity: 0, image:'/images/protein4.png'},
    {id:5, name: 'Dymatize (Pebble flavour)', price: 20.97, quantity: 0, image:'/images/protein5.png'},
    {id:6, name: 'Remix Nutrition', price: 21.69, quantity: 0, image:'/images/protein6.jpeg'},
]

let getAllByTestId,getByTestId, container

describe('Increase And Decrease Quantity', () => {
  
  beforeEach(() => {
    const utils = renderConnected(<Products data={mockData}/>, { initialState });
    container = utils.container;
    getAllByTestId = utils.getAllByTestId
    getByTestId = utils.getByTestId

  });

  it('should render products', () => {
    expect(getByTestId('products')).toBeInTheDocument()
    expect(container).toMatchSnapshot();
  });

  it('should increase the quantity', () => {
    const increaseButton = getAllByTestId('increaseButton')
    
    expect(mockData[0].quantity).toBe(0)
    userEvent.click(increaseButton[0])
    expect(mockData[0].quantity).toBe(1)  
   
  });

  it('should decrease the quantity', () => {
    const decreaseButton = getAllByTestId('decreaseButton')
    
    expect(mockData[0].quantity).toBe(1)
    userEvent.click(decreaseButton[0])
    expect(mockData[0].quantity).toBe(0)
    
  });

});

// describe('should add products to cart', () => {
//     const mockDispatch = jest.fn()

//     beforeEach(() => {
//         const utils = renderConnected(<Products data={mockData}/>, { initialState });
//         container = utils.container;
//         getAllByTestId = utils.getAllByTestId
//         getByTestId = utils.getByTestId
    
//     });

//     // it('should add product to cart', () => {
//     //     const addToCartButton = getAllByTestId('addToCartButton')
//     //     ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);

//     //     userEvent.click(addToCartButton[0])
//     //     const expectedPayload = {
//     //         payload: {
//     //             id: 1,
//     //             name: 'Optimum Nutrition Gold',
//     //             price: 30.99,
//     //             quantity: 0, 
//     //             image:'/images/protein1.png'
//     //         },type: "cart/storeItems"
//     //     }
//     //     expect(mockDispatch).toHaveBeenCalledWith(expectedPayload)


//     // })
// })

