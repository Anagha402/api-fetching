import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cart() {
  const base_url="https://dummyjson.com/products"
  const[product,setProduct]=useState([])

  //api call
  const fetchData=async()=>{
    const result= await fetch(base_url)
    //console.log(result);
    .then(result=>result.json())//json=>array
     .then(products=>setProduct(products.products))

    

  }
  console.log(product);
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <div className="container mt-5 m-3 mx-4 row d-flex justify-content-between">
        {

          product.map(item=>(
      <Card style={{ width: '18rem', height:"500px",margin:"5px"}}>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}</Card.Title>
        <Card.Text>
          {item.description.slice(0,50)}
        </Card.Text>
        <Button variant="warning">Add to cart</Button>
      </Card.Body>
    </Card>))
    }
    </div>
      
    </div>
  )
}

export default Cart
