
        //Categories data
        const LoadCategories=async()=>{
            const response=await fetch('http://fakestoreapi.com/products/categories')
            const data = await response.json();
            data.unshift('select your category','all');

            for(let category of data){
                let option=document.createElement('option');
                option.text=category.toUpperCase();
                option.value=category;
                document.getElementById('lstCategories').appendChild(option);
            }
        }

        //Products data(dynamically creating the cards and then insert into the Products data)
        const LoadProducts=async(url)=>{
            const response=await fetch(url)
            const data = await response.json();
            document.getElementById('lstProducts').innerHTML=' ';

                for(let  product of data){
                    let div = document.createElement('div');                
                    div.className='card p-2 m-2';
                    div.style.width='243px';
                    div.innerHTML=`
                    <img src=${product.image} class='class-img-top' height='170'>
                    <div class='card-header d-flex  align-items-center text-center' style="height:125px"> <h6>${product.title}</h6> </div>
                    <div class='card-body' style="height:70px">
                        <dl class='d-flex justify-content-between'>
                            <div>
                                <dt>Price</dt>
                                <dd> ${product.price} <span class='bi bi-currency-dollar text-warning'></span></dd>
                            </div>
                            <div>
                                <dt>Rating</dt>
                                <dd>
                                    <span class='bi bi-star-fill text-success'></span> ${product.rating.rate} [${product.rating.count}]
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div class='card-footer text-center'>
                        <button class='btn btn-primary' onclick='AddClick(${product.id})'>
                            <span class='bi bi-cart4 pe-1'> </span> Add to Cart
                        </button>
                    </div>
    
                    ` 
                    document.getElementById('lstProducts').appendChild(div);
                }
        }

        //This is CartItems number for showing no. of product added into the Cart
        const GetCart=()=>{
            document.getElementById('count').innerHTML=cartItems.length;
        }
        var cartItems=[];  //This is an array for storing the Cart Items

        //This is Add to Cart button (functionality:Product added to the array[cartitems])
        const AddClick=async(id)=>{
            const response =await fetch(`http://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            cartItems.push(data);
            alert(`${data.title} \n added to cart`);
            GetCart()
        }

        function bodyLoad(){
            LoadCategories();
            LoadProducts('http://fakestoreapi.com/products');
            GetCart();
            GetTotal()
        }



        //This is for which Category you selected, that category related Products will be displayed
        const CategoryChanged=()=>{
           let categoryName= document.getElementById('lstCategories').value;
           if(categoryName=='all'){
            LoadProducts('http://fakestoreapi.com/products')
           }else{
            LoadProducts(`http://fakestoreapi.com/products/category/${categoryName}`)
           }
        }

        // const removeClick=async(id)=>{
        //     let selectedItem= cartItems.indexOf(id);
        //     const response =await fetch(`http://fakestoreapi.com/products/${id}`)
        //     const data = await response.json()
        //     cartItems.splice(selectedItem,data);
        //     alert(`${data.title} \n removed from cart`);
        //     // LoadCartItems()
        //     GetCart()
        // //    let selectedItem= cartItems.indexOf(id);
           
        // //         cartItems.splice(selectedItem,1);
        // //     GetCart()
        // }

        const GetTotal=()=>{
            document.getElementById('total').innerHTML=cartTotal;
        }
        var cartTotal=0

        const LoadCartItems=()=>{

            document.querySelector('tbody').innerHTML= ' ';
            // document.getElementById('total').innerHTML=' ';
            cartTotal=0;

            for(let item of cartItems){
                cartTotal=Math.round(cartTotal+item.price);  //cartTotal+=item.price

                let tr = document.createElement('tr');
                let tdName = document.createElement('td');
                let tdPrice = document.createElement('td');
                let tdPreview = document.createElement('td');

                // let tdRemove=document.createElement('td');
                // let button=document.createElement('button');
                // button.className='btn-close'
                // button.id=item.id
                // button.onclick=removeClick(`${item.id}`)
                // tdRemove.appendChild(button);
    
                tdName.innerHTML =item.title;
                tdPrice.innerHTML= item.price; 
                tdPreview.innerHTML =`<img src=${item.image} height='50' width='50' id="borderImg">`
    
                tr.appendChild(tdName); tr.appendChild(tdPrice); tr.appendChild(tdPreview); 
                document.querySelector('tbody').appendChild(tr);

                GetTotal()
            }
        }
        function PaymentClick(cartTotal){
            // It sends the data (cart total) to info.html 
            sessionStorage.setItem('total',cartTotal)
            console.log(cartTotal);
        }