// import './App.css';
// import { useState, useEffect } from 'react';

// const App = () => {
//   const [advice, setAdvice] = useState();
//   const [refresh, setRefresh] = useState(false);

//   useEffect(() => {
//     fetch('https://pastebin.com/MccsRE0p')
//     .then(resp => resp.json())
//     .then(resp => {
//       const storedAdvices = localStorage.getItem('advices');
//       const returnedObject = {text: resp.slip.advice, count: 1 };
//       if(storedAdvices) {
//         const parsedAdvices = JSON.parse(storedAdvices);
//         parsedAdvices.push(resp.slip.id);
//         localStorage.setItem('advices', JSON.stringify(parsedAdvices));
//         returnedObject.count = parsedAdvices.filter((value) => value === resp.slip.id).length;
//       } else {
//         localStorage.setItem('advices', JSON.stringify([resp.slip.id]));
//       }



//       // kitas

import './App.css';
import { useEffect, useState } from 'react';
import Post from './components/post/Post'

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(JSON.parse(localStorage.getItem('posts')));
    }, []);

    return (
        <>
            <h1 className="text-center my-3">Mano blog'as</h1>
            <div className="container">
                <div className="row">
                    {posts.map(post => 
                        <Post post={post} key={post._id} />
                    )}
                </div>
            </div>
        </>
    );
}

export default App;