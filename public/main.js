
    var basket = {
        name: '',
        price: 0,
        allPrice: 0,
    };
    var allProduct = [
        {
            name: 'Нагрудник',
            src: 'img/small/11.jpg',
            price: 4500,
        },
        {
            name: 'Краги',
            src: 'img/small/12.jpeg',
            price: 4000,
        },
        {
            name: 'Шлем',
            src: 'img/small/13.jpg',
            price: 5000,
        },
        {
            name: 'Коньки',
            src: 'img/small/1.jpg',
            price: 40000,
        },
    ];

        function init(){
            for(var i=0;i<allProduct.length;i++) {
                var RUB = 'RUB';
                var appDiv = document.querySelector(".shopList");
                var divProduct = document.createElement("div");
                divProduct.classList.add('product');

                var productName = allProduct[i].name;
                var h3 = document.createElement('h3');
                h3.innerText = productName;
                divProduct.appendChild(h3);

                var img = document.createElement('img');
                img.src = allProduct[i].src;
                divProduct.appendChild(img);

                var divPrice = allProduct[i].price;
                var p = document.createElement('p');
                p.innerText = divPrice + RUB;
                divProduct.appendChild(p);
                
                var button = document.createElement('button');
                button.innerText = 'Купить';
                button.classList.add('BUY');
                divProduct.appendChild(button);
            
                appDiv.appendChild(divProduct);
            }
            var buttonBUY = document.querySelectorAll('.BUY');
                for(var j = 0;j<buttonBUY.length;j++){
                buttonBUY[j].addEventListener('click', buyProduct);
                }

        }


    window.onload = init;


        
