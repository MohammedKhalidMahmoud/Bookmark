const name_input_field=document.querySelector('#input_1');
const url_input_field=document.querySelector('#input_2');
const btn=document.querySelector('#btn');
const layer=document.querySelector('.layer');
const modal=document.querySelector('.modal');
const close_button=document.querySelector('#close_button');
const table=document.querySelector('table');
const name_cross_mark=document.querySelector('#name_cross_mark');
const name_check_mark=document.querySelector('#name_check_mark');
const url_cross_mark=document.querySelector('#url_cross_mark');
const url_check_mark=document.querySelector('#url_check_mark');


function modal_toggle(){
    modal.classList.toggle('hidden');
    layer.classList.toggle('hidden');
}
function escListener(e) {
    if (e.key === "Escape") {
        modal_toggle();
    }
}
function reset(){
    name_input_field.value='';
    url_input_field.value='';
}
btn.addEventListener('click', (e)=>{
    e.preventDefault();   // to prevent default behavior (reload)
    if(name_regex.test(name_input_field.value) && url_regex.test(url_input_field.value))
        add();
    else{
        modal_toggle();
        removeEventListeners();
        addEventListeners();
        
    }  
    
    
})

function removeEventListeners(){
    layer.removeEventListener('click', modal_toggle);  // to clear the previous event listeners before attaching a new one
    close_button.removeEventListener('click', modal_toggle);  // to clear the previous event listeners before attaching a new one
    document.removeEventListener('keydown', escListener); // to clear the previous event listeners before attaching a new one

}
function addEventListeners(){
    document.addEventListener('keydown', escListener);
    close_button.addEventListener('click', modal_toggle);
    layer.addEventListener('click', modal_toggle);
}
const name_regex = /\w{5}/;
const url_regex = /^\w+\.com$/;
// regex Implementation
name_input_field.addEventListener('input',(e)=>{
    // console.log(name_regex.test(e.target.value));
    validate_name(e);
})

url_input_field.addEventListener('input',(e)=>{
    // console.log(url_regex.test(e.target.value));
    validate_url(e);
})

function validate_url(e){
    if(url_regex.test(e.target.value)){
        // console.log("Hello")
        url_check_mark.classList.remove('invisible')
        url_cross_mark.classList.add('invisible')
        url_input_field.classList.remove("focus:border-red-300","focus:shadow-red-300","focus:ring-red-300")
        url_input_field.classList.add("focus:border-green-300","focus:shadow-green-300","focus:ring-green-300")
  
        // console.log(url_input_field.classList)
    }
    else{
        url_check_mark.classList.add('invisible')
        url_cross_mark.classList.remove('invisible')
        url_input_field.classList.remove("focus:border-amber-300","focus:shadow-amber-300","focus:ring-amber-300")
        url_input_field.classList.remove("focus:border-green-300","focus:shadow-green-300","focus:ring-green-300")
        url_input_field.classList.add("focus:border-red-300","focus:shadow-red-300","focus:ring-red-300")

    }
}
function validate_name(e){
    if(name_regex.test(e.target.value)){
        // console.log("Hello")
        name_check_mark.classList.remove('invisible')
        name_cross_mark.classList.add('invisible')
        name_input_field.classList.remove("focus:border-red-300","focus:shadow-red-300","focus:ring-red-300")
        name_input_field.classList.add("focus:border-green-300","focus:shadow-green-300","focus:ring-green-300")
  
    }
    else{
        name_check_mark.classList.add('invisible')
        name_cross_mark.classList.remove('invisible')
        name_input_field.classList.remove("focus:border-amber-300","focus:shadow-amber-300","focus:ring-amber-300")
        name_input_field.classList.remove("focus:border-green-300","focus:shadow-green-300","focus:ring-green-300")
        name_input_field.classList.add("focus:border-red-300","focus:shadow-red-300","focus:ring-red-300")
        
    }
}
let index=1;
function add(){
    if(name_regex.test(name_input_field.value) && url_regex.test(url_input_field.value)){
        let cartona = `<tr class="border-bottom border-gray-300 py-2 my-2 ">
                <td class="text-center w-1/6">${index}</td>
                <td class="text-center w-3/6">${name_input_field.value}</td>
                <td class="text-center w-1/6"> <a class="bg-lime-400 px-4 py-2 text-white rounded-lg font-semibold" href="${url_input_field.value}" target="_blank"><i class="fa-solid fa-eye pe-2"></i>Visit</a> </td>
                <td class="text-center w-1/6"> <button class="bg-red-600 px-4 py-2 text-white rounded-lg font-semibold cursor-pointer"><i class="fa-solid fa-trash-can"></i> Delete</button> </td>
            </tr>`;
        index++;
        table.insertAdjacentHTML('beforeend', cartona);
        reset();
        afterAdd();     

    }
    
}

function afterAdd(){
    name_input_field.classList.remove('focus:border-green-300','focus:shadow-green-300','focus:ring-green-300')
    url_input_field.classList.remove('focus:border-green-300','focus:shadow-green-300','focus:ring-green-300')
    name_input_field.classList.add('focus:border-amber-300','focus:shadow-amber-300','focus:ring-amber-300')
    url_input_field.classList.add('focus:border-amber-300','focus:shadow-amber-300','focus:ring-amber-300')
    name_check_mark.classList.add("invisible");
    url_check_mark.classList.add("invisible");
}


function _delete(e){
    console.log("Dlete");
    
}