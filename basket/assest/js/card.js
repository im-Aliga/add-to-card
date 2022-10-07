function Getgallary(){
    let basket=JSON.parse(localStorage.getItem('basket'));
    let item =''
    basket.forEach(ele => {
        let sum=parseFloat(ele.Cost)*parseFloat(ele.Count)
            
            
        
        item+=` 
        <tr>
        <th scope="row">${ele.Id}</th>
        <td>
        <img src=${ele.Img} alt="">
        </td>
        <td>${ele.Name}</td>
        <td>
        <input id="inp" min="1" type="number" value="${ele.Count}">
        </td>
        <td>${ele.Cost}</td>
        <td> ${sum}</td>
        </tr>`
        
        
        
        
    });
    document.getElementById('body').innerHTML=item
}
Getgallary();
let input=document.querySelectorAll("#inp")
        input.forEach(inp=>{
            this.onchange=function(e){
                let value=e.target.value
                let price=e.target.parentElement.parentElement.children[4].innerHTML
                let cut=price.slice(-7,-3)
                console.log(cut);
                e.target.parentElement.parentElement.children[5].innerHTML=cut*value +"azn";


            }

        })
