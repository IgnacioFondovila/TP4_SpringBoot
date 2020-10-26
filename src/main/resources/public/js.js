
let url="http://localhost:8080/"

	
//a)dar de alta un cliente
let form = document.getElementById("addClient");
if(form != null){
    form.addEventListener('submit',function(e){
        let alrt=document.querySelector("#alert");
        alrt.hidden = true;
        removeAllChildNodes(alrt);
        e.preventDefault();
        // let genre=document.getElementById("genre").value;
        // if(genre!="0") {
            let data = {
                name: document.getElementById("name").value,
                surname: document.getElementById("surname").value,
                dni: document.getElementById("dni").value*1,
                purchases: [],
            }
            fetch(url + '/clients/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then(response => {
                    let h = document.createElement("h4");
                    let txt = document.createTextNode("El cliente se agrego correctamente ")
                    h.append(txt)
                    alrt.appendChild(h)
                    alrt.hidden = false;
                    // getAllCitys();
                })
                .catch(error => {
                    let h = document.createElement("h4");
                    let txt = document.createTextNode("El cliente No se agrego ");
                    h.append(txt);
                    alrt.appendChild(h);
                    alrt.hidden = false;
                })
        // }else {
        //             let h = document.createElement("h4");
        //             let txt = document.createTextNode("Debe seleccionar un sexo valido");
        //             h.append(txt);
        //             alrt.appendChild(h);
        //             alrt.hidden = false;
        // }
        })
}
let putSelect = document.querySelector("#putSelect")
putSelect.addEventListener("focus", function(){obtainClients(putSelect)})

async function obtainClients(selectElem){
    try{
        let clients = await getAllClientsToSelect()
        removeAllChildNodes(selectElem)
        let optAux = document.createElement("option")
        let txtAux = document.createTextNode("Clientes")
        optAux.append(txtAux)
        optAux.hidden = true
        selectElem.appendChild(optAux)
        for(let c of clients){
            let opt = document.createElement("option")
            let txt = document.createTextNode(c.name)
            opt.append(txt)
            opt.value = JSON.stringify(c)
            selectElem.appendChild(opt)
        }
    }
    catch(e){
        console.log(e)
    }
}
async function obtainProducts(selectElem){
    try{
        let products = await getAllProductsToSelect()
        removeAllChildNodes(selectElem)
        let optAuxProd = document.createElement("option")
        let txtAuxProd = document.createTextNode("Productos")
        optAuxProd.append(txtAuxProd)
        optAuxProd.hidden = true
        selectElem.appendChild(optAuxProd)
        for(let p of products){
            let opt = document.createElement("option")
            let txt = document.createTextNode(p.name)
            opt.append(txt)
            opt.value = JSON.stringify(p)
            selectElem.appendChild(opt)
        }
    }
    catch(e){
        console.log(e)
    }
}
obtainProducts(document.querySelector("#productsOfNewPurchase"))
obtainClients(document.querySelector("#putSelect"))
obtainClients(document.querySelector("#clientsOfNewPurchase"))



// function obtainClients(){
//     //por parametro que llegue el select
//     let clients = getAllClientsToSelect()
//     for(let c of clients.value){
//         let opt = document.createElement("option")
//         let txt = document.createTextNode(c.name)
//         opt.append(txt)
//         opt.value = c.dni
//         putSelect.appendChild(opt)
//     }
// }

let modifyClientForm = document.getElementById("modifyClient");
if(form != null){
    modifyClientForm.addEventListener('submit',function(e){
        let alrt=document.querySelector("#putAlert");
        alrt.hidden = true;
        removeAllChildNodes(alrt);
        e.preventDefault();
        let data = {
            name: document.getElementById("nameP").value,
            surname: document.getElementById("surnameP").value,
            // dni: document.getElementById("dniP").value,
            dni: putSelect.value,
            purchases: [],
        }
        let clientId = putSelect.value;
        fetch(url + '/clients/'+clientId, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => {
                let h = document.createElement("h4");
                let txt = document.createTextNode("El cliente se modifico correctamente ")
                h.append(txt)
                alrt.appendChild(h)
                alrt.hidden = false;
            })
            .catch(error => {
                let h = document.createElement("h4");
                let txt = document.createTextNode("El cliente No se modifico ");
                h.append(txt);
                alrt.appendChild(h);
                alrt.hidden = false;
            })
    })
}

