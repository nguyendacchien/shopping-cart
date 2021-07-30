$(document).ready(function () {
    let res;
    let baseUrl = window.location.origin;

    $.ajax({
        // url:"https://fakestoreapi.com/products",
        url: baseUrl + "/api/product",
        type: "GET",
        data: {},
        dataType: "json"
    }).done(function (response) {
        console.log(response)
        res = response
        display2(response)
    }).fail(function () {
        console.log("fail")
    })


    function display(res) {
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

    function display2(res) {
        let data = '';
        for (let i = 0; i < res.length; i++) {
            data += `
                       <div class="card col-4" style="width: 18rem;">
                          <img src="${res[i].image}" class="card-img-top" alt="..." style="height: 200px; width: auto" >
                          <div class="card-body">
                            <h5 class="card-title">${res[i].title}</h5>
                            <p class="card-text">${res[i].description}</p>
                            <p class="card-text">${res[i].price}</p>
                            <button type="button" class="btn btn-primary add-to-cart" data-id="${res[i].id}">Add To Cart</button>
                          </div>
                        </div>`
        }
        $('#product-cards').html(data)

    }

    function search() {
        let find = $('#input-search').val()
        let arr = [];
        for (let i = 0; i < res.length; i++) {
            if (res[i].title.toLowerCase().indexOf(find.toLowerCase()) > 0) {
                arr.push(res[i]);
            }
        }
        display(arr);
    }
    $('#input-search').on('change', search);
    $(document).on('click','.add-to-cart',function (){
        // console.log(123)
        let id = $(this).attr('data-id');
        // console.log(id)
        $.ajax({
            url: baseUrl+'/api/addToCart/'+id,
            method:"GET",
            type: 'json',
            success:function (res){
              console.log(res)
            },
            error:function (err){
                console.log(err)
            }

        })
    });
    $(document).on('click','.btn-cart',function (){
       $.ajax({
           url: baseUrl+'/api/cart',
           method: 'GET',
           type:'json',
           data: "json",
           success:function (res){
               console.log(res)
           },
           error:function (err){
               console.log(err)
           },
       })
    });
    // $('.btn-cart').click(function (){
    //     $.ajax({
    //         url: baseUrl+'/api/cart',
    //         method: 'GET',
    //         type:'json',
    //         data: "json",
    //         success:function (res){
    //             console.log(res)
    //         },
    //         error:function (err){
    //             // console.log(err)
    //         },
    //     })
    // })

});
