/**
 * Easy http Library
 * Library for making http requests
 * 
 * @version 3.0
 * @author Chucky
 * @license MIT
 * 
 */


class EasyHttp {
    // Make http get requests 
    async get(url) {

        const response = await fetch(url);
        const resData = await response.json();
        return resData;

    }


    //Make an http post request
    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)

        });

        const resData = await response.json();
        return resData;

    }

    // Make an http put request
    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)

        });

        const resData = await response.json();
        return resData;

    }


    // Make an http delete
    delete(url) {

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)

        });

        const resData = await "Resource deleted";
        return resData;

    }
}