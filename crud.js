const btnAdd=document.querySelector('.addProduct');
const form=document.querySelector('.add')
const btnCancel=document.querySelector('.btn-cancel');
btnAdd.addEventListener('click',()=>{
    form.style.display='block'
    ClearData();
})
btnCancel.addEventListener('click',()=>{
    form.style.display='none'
})
const btnSave=document.querySelector(".btn-save");
const code=document.querySelector('#code');
const name=document.querySelector('#name');
const qty=document.querySelector('#qty');
const price=document.querySelector('#price');
const image=document.querySelector('#image');
const tbody=document.querySelector('.tbody');
const Total=()=>{
    return qty.value*price.value;
}
const Discount=()=>{
    if(Total()<10000){
        return 0;
    }else{
        if(Total()>=10000 & Total()<=50000){
            return 5;
        }else if(Total()>50000 & Total()<=100000){
            return 10;
        }else if(Total()>100000 & Total()<=150000){
            return 15;
        }else{
            return 20;
        }
    }
}
const Payment=()=>{
    return Total()-(Total()*Discount())/100;
}
btnSave.addEventListener('click',()=>{
    form.style.display='none'
    var images=image.files[0];
    tbody.innerHTML+=`
        <tr>
            <td>${code.value}</td>
            <td>${name.value}</td>
            <td>${qty.value}</td>
            <td>${price.value}</td>
            <td>${Total()} riels</td>
            <td>${Discount()}%</td>
            <td>${Payment()}riels</td>
            <td>
                <img width="120px" src="${URL.createObjectURL(images)}" alt="">
            </td>
            <td>
                <button class="btn btn-success">Edit</button>
                <button class="btn btn-danger" onclick="DeleteProduct(this)">Delete</button>
            </td>
        </tr>
    `;
    
})
ClearData=()=>{
    const code=document.querySelector('#code');
    const name=document.querySelector('#name');
    const qty=document.querySelector('#qty');
    const price=document.querySelector('#price');
    const image=document.querySelector('#image');
    code.value='';
    name.value='';
    qty.value='';
    price.value='';
    image.value='';

}
const DeleteProduct=(deletepro)=>{
    let row=deletepro.parentElement;
    if(confirm("Are you sure to delete?")){
        tbody.deleteRow(row.rowIndex);
    }
}

