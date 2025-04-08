const name_input_field=document.querySelector('#input_1');
const url_input_field=document.querySelector('#input_2');
const btn=document.querySelector('#btn');

// console.log(name_input_field);
// console.log(url_input_field);
// console.log(btn);


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(name_input_field.value);
    console.log(url_input_field.value);
})

// regex Implementation
name_input_field.addEventListener('input',(e)=>{
    
    const name_regex = /\w{5}/;
    
    console.log(name_regex.test(e.target.value));
    // console.log(name_input_field.classList)

    if(name_regex.test(e.target.value)){
        // console.log("Hello")
        name_input_field.classList.replace("focus:border-red-300","focus:border-amber-300")
        name_input_field.classList.replace("focus:shadow-red-200","focus:shadow-amber-200")
        name_input_field.classList.replace("focus:ring-red-200","focus:ring-amber-200")
        // console.log(name_input_field.classList)
    }
    else{
        name_input_field.classList.replace("focus:border-amber-300","focus:border-red-300")
        name_input_field.classList.replace("focus:shadow-amber-200","focus:shadow-red-200")
        name_input_field.classList.replace("focus:ring-amber-200","focus:ring-red-200")
    }
})

url_input_field.addEventListener('input',(e)=>{
    
    const url_regex = /\w{5}/;
    
    console.log(url_regex.test(e.target.value));
    // console.log(name_input_field.classList)

    if(url_regex.test(e.target.value)){
        // console.log("Hello")
        url_input_field.classList.replace("focus:border-red-300","focus:border-amber-300")
        url_input_field.classList.replace("focus:shadow-red-200","focus:shadow-amber-200")
        url_input_field.classList.replace("focus:ring-red-200","focus:ring-amber-200")
        // console.log(url_input_field.classList)
    }
    else{
        url_input_field.classList.replace("focus:border-amber-300","focus:border-red-300")
        url_input_field.classList.replace("focus:shadow-amber-200","focus:shadow-red-200")
        url_input_field.classList.replace("focus:ring-amber-200","focus:ring-red-200")
    }
})
let cartona = `<tr>
                <td class="text-center w-1/6"></td>
                <td class="text-center w-3/6"></td>
                <td class="text-center w-1/6"> <button class="bg-lime-400 px-4 py-2 text-white rounded-lg font-semibold"><i class="fa-solid fa-trash-can"></i> Update</button> </td>
                <td class="text-center w-1/6 ">  <button class="bg-red-600 px-4 py-2 text-white rounded-lg font-semibold"><i class="fa-solid fa-trash-can"></i> Delete</button> </td>
            </tr>`