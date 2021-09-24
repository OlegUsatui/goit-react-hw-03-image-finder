const getImages = (images, page) => {
    const options = `key=22615360-5cbe46b430b53ed17aa097d2d&q=${images}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
    const url = `https://pixabay.com/api/?${options}`;
    
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        }
        Promise.reject(new Error("Нету таких фотографий"))
    })
        .catch(error => console.log(error))
};

export default getImages;