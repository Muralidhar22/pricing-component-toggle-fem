const toggle = document.querySelector('.price-change__toggle')
const basicPrice = document.querySelector('.basic-plan .price')
const profPrice = document.querySelector('.professional-plan .price')
const masterPrice = document.querySelector('.master-plan .price')

console.log(toggle.checked,basicPrice,profPrice,masterPrice)

toggle.addEventListener('change',()=>{
    if(!toggle.checked){
        basicPrice.innerHTML = `&dollar;199.99`;
        profPrice.innerHTML = `&dollar;249.99`;
        masterPrice.innerHTML = `&dollar;399.99`;
    }
    else{
        basicPrice.innerHTML = `&dollar;19.99`;
        profPrice.innerHTML = `&dollar;24.99`;
        masterPrice.innerHTML = `&dollar;39.99`;
    }
})
