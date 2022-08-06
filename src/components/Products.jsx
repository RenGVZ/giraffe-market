import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : 'http://localhost:5000/api/products'
        );
        setProducts(res.data);
      } catch(err) {
        console.log(err);
      }
    }
    getProducts()
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => {
        Object.entries(filters).every()
      })
    )
  }, [products, cat, filters])

  return (
    <Container>
      {popularProducts.map((product, i) => (
        <Product item={product} key={product.id}></Product>
      ))}
    </Container>
  )
}

export default Products
