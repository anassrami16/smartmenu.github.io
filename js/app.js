

let ModalState = false;



menu.map((item)=>{
    document.querySelector('.menu_container').innerHTML += `<div class="menu_item" id="${item.id}">
    <div class="menu_item_numbers">
        <div class="menu_item_id">${item.id}</div>
        <div class="menu_item_price">${item.price}</div>
    </div>
    <img src="${item.image}" class="menu_item_image" alt="">
    <div class="menu_item_name">${item.name}</div>
    </div>`
})


Array.from(document.querySelectorAll('.menu_item')).map((item) => {
    item.addEventListener('click', (e) => {

        if(ModalState) {
            document.querySelector('.modal').style.display = 'none';
            ModalState = false;
        }
        else {
            document.querySelector('.modal').style.display = 'block';
            ModalState = true;
            const id = item.id;
            console.log(id)
            console.log(menu)
            //get the object that have 
            const current_item = menu.filter((item)=> item.id == id)[0];
            console.log(current_item)
            document.querySelector('.modal_id').innerHTML ="#"+ current_item.id;
            document.querySelector('.modal_title').innerHTML = current_item.name;
            document.querySelector('.modal_desc').innerHTML = current_item.desc;
            document.querySelector('.modal_price').innerHTML ="Price: "+ current_item.price;
            document.querySelector('.modal_image').src = current_item.image;

        }
        
        
    });
});

document.querySelector('.close').addEventListener('click' , (e)=>{
    document.querySelector('.modal').style.display = 'none';
    ModalState = false;
})