//Método para borrar un cliente por su dni
let deleteClientForm = document.getElementById("deleteClientForm");
// console.log(deleteClientForm)
if(deleteClientForm != null){
    deleteClientForm.addEventListener('submit',function(e){
        let alrt=document.querySelector("#alertDelCli");
        alrt.hidden = true;
        removeAllChildNodes(alrt);
        e.preventDefault();
        let dni = document.getElementById("deleteClient").value
        fetch(url + '/clients/'+dni, {
            method: 'DELETE',
        })
            .then(response => {
                let h = document.createElement("h4");
                let txt = document.createTextNode("El cliente se borró correctamente ")
                h.append(txt)
                alrt.appendChild(h)
                alrt.hidden = false;
            })
            .catch(error => {
                let h = document.createElement("h4");
                let txt = document.createTextNode("El cliente No se borró ");
                h.append(txt);
                alrt.appendChild(h);
                alrt.hidden = false;
            })
    })
}


// b) matricular un estudiante en una carrera
// let matForm = document.getElementById("addMat");
// //matForm.addEventListener("submit", )
// //if(matForm != null){
// matForm.addEventListener('submit', matriculate);
//
// function matriculate(e){
//     e.preventDefault();
// //    console.log("Matriculating..")
//     let alrt=document.querySelector("#alertMat");
//     alrt.hidden = true;
//     removeAllChildNodes(alrt);
//     if(document.getElementById("allCareers1").value==0){
//         let h = document.createElement("h4");
//         let txt = document.createTextNode("Debe seleccionar una carrera valida");
//         h.append(txt);
//         alrt.appendChild(h);
//         alrt.hidden = false;
//         return;
//     }else{
//         let data= {
//             student: document.getElementById("MatriLu").value,
//             career: document.getElementById("allCareers1").value,
//             startYear: document.getElementById("starYear").value,
//             graduationYear: document.getElementById("graduationYear").value,
//         }
//         fetch(url+'/matriculations', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(data)
//         })
//             .then(response => {
//                 let h = document.createElement("h4");
//                 let txt = document.createTextNode("Se matriculo correctamente al estudiante");
//                 h.append(txt);
//                 alrt.appendChild(h);
//                 alrt.hidden = false;
//             })
//             .catch(error =>{
//                 let h = document.createElement("h4");
//                 let txt = document.createTextNode("No se matriculo al estudiante");
//                 h.append(txt);
//                 alrt.appendChild(h);
//                 alrt.hidden = false;
//                 console.log(error)
//             });
//     }
// }


//--------get carreras
// let formi = document.getElementById("getCareer");
// //formi.addEventListener("click", );
//
// async function getAllCareers(){
//     let url2 = url+'/careers';
//     try {
//         let r = await fetch(url2, {
//             "method": "get"
//         }, );
//         let students = await r.json();
// //            console.log("jeje"+students)
//         let selectCareers= document.querySelectorAll(".allCareers");
// //        console.log(selectCareers[0].id+" "+selectCareers[1].id+" sdfsdf")
//         console.log("Buscando carreras..")
//         for(let c in students){
//
// //            console.log(selectCareers+"sdf")
//             for(let sel of selectCareers){
//                 let opt=document.createElement("option");
//                 let spn=document.createElement("span");
//                 let cName= document.createTextNode(students[c].name);
//                 spn.append(cName);
//                 opt.value=students[c].id;
//                 opt.append(spn);
//                 sel.append(opt)
// //                console.log(sel)
//             }
//             //            selectCarrers.append(opt)
// //            console.log("dddd")
//         }
//     }
//     catch{
//
//     }
// }
// getAllCareers();

// c) recuperar todos los clientes.

let btnGetAllClients= document.getElementById("getClients");
btnGetAllClients.addEventListener("click", getAllClients);

async function getAllClients(){
    let url2 = url+'/clients';
    try {
        let r = await fetch(url2, {
            "method": "get"
        }, showClients);
        let r2 = await r.json();
        let contStud= document.querySelector("#showClients");
        showClients(r2,contStud)
    }catch (n) {
        console.log("Error obteniendo clientes");
    }
}

