//Import area

import React, { useEffect, useState } from 'react'








// Defination area

export default function Home() {

    //2.1 Hooks area

    const [businessCategory,setBusniessCategory] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:1337/api/business-categories?populate=*`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setBusniessCategory(data.data);
        })
        .catch(()=>{

        });
    },[]);

    //2.2 Defination area

    //2.3 return statement

    
  return (
    <>
        <h1>Home page</h1>
        <ul className='nav'>
            {
                businessCategory.map((cv,idx,arr)=>{
                    return <li key={idx} className='me-3' >
                                <a href='#'>
                                    <img src={`http://localhost:1337`+ cv.attributes.image.data.attributes.url} /> <br/>
                                        {cv.attributes.name}
                                </a>
                            </li >
                })
            }
            
            
        </ul>
        
            
            

            
        
    </>
  )
}

// Export area
