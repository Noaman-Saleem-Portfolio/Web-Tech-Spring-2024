import React from 'react'
import { Link } from "react-router-dom"

const Success = () => {
  return (
    <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Success Page</h1>
        <p>Payment received successfully. Your order hgas been dispatche.</p>
        <Link to={"/books"}>Go to Shopping page</Link>
    </div>
  )
}

export default Success