//Funcion auxiliar para obtener lista de clientes
async function getAllClientsToSelect(){
    let url2 = url+'/clients';
    try {
        let r = await fetch(url2, {
            "method": "get"
        });
        let r2 = await r.json();
        return r2
        // let contStud= document.querySelector("#showClients");
        // showClients(r2,contStud)
    }catch (n) {
        console.log("Error obteniendo clientes");
        return null
    }
}
//Función auxiliar para obtener todos los productos
async function getAllProductsToSelect(){
    let url2 = url+'/products';
    try {
        let r = await fetch(url2, {
            "method": "get"
        });
        let r2 = await r.json();
        return r2
    }catch (n) {
        console.log("Error obteniendo productos");
        return null
    }
}



// d) recuperar un cliente, en base a su dni.
document.getElementById("getClientForm").addEventListener("submit",getClient)

async function getClient(e){
    e.preventDefault();
    let alrt=document.querySelector("#alertSt")
    alrt.hidden=true
    let clientId = document.querySelector("#getClient").value;
    let div=document.getElementById("divInner");
    removeAllChildNodes(div);
    
    let url2 = url+'/clients/'+clientId;
    try {
        let r = await fetch(url2, {
            "method": "get"
        });
        let st = await r.json();
        if(st!=null){
            let tr= document.createElement("tr");
            let liName = document.createElement("td");
            let name = document.createTextNode("NAME");
            liName.append(name)
            let liSurname = document.createElement("td");
            let surname = document.createTextNode("SURNAME");
            liSurname.append(surname);
            let liD = document.createElement("td");
            let dni = document.createTextNode("DNI");
            liD.append(dni);
            // let liL = document.createElement("td");
            // let lu = document.createTextNode("L.U");
            // liL.append(lu);
            // tr.append(liName, liSurname, liAge, liGenre, liCity, liD, liL);
            tr.append(liName, liSurname, liD);
            div.appendChild(tr)
            let ul = document.createElement("tr");
            let liN = document.createElement("td");
            let sName = document.createTextNode(st.name);
            liN.append(sName);
            let liS = document.createElement("td");
            let sSurname = document.createTextNode(st.surname);
            liS.append(sSurname);
            let liDNI = document.createElement("td");
            let sDNI = document.createTextNode(st.dni);
            liDNI.append(sDNI);
            // ul.append( liN, liS, liA, liG, liC, liDNI, liLU);
            ul.append( liN, liS, liDNI);
            div.appendChild(ul)
            div.hidden=false;
        }else{
            let h = document.createElement("h4");
            let txt = document.createTextNode("No se encontró ningún cliente con el DNI proporcionado");
            h.append(txt);
            alrt.appendChild(h);
            alrt.hidden = false;
        }
    }
    catch (n) {
        console.log("Error al obtener el cliente: "+n);
        let h = document.createElement("h4");
        let txt = document.createTextNode("No se encontró ningún cliente con el DNI proporcionado");
        h.append(txt);
        removeAllChildNodes(alrt)
        alrt.appendChild(h);
        alrt.hidden = false;
    }
}


//Compraaaa--------------------------------------------------
let addPClientSelect = document.querySelector("#clientsOfNewPurchase")
addPClientSelect.addEventListener("focus", function(){obtainClients(addPClientSelect)})
let addPProductSelect = document.querySelector("#productsOfNewPurchase")
addPProductSelect.addEventListener("focus", function(){obtainProducts(addPProductSelect)})

let purchaseSubmit = document.querySelector("#addPurchaseSubmit")
purchaseSubmit.addEventListener("click", addPurchase)

