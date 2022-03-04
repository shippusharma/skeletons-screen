import React,{useState,useEffect} from 'react'

export default function Article() {

    const [article, setArticle] = useState(null);

    useEffect(() => {
       setTimeout(async () => {
           const res = await fetch('https://jsonplaceholder.typicode.com/posts');
           const data = await res.json()
           setArticle(data);
       }, 4000);   
    })

    return (
        <div className="Article">
            <h2>Article</h2>

            {article && article.map(op => (
                <div className="article"  key={op.id}> 
                    <h3>{op.title}</h3>
                    <p>{op.body}</p>
                    <br />
                </div>           
            ))}
        
            {!article &&  <div>Loading...</div>}
        </div>
    )
}
