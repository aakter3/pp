
let requestURL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
fetch(requestURL)
   // .then(res => console.log(typeof(res))); //obj

    .then((data) => {return data.json()}) //promise 
    .then((stuArray) => {console.log(stuArray) //result
    populateList(stuArray)
    
    }); 

    function  populateList(stusnets){

        let stringStudent = '';
        
let StudentData = document.getElementById("studentData");

stusnets.map((student) => {
    
    stringStudent +=
        `<tr>
            <td> ${student.fname} </td>
            <td>  ${student.lname} </td>
            <td> ${student.address} </td>
            <td>${student.city} </td>
            <td> ${student.tel} </td>
            <td>${student.state} </td>
            <td>${student.zip} </td>

        </tr>`})
    StudentData.innerHTML = stringStudent;

    }


    

//populateList();
