/**
 * Easy http Library
 * Library for making http requests
 * 
 * @version 2.0
 * @author Chucky
 * @license MIT
 * 
 */


 class EasyHttp{
    // Make http get requests 
    get( url){

        return new Promise((resolve,reject) => {
            fetch(url).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });

     }


     //Make an http post request
     post( url,data){

        return new Promise((resolve,reject) => {
            fetch(url, {
                method:'POST',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });

     }

    // Make an http put request
    put( url,data){

        return new Promise((resolve,reject) => {
            fetch(url, {
                method:'PUT',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });

     }


    // Make an http delete
    delete( url){

        return new Promise((resolve,reject) => {
            fetch(url, {
                method:'DELETE',
                headers:{'Content-type':'application/json'},
            }).then(res => res.json())
            .then(() => resolve("Resource Deleted.."))
            .catch(err => reject(err));
        });

     }
 }