async function addPurchase(){
    let client = JSON.parse(addPClientSelect.value)
    let product = JSON.parse(addPProductSelect.value)

    // console.log(clients)

    let alrt=document.querySelector("#alertPu")
    alrt.hidden=true

    let count = document.querySelector("#amountOfNewPurchases").value;
    // let client = clients.value;
    // let product = products.value;
    let div=document.getElementById("divInner");
    removeAllChildNodes(div);

    let url2 = url+"/purchases/"
    let date = new Date()

    let data = {
        count: count,
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        product: product,
        client: client,
    }
    try{
        let r = await fetch(url2, {
            "method": "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        console.log(r)
    }catch (e) {
        console.log(e)
    }
}
// //e) recuperar todos los estudiantes, en base a su género.
// let btnGetStudentsGenre= document.getElementById("getAllStudentsByGenre");
// btnGetStudentsGenre.addEventListener("submit", function(e){getAllStudentsByGenre(e)});
//
// function getAllStudentsByGenre(e){
//     e.preventDefault();
//     let alrt=document.getElementById("alertGenre");
//     alrt.hidden=true;
//     let genre=document.getElementById("studentGenre").value;
//     if(genre == "0"){
//         let h = document.createElement("h4");
//         let txt = document.createTextNode("Debe seleccionar un sexo valido");
//         h.append(txt);
//         removeAllChildNodes(alrt)
//         alrt.appendChild(h);
//         alrt.hidden = false;
//         return;
//     }else{
//         fetch(url+'/students/genre/' + genre)
//             .then(response => response.json())
//             .then(resp => {
//                 let contStud= document.querySelector("#divByG");
//                 showStudents(resp,contStud);
//                 contStud.hidden=false;
//             })
//     }
// }

// f) recuperar las carreras con estudiantes inscriptos, y ordenar por cantidad de inscriptos.

// let btnGetCareersWithStudents= document.getElementById("getCarrers");
// btnGetCareersWithStudents.addEventListener("click", getCareersWithStudents);
//
// let getCareersWithStudentsContainer = document.querySelector("#carrerstWithInscript")
//
// async function getCareersWithStudents(){
//     let url2 = url+'/careers/with-students';
//     try {
//         let r = await fetch(url2, {
//             "method": "get"
//         }, showCareers);
//         let r2 = await r.json();
// //        showStudents(r2,contStud)
//         showCareers(r2, getCareersWithStudentsContainer)
// //        console.log(r2[0].students.length+"r2")
//     }catch(n) {
//     	console.log("Hubo un problema buscando carreras con estudiantes")
// //        console.log("no muestra estudiantes");
//     }
// }

// g) recuperar los estudiantes de una determinada carrera, filtrado por ciudad de residencia.
//document.getElementById("getStudentByCareer").addEventListener('click',function(e){getStudentByCareer(e)})
//
//function getStudentByCareer(e){
//    e.preventDefault();
//    career= document.getElementById("allCareers2").value;
//    
//    let alrt=document.getElementById("alertStudByCareer");
//    alrt.hidden=true;
//    
//    if(career ==0){
//        console.log("elija una carrera")
//        let h = document.createElement("h4");
//        let txt = document.createTextNode("Debe seleccionar una carrera");
//        h.append(txt);
//        removeAllChildNodes(alrt)
//        alrt.appendChild(h);
//        alrt.hidden = false;
//        
//        return
//    }else{
//        fetch(url+'/students/career/' + career)
//            .then(response => response.json())
//            .then(resp => {
//                let cont= document.querySelector("#studentsForCareer");
//                showStudents(resp,cont);
//            })
//    }
//}
// document.getElementById("getStudentByCareer").addEventListener('click',function(e){getStudentByCareer(e)})
//
// function getStudentByCareer(e){
//     e.preventDefault();
//     let alrt=document.getElementById("alertStCity");
//     alrt.hidden=true;
//     removeAllChildNodes(alrt)
//     let career= document.getElementById("allCareers2").value;
//     let city = document.getElementById("allCitys").value;
//     if(career ==0 ){
//         let h = document.createElement("h4");
//         let txt = document.createTextNode("Debe seleccionar una carrera");
//         h.append(txt);
//         alrt.appendChild(h);
//         alrt.hidden = false;
//         return
//     }else if(city==0){
//         let h = document.createElement("h4");
//         let txt = document.createTextNode("Debe seleccionar una ciudad");
//         h.append(txt);
//         alrt.appendChild(h);
//         alrt.hidden = false;
//         return
//     }
//     else{
//         fetch(url+'/students/career/' + career +'/'+city)
//             .then(response => response.json())
//             .then(resp => {
//                 let cont = document.querySelector("#studentsForCareer");
//                 showStudents(resp, cont);
//             })
//     }
// }


// h) generar un reporte de las carreras, que para cada carrera incluya información de los
// inscriptos y egresados por año. Se deben ordenar las carreras alfabéticamente, y
// presentar los años de manera cronológica.

//let btnReport= document.getElementById("getReport")
//btnReport.addEventListener("click", getReport)

document.getElementById("getDayReport").addEventListener('click',function(e){showDayReport(e)})

//    let cont = document.querySelector("#reportContainer");
//    console.log(cont+" aqui")

async function showDayReport(e){
    e.preventDefault();
    let cont = document.querySelector("#dayReportContainer");
    console.log(cont)
    removeAllChildNodes(cont);
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()
    let url2 = url+'/purchases/report/day/'+day+'/month/'+month+'/year/'+year;
    try {
        let r = await fetch(url2, {
            "method": "get"
        }, );
        let report = await r.json();
        // let careers=[];
        for(let p of report){
            // console.log(c)
            let ul = document.createElement("ul");
            let liClient = document.createElement("li")
            let Cname = document.createTextNode("Cliente: " + p.client.name)
            liClient.append(Cname);
            ul.append(liClient);

            let liProduct = document.createElement("li")
            let Pname = document.createTextNode("Producto: " + p.product.name)
            liProduct.append(Pname);
            ul.append(liProduct);

            cont.append(ul)

            // let insc=c.inscripts;
            // let grad=c.graduated;
            // let arrayIns = Object.entries(insc);
            // let mapStud = Object.entries(p.students);
            // let Career=new CareerReport(c.name)

           //  for (let [key, value] of mapStud) {
           //      let liYear = document.createElement("li");
           //      let year = document.createTextNode("Año: "+key);
           //      liYear.append(year);
           //      ul.append(liYear);
           //      let ul2=document.createElement("ul");
           //      let liIns= document.createElement("li");
           //      let ins = document.createTextNode("Estudiantes inscriptos: ")
           //      liIns.append(ins)
           //      ul2.append(liIns)
           //      if(value.inscripted.length != 0) {
           //          for (let st of value.inscripted) {
           //              let liStud = document.createElement("li");
           //              let stud = document.createTextNode(st)
           //              liStud.append(stud)
           //              ul2.append(liStud)
           //              // let stud = new Student(year, st);
           //              // console.log(stud);
           //              // Career.addInscript(stud)
           //          }
           //      }else {
           //          let liIng= document.createElement("li");
           //          let ing= document.createTextNode(" No Hubo Estudiantes Ingresantes En Este Año")
           //          liIng.append(ing);
           //          ul2.append(liIng);
           //      }
           //      let liGrad= document.createElement("li");
           //      let grad= document.createTextNode("Estudiantes Graduados: ")
           //      liGrad.append(grad);
           //      ul2.append(liGrad);
           //      if(value.graduated.length != 0){
           //          for (let st of value.graduated) {
           //              let liStud = document.createElement("li");
           //              let stud = document.createTextNode(st)
           //              liStud.append(stud)
           //              ul2.append(liStud)
           //              // let year = key;
           //              // for (let st of value) {
           //              //     let stud = new Student(year, st);
           //              //     console.log(stud);
           //              //     Career.addGraduate(stud)
           //              // }
           //          }
           //      }else {
           //          let liGrad= document.createElement("li");
           //          let grad= document.createTextNode(" No Hubo Estudiantes Graduados En Este Año")
           //          liGrad.append(grad);
           //          ul2.append(liGrad);
           //      }
           //      ul.append(ul2)
           // }

            cont.hidden = false
        }
         }catch(n){
        	 console.log("Hubo un problema buscando el reporte diario")
        	}
}

document.getElementById("getClientsReport").addEventListener("click",showClientReport)

async function showClientReport(e){
    e.preventDefault();
    let alrt=document.querySelector("#clientsReportAlert")
    alrt.hidden=true
    let div=document.getElementById("clientBalanceReport");
    removeAllChildNodes(div);
    let url2 = url+'purchases/report';
    try {
        let r = await fetch(url2, {
            "method": "get"
        });
        let clients = await r.json();
        if(clients!=[]){
            let mapCl = Object.entries(clients.clients);
            let tr= document.createElement("tr");
            let tdName = document.createElement("td");
            let name = document.createTextNode("NAME");
            tdName.append(name)
            let tdBalance = document.createElement("td");
            let price = document.createTextNode("Total Balance");
            tdBalance.append(price);
            tr.append(tdName,tdBalance);
            div.appendChild(tr)
            for (let [key, value] of mapCl) {
                let trClient = document.createElement("tr");
                let tdClient = document.createElement("td");
                let client = document.createTextNode(key);
                tdClient.append(client);

                let tdBal = document.createElement("td");
                let bal = document.createTextNode(value);
                tdBal.append(bal);

                trClient.append(tdClient,tdBal);
                div.append(trClient);
            }
            div.hidden = false
        }else{
            let h = document.createElement("h4");
            let txt = document.createTextNode("No se encontró ningún cliente");
            h.append(txt);
            alrt.appendChild(h);
            alrt.hidden = false;
        }
    }catch{
        let h = document.createElement("h4");
        let txt = document.createTextNode("No se encontró ningún cliente");
        h.append(txt);
        alrt.appendChild(h);
        alrt.hidden = false;
    }
}


//Productooooo----------------------------------------------

let prodForm = document.getElementById("addProduct");
if(prodForm != null){
    prodForm.addEventListener('submit',function(e){
        let alrt=document.querySelector("#addProductAlert");
        alrt.hidden = true;
        removeAllChildNodes(alrt);
        e.preventDefault();
        let data = {
            name: document.getElementById("namePr").value,
            price: document.getElementById("price").value,
            stock: document.getElementById("stock").value,
            purchases: []
        }
        fetch(url + '/products/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => {
                let h = document.createElement("h4");
                let txt = document.createTextNode("El producto se agregó correctamente ")
                h.append(txt)
                alrt.appendChild(h)
                alrt.hidden = false;
            })
            .catch(error => {
                let h = document.createElement("h4");
                let txt = document.createTextNode("El cliente No se agrego ");
                h.append(txt);
                alrt.appendChild(h);
                alrt.hidden = false;
            })
    })
}


let btnGetAllProducts= document.getElementById("getProducts");
btnGetAllProducts.addEventListener("click", getAllProducts);

async function getAllProducts(){
    let url2 = url+'/products';
    try {
        let r = await fetch(url2, {
            "method": "get"
        }, showProducts);
        let r2 = await r.json();
        let contProd= document.querySelector("#showAllProducts");
        showProducts(r2,contProd)
    }catch (n) {
        console.log("Error obteniendo clientes"+n);
    }
}

document.getElementById("getProdForm").addEventListener("submit",getProductByID)
let btnDeleteProd=document.getElementById("delPr")
btnDeleteProd.addEventListener("click",function(e){deleteProduct(e)})

async function getProductByID(e){
    e.preventDefault();
    let alrt=document.querySelector("#alertPr")
    alrt.hidden=true
    let prodID = document.querySelector("#getProd").value;
    let div=document.getElementById("divGetProd");
    removeAllChildNodes(div);
    let url2 = url+'/products/'+prodID;
    try {
        let r = await fetch(url2, {
            "method": "get"
        });
        let pr = await r.json();
        if(pr!=null){
            let tr= document.createElement("tr");
            let liName = document.createElement("td");
            let name = document.createTextNode("NAME");
            liName.append(name)
            let liPrice = document.createElement("td");
            let price = document.createTextNode("PRICE");
            liPrice.append(price);
            let liStock = document.createElement("td");
            let stock = document.createTextNode("STOCK");
            liStock.append(stock);
            tr.append(liName, liPrice, liStock);
            div.appendChild(tr)
            let ul = document.createElement("tr");
            let liN = document.createElement("td");
            let pName = document.createTextNode(pr.name);
            liN.append(pName);
            let li2Price = document.createElement("td");
            let pPrice = document.createTextNode(pr.price);
            li2Price.append(pPrice);
            let liS = document.createElement("td");
            let sStock = document.createTextNode(pr.stock);
            liS.append(sStock);
            // ul.append( liN, liS, liA, liG, liC, liDNI, liLU);
            ul.append( liN, liS, liPrice);
            div.appendChild(ul)
            btnDeleteProd.hidden=false
            div.hidden=false;
        }else{
            let h = document.createElement("h4");
            let txt = document.createTextNode("No se encontró ningún Producto con el ID proporcionado");
            h.append(txt);
            alrt.appendChild(h);
            alrt.hidden = false;
        }
    }catch (n) {
        console.log("Error al obtener el Producto: "+n);
        let h = document.createElement("h4");
        let txt = document.createTextNode("No se encontró ningún Producto con el ID proporcionado");
        h.append(txt);
        removeAllChildNodes(alrt)
        alrt.appendChild(h);
        alrt.hidden = false;
    }
}
document.getElementById("uptPr").addEventListener("click",function(){
    let formUpdProd= document.getElementById("uptdateProduct");
    formUpdProd.addEventListener("submit",updateProd)
})
function updateProd(){
    let alrt=document.querySelector("#alertPr");
    alrt.hidden = true;
    removeAllChildNodes(alrt);
    e.preventDefault();
    let data = {
        name:  document.getElementById("u_name").value,
        price: document.getElementById("u_price").value,
        stock: document.getElementById("u_stock").value
    }
    let prodId = document.querySelector("#getProd").value;
    fetch(url + '/products/'+prodId, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(pr => {

            let div=document.getElementById("divGetProd");
            removeAllChildNodes(div);
            let tr= document.createElement("tr");
            let liName = document.createElement("td");
            let name = document.createTextNode("NAME");
            liName.append(name)
            let liPrice = document.createElement("td");
            let price = document.createTextNode("PRICE");
            liPrice.append(price);
            let liStock = document.createElement("td");
            let stock = document.createTextNode("STOCK");
            liStock.append(stock);
            tr.append(liName, liPrice, liStock);
            div.appendChild(tr)
            let ul = document.createElement("tr");
            let liN = document.createElement("td");
            let pName = document.createTextNode(pr.name);
            liN.append(pName);
            let li2Price = document.createElement("td");
            let pPrice = document.createTextNode(pr.price);
            li2Price.append(pPrice);
            let liS = document.createElement("td");
            let sStock = document.createTextNode(pr.stock);
            liS.append(sStock);
            // ul.append( liN, liS, liA, liG, liC, liDNI, liLU);
            ul.append( liN, liS, liPrice);
            div.appendChild(ul)
            div.hidden=false
            let h = document.createElement("h4");
            let txt = document.createTextNode("El cliente se modifico correctamente ")
            h.append(txt)
            alrt.appendChild(h)
            alrt.hidden = false;
        })
        .catch(error => {
            let h = document.createElement("h4");
            let txt = document.createTextNode("El cliente No se modifico ");
            h.append(txt);
            alrt.appendChild(h);
            alrt.hidden = false;
        })
}



function deleteProduct(e){
    let alrt=document.querySelector("#alertDeleteProd");
    alrt.hidden = true;
    removeAllChildNodes(alrt);
    e.preventDefault();
    let id =document.querySelector("#getProd").value;
    fetch(url + '/products/'+id, {
        method: 'DELETE',
    })
        .then(response => {
            let h = document.createElement("h4");
            let txt = document.createTextNode("El producto se borró correctamente ")
            h.append(txt)
            alrt.appendChild(h)
            alrt.hidden = false;
        })
        .catch(error => {
            let h = document.createElement("h4");
            let txt = document.createTextNode("El producto No se borró " + error);
            h.append(txt);
            alrt.appendChild(h);
            alrt.hidden = false;
        })
}



document.getElementById("getProductMostSell").addEventListener("click",getProductMostSell)

async function getProductMostSell(e){
    e.preventDefault();
    let alrt=document.querySelector("#alertPrMost")
    alrt.hidden=true
    let div=document.getElementById("ProductMostSell");
    removeAllChildNodes(div);
    let url2 = url+'/purchases/mostsell';
    try {
        let r = await fetch(url2, {
            "method": "get"
        });
        let pr = await r.json();

        if(pr[0]!=null){
            let tr= document.createElement("tr");
            let liName = document.createElement("td");
            let name = document.createTextNode("NAME");
            liName.append(name)
            let liPrice = document.createElement("td");
            let price = document.createTextNode("PRICE");
            liPrice.append(price);
            let liStock = document.createElement("td");
            let stock = document.createTextNode("STOCK");
            liStock.append(stock);
            tr.append(liName, liPrice, liStock);
            div.appendChild(tr)
            let ul = document.createElement("tr");
            let liN = document.createElement("td");
            let pName = document.createTextNode(pr[0].name);
            liN.append(pName);
            let li2Price = document.createElement("td");
            let pPrice = document.createTextNode(pr[0].price);
            li2Price.append(pPrice);
            let liS = document.createElement("td");
            let sStock = document.createTextNode(pr[0].stock);
            liS.append(sStock);
            // ul.append( liN, liS, liA, liG, liC, liDNI, liLU);
            ul.append( liN, liS, liPrice);
            div.appendChild(ul)
            btnDeleteProd.hidden=false
            div.hidden=false;
        }else{
            let h = document.createElement("h4");
            let txt = document.createTextNode("No se encontró ningún Producto con el ID proporcionado");
            h.append(txt);
            alrt.appendChild(h);
            alrt.hidden = false;
        }
    }catch (n) {
        console.log("Error al obtener el Producto: "+n);
        let h = document.createElement("h4");
        let txt = document.createTextNode("No se encontró ningún Producto con el ID proporcionado");
        h.append(txt);
        removeAllChildNodes(alrt)
        alrt.appendChild(h);
        alrt.hidden = false;
    }
}





//---------------------helpers------------------------------------
function showProducts(products,container) {
    removeAllChildNodes(container)

    let tr= document.createElement("tr");
    let liName = document.createElement("td");
    let name = document.createTextNode("NAME");
    liName.append(name)
    let liPrice = document.createElement("td");
    let price = document.createTextNode("PRICE");
    liPrice.append(price);
    let liStock = document.createElement("td");
    let stock = document.createTextNode("STOCK");
    liStock.append(stock);
    let liI = document.createElement("td");
    let _ID = document.createTextNode("ID");
    liI.append(_ID);
    tr.append(liName, liPrice, liStock,liI);
    container.appendChild(tr)

    for (let pr of products) {
        let ulPr = document.createElement("tr");
        let liN = document.createElement("td");
        let sName = document.createTextNode(pr.name);
        liN.append(sName);
        let liP = document.createElement("td");
        let prP = document.createTextNode(pr.price);
        liP.append(prP);
        let liSt = document.createElement("td");
        let prSt = document.createTextNode(pr.stock);
        liSt.append(prSt);
        ulPr.append( liN, liP, liSt);
        let liID = document.createElement("td");
        let prID = document.createTextNode(pr.id);
        liID.append(prID);
        ulPr.append( liN, liP, liSt,liID);
        container.appendChild(ulPr)
    }
}


function showClients(clients,container) {
    removeAllChildNodes(container);
    let tr= document.createElement("tr");
    let liName = document.createElement("td");
    let name = document.createTextNode("NAME");
    liName.append(name)
    let liSurname = document.createElement("td");
    let surname = document.createTextNode("SURNAME");
    liSurname.append(surname);
    let liD = document.createElement("td");
    let dni = document.createTextNode("DNI");
    liD.append(dni);
    tr.append(liName, liSurname, liD);
    container.appendChild(tr)

    for (let st of clients) {
        let ul = document.createElement("tr");
        let liN = document.createElement("td");
        let sName = document.createTextNode(st.name);
        liN.append(sName);
        let liS = document.createElement("td");
        let sSurname = document.createTextNode(st.surname);
        liS.append(sSurname);
        let liDNI = document.createElement("td");
        let sDNI = document.createTextNode(st.dni);
        liDNI.append(sDNI);
        ul.append( liN, liS, liDNI);
        container.appendChild(ul)
    }
}

// function showCareers(careers,container) {
//     removeAllChildNodes(container);
//     let tr= document.createElement("tr");
//     let liName = document.createElement("td");
//     let name = document.createTextNode("NOMBRE");
//     liName.append(name)
//     let liSurname = document.createElement("td");
//     let surname = document.createTextNode("ESTUDIANTES");
//     liSurname.append(surname);
//     tr.append(liName, liSurname);
//     container.appendChild(tr)
//
//     for (let st of careers) {
//         let ul = document.createElement("tr");
//
//         let liN = document.createElement("td");
//         let sName = document.createTextNode(st.name);
//         liN.append(sName);
//         let liS = document.createElement("td");
//         let sSurname = document.createTextNode(st.students.length);
//         liS.append(sSurname);
//
//         ul.append(liN, liS);
//         container.appendChild(ul)
//     }
// }

//function showReport(report,container) {
//    removeAllChildNodes(container);
//    let tr= document.createElement("tr");
//    let liName = document.createElement("td");
//    let name = document.createTextNode("NOMBRE");
//    liName.append(name)
////    let liSurname = document.createElement("td");
////    let surname = document.createTextNode("ESTUDIANTES");
////    liSurname.append(surname);
//    tr.append(liName);
//    container.appendChild(tr)
//
////    for (let st of careers) {
////        let ul = document.createElement("tr");
////        
////        let liN = document.createElement("td");
////        let sName = document.createTextNode(st);
////        liN.append(sName);
//////        let liS = document.createElement("td");
//////        let sSurname = document.createTextNode(st.students.length);
//////        liS.append(sSurname);
////        
////        ul.append(liN, liS);
////        container.appendChild(ul)
////    }
//}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
