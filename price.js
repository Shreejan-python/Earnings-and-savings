console.log("Welcome");

let addSalary = document.getElementById("addSalary");
let salarytxt = document.getElementById("salarytxt");
let salary_div = document.getElementById("salary");
let c = localStorage.getItem('saved');
alert(`Last time you saved ${c}`)

addSalary.addEventListener("click", function (e) {
    let para = document.createElement("p");
    
    para.innerText = parseInt(salarytxt.value);
    let heading = document.createElement('h1');
    heading.innerText = "Your salary in one month is : "
    salary_div.appendChild(heading);
    salary_div.appendChild(para);
    salarytxt.value = "";
    let savingsbtn = document.createElement("button");
    savingsbtn.innerText = "Next";
    salary_div.appendChild(savingsbtn);
    savingsbtn.addEventListener("click", function (e) {
        let div_earnings = document.createElement("div");
        div_earnings.id = "earnings";
        let input = document.createElement("input");
        input.type = "text";

        let header_1 = document.createElement("h2");
        header_1.innerText = "Give the details of how much money you have used ?";
        div_earnings.appendChild(header_1);
        let detail_1 = document.createElement("h4");
        detail_1.innerText = "Give the amount you have used : ";
        div_earnings.appendChild(detail_1);
        div_earnings.appendChild(input);
        let addUsed = document.createElement("button");
        addUsed.innerText = "Add";
        div_earnings.appendChild(addUsed);
        addUsed.addEventListener("click", function () {
            let txt = document.createElement("h5");
            txt.innerText = "You used : ";
            div_earnings.appendChild(txt);
            let saved = document.createElement("h5");
            saved.innerText = input.value;
            div_earnings.appendChild(saved);
            let more = document.createElement("button");
            let check = document.createElement("button");
            more.innerText = "More(like the above)";
            check.innerText = "Total money saved";
            more.addEventListener("click", function (e) {
                let div_last = document.getElementById("last");
                let input_last = document.createElement("input");
                input_last.type = "text";
                input_last.placeholder = "Amount you have used : "
                div_last.appendChild(input_last);
                
                let addUsedlast = document.createElement("button");
                addUsedlast.innerText = "Add";
                
                div_last.appendChild(addUsedlast);
                addUsedlast.addEventListener("click", function () {
                    let txtlast = document.createElement("h5");
                    txtlast.innerText = "You used : ";
                    div_last.appendChild(txtlast);
                    let saved_last = document.createElement("h5");
                    saved_last.innerText = input_last.value;
                    div_last.appendChild(saved_last);
                    more.innerText = "More(like the above)";
                    check.innerText = "Total money saved";
                    div_last.appendChild(more);
                    div_last.appendChild(check);
                    
                })
                
            })
            check.addEventListener("click", function(e){
                let no = parseInt(prompt("HOW MUCH TIME YOU USED MONEY"));
                let salary = parseInt(prompt("Give your salary in one month : "));
                let total = 0;
                let save = 0;
            
                while(no>0){
                    let price = parseInt(prompt("Give the amount you have used one after the other : "));
                    total = total + price;
                    save = salary - total;
                    
                    no--;
                    
                }
                localStorage.setItem('used', total);
                localStorage.setItem('saved', save);
                let a = localStorage.getItem('used');
                let b = localStorage.getItem('saved');
                alert(`You used ${a}`);
                alert(`You saved ${b}`);
            
                if (total>=salary){
                    alert(`You are in loss of ${a - b}`);
                
                }
                
            })
            
            div_earnings.appendChild(more);
            div_earnings.appendChild(check);
        })
        salary_div.appendChild(div_earnings);
    })
})

