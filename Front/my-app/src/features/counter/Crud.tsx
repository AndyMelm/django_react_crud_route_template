import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAllAsync, addAsync, selectProducts, delAsync, updAsync } from './crudSlice'

const CRUD = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    useEffect(() => {
        dispatch(getAllAsync())
    }, [])

    const handleImageLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target && typeof e.target.result === 'string') {
              // Set the image data as a data URL
              const imageData = e.target.result;
              // Do something with the imageData, e.g., upload to server
              // ...
            }
          };
          reader.readAsDataURL(file);
        }
      };


    return (
        <div>
            <h1> CRUD</h1>
            Desc<input onChange={(e) => setdesc(e.target.value)} />
            price<input onChange={(e) => setprice(+e.target.value)} />
            <button onClick={() => dispatch(addAsync({ desc, price }))}>add data</button>
            <button onClick={() => dispatch(getAllAsync())}>Load data</button>

            {products.length}

            <hr />
            {products.map((prod, ind) => <div key={ind}>{prod.desc} : {prod.price} 
                <button onClick={() => dispatch(delAsync(prod.id || 0))}>Del </button>
                <button onClick={() => dispatch(updAsync({ id: (prod.id || 0), desc, price }))}>upd </button>
            </div>)}

        </div>
    )
}

export default CRUD

