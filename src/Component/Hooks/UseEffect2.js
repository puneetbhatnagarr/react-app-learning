import React,{ useEffect,useState} from 'react'


function UseEffect2() {
    const [content, setContent] = useState('posts')
    const [items, setItems] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/'+content)
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json =>setItems(json))
        console.log("ComponentDidUpdate") 
        return () => {
            //cleaning
            console.log("Unmount")
        }
    }, [content])
  return (
    <>
<button onClick={() => setContent('posts')}>Posts</button>
            <button onClick={() => setContent('users')}>users</button>
            <button onClick={() => setContent('comments')}>comments</button>
            
           
            <h1>{content}</h1>
            <ul>
                {items && items.map(item=>{
                    return <li key={item.id}>{item.id}</li>
                })}
               
            </ul>
    </>
  )
}

export default UseEffect2
