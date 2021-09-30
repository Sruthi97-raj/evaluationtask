import React, { useEffect, useState } from 'react'
import './Product.css'
function Product(props) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchURL = "https://hplussport.com/api/products/order/price/sorc/qty/100"


    useEffect(() => {
        fetch(fetchURL).then((res) => res.json()).then((data) => {
            setLoading(false)
            setData(data)
        });
    }, [])

    function sort(e) {
        console.log("Sorting")
        var list = Object.assign([], data)
        if (e.target.name === "orderId") {
            console.log("check if")
            if (e.target.value === 'Ascending') {
                console.log("ascending id")

                list.sort((a, b) => a.id - b.id)

            }
            else {
                list.sort((a, b) => b.id - a.id)
            }
        }

        else if (e.target.name === "name") {
            console.log("check name  If")
            if (e.target.value === "Ascending") {
                console.log("ascending name")
                list.sort((a, b) => a.name.localeCompare(b.name))
            }
            else {
                list.sort((a, b) => b.name.localeCompare(a.name))
            }
        }

        else if (e.target.name === "description") {
            if (e.target.value === 'Ascending') {
                console.log('description ascending ')
                list.sort((a, b) => a.description.localeCompare(b.description))
            }
            else {
                list.sort((a, b) => b.description.localeCompare(a.description))
            }
        }
        else {
            if (e.target.value === 'Ascending') {

                list.sort((a, b) => a.price - b.price)
                console.log('price ascending')
            }
            else {
                list.sort((a, b) => b.price - a.price)
                console.log('price descending')
            }

        }
        setData(list)
    }
    return (
        <div className="product">
            {loading ? <div className="loader"> Loading...</div> : null}
            <table id="productdata">
                <thead>
                    <tr>
                        <th> ORDER ID
                            <br />
                            <select name="orderId" onChange={sort}>
                                <option value="" disabled selected hidden>Sort</option>
                                <option>Ascending</option>
                                <option>Descending</option>
                            </select>
                        </th>
                        <th> NAME
                            <br />
                            <select name="name" onChange={sort}>
                                <option value="" disabled selected hidden>Sort</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </select>
                        </th>
                        <th>DESCRIPTION
                            <br />
                            <select name="description" onChange={sort}>
                                <option value="" disabled selected hidden>Sort</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </select>
                        </th>

                        <th>PRICE
                            <br />
                            <select name="price" onChange={sort}>
                                <option value="" disabled selected hidden>Sort</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product, index, key) => {
                        return (
                            <tr key={product.id}>

                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Product
