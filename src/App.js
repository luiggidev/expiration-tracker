import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/Form"
import ProductList from "./components/ProductList"

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  )
  const [formData, setFormData] = useState({
    productName: "",
    imageURL: "",
    expiryDate: "",
    quantity: 0,
    unit: "kg",
    weightPerItem: 0,
  })

  const date = new Date()
  console.log(date.toLocaleString())

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitFormData = (e) => {
    e.preventDefault()
    console.log(formData.quantity * formData.weightPerItem)
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts]
      newProducts.push(formData)
      return newProducts
    })
    setFormData((prev) => {
      return { ...prev, productName: "" }
    })
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products))
  })

  return (
    <>
      <Form handleChange={handleChange} handleSubmit={submitFormData} />
      <ProductList products={products} />

      <main>
        {/* <div>
          <img src="" alt="" />
          <div>
            <h2>Lamb</h2>
            <h3>60 days to the expired date</h3>
            <h4>expired date: 20/20/20</h4>
            <p>stocks remaining: 50ctn / 100kg</p>
            <div className="flex gap-4">
              <button>less</button>
              <button>add</button>
            </div>
          </div>
        </div>
        <div>
          <h3>sort by:-</h3>
          <select name="" id="">
            <option value="expiryDate">Expiry date</option>
            <option value="expiryDate">Product Name</option>
          </select>
        </div> */}
      </main>
    </>
  )
}

export default App
