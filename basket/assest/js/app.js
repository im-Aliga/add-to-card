let buttons=document.querySelectorAll('.btn')
if(localStorage.getItem('basket')=== null){
    localStorage.setItem('basket',JSON.stringify([]))
}



for (let button of buttons) {
    button.onclick =function(e){
        e.preventDefault();
           let gid=e.target.parentElement.parentElement.id;
           let gname=e.target.parentElement.children[0].innerHTML;
           let gcost=e.target.parentElement.children[1].innerHTML;
           let gimg=e.target.parentElement.parentElement.children[0].src;
           let basket=JSON.parse(localStorage.getItem('basket')); 
           let exitg=basket.find(g=>g.Id===gid)
           console.log(exitg);

            
           if(exitg== undefined){

               
               basket.push({
                Id:gid,
                Name:gname,
                Cost:gcost,
                Img:gimg,
                Count:1
                
            })
          }
          else{
         exitg.Count+=1
         document.getElementById('toaster2').style.opacity='1'
           setTimeout(()=>{
               document.getElementById('toaster2').style.opacity='0'

           },1000)
        }

           localStorage.setItem('basket',JSON.stringify(basket));
           document.getElementById('toaster').style.opacity='1'
           setTimeout(()=>{
               document.getElementById('toaster').style.opacity='0'

           },1000)
           CountGalary();
    }
}
function CountGalary(){
    let basket=JSON.parse(localStorage.getItem('basket')); 
    document.getElementById('counter').innerHTML=basket.length
}
CountGalary();