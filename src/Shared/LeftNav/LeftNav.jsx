import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
 const [categories,setCategories]=useState([]);
 useEffect(()=>{
    fetch('https://the-dragon-server-roksana-barna.vercel.app/categories')
    .then(res =>res.json())
    .then(data=>setCategories(data))
    .catch(error =>console.error(error))

 },[])

    return (
        <div>
           <h4>All Catergoris</h4>
           {
             categories.map(category =><p key={category.id}>
                <Link to={`/category/${category.id}`} className='text-secondary text-decoration-none'>{category.name}</Link>
             </p>)
           }
        </div>
    );
};

export default LeftNav;