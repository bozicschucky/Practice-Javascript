const http = new easyHttp;

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts',function (err,response) { 
//     if (err) {
//         console.log(err)
//     } else {
        
//         console.log(response);
//     }
// });


// Create Data
const data = {
    title:'Custom Post  Yoo',
    body: 'this is custom'
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts',data, function (err,post) {
//     if (err) {
//         console.log(err);    
//     } else {
        
//         console.log(post);    
//     }
// });


// Update a post using put
// http.put('https://jsonplaceholder.typicode.com/posts/1',data, function (err,post) {
//     if (err) {
//         console.log(err);    
//     } else {
        
//         console.log(post);    
//     }
// });



// Delete posts
http.delete('https://jsonplaceholder.typicode.com/posts/1',function (err,response) { 
    if (err) {
        console.log(err)
    } else {
        
        console.log(response);
    }
});