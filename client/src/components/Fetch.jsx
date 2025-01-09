// This is not used in the project, it was just for practice

import {useState, useEffect} from 'react';

function Fetch(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => setData(data))
       .catch(error => console.error('Error:', error));
    }, []);

    return(
        <div>
        <h1>Data from API: </h1>
        
        <ul>
            {data.map(item =>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        </div>
    );
}

export default Fetch;