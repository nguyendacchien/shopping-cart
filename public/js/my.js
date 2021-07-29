$(document).ready(function (){
    let res ;
   $.ajax({
       // url:"https://fakestoreapi.com/products",
       url:"http://localhost:8000/api/users",
       type: "GET",
       data:{},
       dataType:"json"
   }).done (function (response){
       console.log(response)
       res = response
       // display(response)
   }).fail(function (){
       console.log("fail")
   })


    function display(res){
       let data = "";
        for (let i = 0; i < res.length; i++) {
            data += `<tr>
                         <td>${res[i].id}</td>
                         <td><img style="width: 100px;" src="${res[i].image}"></img></td>
                         <td>${res[i].title}</td>
                         <td>${res[i].description}</td>
                         <td>${res[i].category}</td>
                         <td>${res[i].price}</td>
                     </tr>`
        }
        $('#product-data').html(data)
    }


    function search(){
       let find = $('#input-search').val()
        let arr =[];
        for (let i = 0; i < res.length; i++) {
            if (res[i].title.toLowerCase().indexOf(find.toLowerCase())>0){
                arr.push(res[i]);
            }
        }
        display(arr);
    }

    $('#input-search').on('change',search);
});
