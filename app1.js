// création d'une variable qui permet de récupérer la classe du bouton
let beuss=document.getElementById("licki");
let div=document.getElementById("second");
beuss.addEventListener("click",addnote);
function addnote()
{
    let contenaire=document.createElement("div");
    contenaire.innerHTML=`

    <div class="composant">


        <div class="icone">
            <i class="fa-solid fa-pen-to-square blanc"></i>
            <i class="fa-solid fa-trash-can blanc"></i>
        </div>
        <div >
                    <textarea name="texte" id="text" cols="30" rows="18" class="area" ></textarea>
        </div>



         </div>


    
`
div.appendChild(contenaire);
let trash=contenaire.querySelector(".fa-trash-can");
    trash.addEventListener("click",delet);
let editt=contenaire.querySelector(".fa-pen-to-square");
    editt.addEventListener("click",edi);

    
}

function delet(e)
{
    let getTarget=e.target;
    let getparent=getTarget.parentNode;
    let parent1=getparent.parentNode;
    

    parent1.remove();
}


function edi(a)
{
    let getTraget=a.target;
    let parent1=getTraget.parentNode;
    let parent2=parent1.parentNode;
    let fils2=parent2.lastElementChild;
    let textee=fils2.lastElementChild;
        // textee.setAttribute('value',"disabled");
        if(textee.classList.contains("area"))
        {
            textee.disabled = !textee.disabled;
        }
        console.log(textee);

    //fils2.remove();
   
    // console.log(fils2);


    // disabled="disabled"
}




