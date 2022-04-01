// creating input
var input=document.createElement("input");
input.setAttribute("type","search");
input.setAttribute("name"," ");
input.setAttribute("id","search");
input.setAttribute("placeholder","Enter the Brand,type of product");
document.body.append(input);

// code for click me
let btn=document.getElementById("btn1");
btn.addEventListener("click",function(){
        fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        .then((response)=>response.json())
        .then((data)=>console.log(data))
})

// code for input and search
let button=document.createElement("button");
button.addEventListener("click",products);
button.innerHTML="Search";
document.body.append(button);

// function for search and input
async function products(){
        try{
            let res=document.getElementById("search").value;
            console.log(res);
            let result=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?${res}`);
            let final=await result.json();
            console.log(final);
    let div=document.createElement("div");
    let table=document.createElement("table");
    table.setAttribute("id","table");

    let thead=document.createElement("thead");
    thead.style.backgroundColor="pink";
    thead.style.color="black";

    let tbody=document.createElement("tbody");
    tbody.style.textAlign="center";
    tbody.style.background="#FDD7AA";
    thead.style.color="black";

// headings of a table
    let tr1=document.createElement("tr");

    let th7=document.createElement("th");
    th7.innerHTML="id";

    let th1=document.createElement("th");
    th1.innerHTML="Brand name";

    let th2=document.createElement("th");
    th2.innerHTML="Name";

    let th3=document.createElement("th");
    th3.innerHTML="price";

    let th4=document.createElement("th");
    th4.innerHTML="image_thunbnail";

    let th5=document.createElement("th");
    th5.innerHTML="product_link";

    let th6=document.createElement("th");
    th6.innerHTML="description";

    button.append(div);
    div.append(table);
    table.append(thead,tbody);
    thead.append(tr1);
    thead.append(th7,th1,th2,th3,th4,th5,th6);

// data of table
    for(let i=1;i<final.length;i++){
        let tr2=document.createElement("tr");

        let td7=document.createElement("td");
        td7.innerHTML=final[i] ["id"];

        let td1=document.createElement("td");
        td1.innerHTML=final[i] ["brand"];

        let td2=document.createElement("td");
        td2.innerHTML=final[i].name;

        let td3=document.createElement("td");
        td3.innerHTML=final[i].price;

        let img=document.createElement("img");
        img.className="image";
        img.src=final[i].image_link;
        img.style.width="60px";
        img.style.height="80px";
        let td4=document.createElement("td");
        td4.append(img);

        let td5=document.createElement("td");
        td5.innerHTML=final[i].product_link;

        let td6=document.createElement("td");
        td6.innerHTML=final[i].description;


        tr2.append(td7,td1,td2,td3,td4,td5,td6);
        tbody.append(tr2);
    }
    }
// catch
    catch (error){
            console.log(error);
    }
}

