

let ModalState = false;



menu.map((item)=>{
    document.querySelector('#menu-1').innerHTML += `<div class="menu_item" id="${item.id}">
    <div class="menu_item_numbers">
        <div class="menu_item_id">${item.id}</div>
        <div class="menu_item_price">${item.price}</div>
    </div>
    <img src="${item.image}" class="menu_item_image" alt="">
    <div class="menu_item_name">${item.name}</div>
    </div>`
})

menu_2.map((item)=>{
    document.querySelector('#menu-2').innerHTML += `<div class="menu_item" id="${item.id}">
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
            document.querySelector('.modal').style.display = 'flex';
            ModalState = true;
            const id = item.id;
            console.log(id)
            console.log(menu)
            //get the object that have 
            //concat menu and menu_2

            const current_item = menu.concat(menu_2).filter((item)=> item.id == id)[0];
            console.log(current_item)
            
            document.querySelector('.modal_title').innerHTML =current_item.id +". " +( menu_2.includes(current_item) ? "Donburi "+current_item.type : "Yaki Soba "+current_item.type);
            document.querySelector('.modal_subtitle').innerHTML = current_item.subtitle;
            document.querySelector('.modal_desc').innerHTML = current_item.desc;
            
            document.querySelector('.modal_image').src = current_item.image;

        }
        
        
    });
});

document.querySelector('.close').addEventListener('click' , (e)=>{
    document.querySelector('.modal').style.display = 'none';
    ModalState = false;
})


