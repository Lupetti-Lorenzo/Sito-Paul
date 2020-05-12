import React from 'react'

export const categories = ["All", "Hoodie", "Tees", "Jeans"]

export default function FilterInputs({ filterProducts, changeFilter, changeSort, active }) {

    return (
        <div>
            <div id="products-nav">
                {
                    categories.map((cat, i) => (
                        <span key={i} 
                        className={filterProducts === cat ? "selected" : ""} 
                        onClick={e => changeFilter(cat)}>{cat}  {i+1 !== categories.length ? " /" : ""}
                        </span>
                    ))
                }
            </div>
            Sort by: 
            <select onChange={(e) => changeSort(e.target.value)} disabled={active}>
                <option value="0">Latest</option>
                <option value="-">Price: low to high</option>
                <option value="+">Price: high to low</option>
            </select>
        </div>
    )
}
