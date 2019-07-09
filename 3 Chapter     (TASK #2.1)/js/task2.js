function getData(){
    fetch ("http://46.101.146.101:8081/categories/")
    .then ((res)=> res.json())
    .then((data)=>{
        let categories = `<h1>Categories</h1>`;
        data.forEach(function(category){
            categories+=`
                <ul id="categories">
                    <li class= "card"> ${category.title}</li>
                    <li class= "card"> <img src='${category.category_image_url}' /> </li>
                </ul>
            `; 
        });
        document.getElementById('categories').innerHTML = categories;    
    })
}
getData();
