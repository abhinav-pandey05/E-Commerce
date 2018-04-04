var cartInfoWrapper = document.getElementById("cartInfoWrapper");
var buttons = document.getElementsByClassName("addButton");
var itemQtys = document.querySelectorAll(".itemQty");

var itemstoAdd = [        
        {   
            "itemID"  : 0,
            "itemName": "Joola Carbon Blade",
            "itemQuantity": 4 
        },
        {   
            "itemID"  : 1,
            "itemName": "Mark V Red Rubber",
            "itemQuantity": 4 
        },
        {    
            "itemID"  : 2,
            "itemName": "Mark V Black Rubber", 
            "itemQuantity":4
        },
        {    
            "itemID"  : 3,
            "itemName": "DHS 3 star Ball", 
            "itemQuantity": 4
        },
        {    
            "itemID"  : 4,
            "itemName": "Stiga TT Table",
            "itemQuantity": 4 
        }
]

var Execute = (function () {
    return {

        init:   function () {
            Execute.updateQuantity();
            for(let j = 0; j < buttons.length; j++) {
                buttons[j].addEventListener("click", function() {
                   Execute.fetchInventoryID(this);   
                });
            }
        },
        updateQuantity: function () {
            var itemNames = document.querySelectorAll(".itemNameHeader");
            for(let i=0;i<itemNames.length;i++) {
                itemNames[i].innerHTML = itemstoAdd[i].itemName;
                itemQtys[i].innerHTML = itemstoAdd[i].itemQuantity;
            }
        },
        fetchInventoryID: function (buttonNumber) {
            let spanID;
            var parentEle = buttonNumber.parentElement; 
            spanID = parentEle.getElementsByClassName("itemQty")[0].id;
            Execute.createNodes(spanID,parentEle);
        },
        createNodes: function (spanID,parentEle) {
            
            console.log(spanID , "is spanID");
            if(!cartInfoWrapper.contains(document.getElementById('elem' +spanID))){ 
                var newDiv = document.createElement("div");
                var newInnerDiv = document.createElement("div");            
                var newLabel = document.createElement("label");
                var newSpan = document.createElement("span");
                var newButton = document.createElement("button");

                newDiv.className = "cartItemsInfo";
                newInnerDiv.className = "cartInfo";
                newButton.className = "removeButtons";
                newButton.innerHTML = "Remove";
                newSpan.setAttribute("id",'elem' + spanID);
                
                cartInfoWrapper.appendChild(newDiv);
                newDiv.appendChild(newInnerDiv);
                newInnerDiv.appendChild(newLabel);
                newInnerDiv.appendChild(newSpan);
                newDiv.appendChild(newButton);
               
                newLabel.innerHTML = itemstoAdd[spanID-1].itemName;
                itemstoAdd[spanID-1].itemQuantity -=1 ;
                Execute.updateQuantity();
                newSpan.innerText = 1; 
                console.log("new button", newButton);
                newButton.addEventListener('click',Execute.handleRemove(spanID));
            }
            else {
                let itemCount = document.getElementById('elem' +spanID).innerHTML;
                document.getElementById('elem' +spanID).innerHTML = ++itemCount;
                console.log("item count is ",itemCount);
                itemstoAdd[spanID-1].itemQuantity -=1 ;
                Execute.updateQuantity();
            }
            
            if(itemstoAdd[spanID-1].itemQuantity < 1) {
                parentEle.parentElement.style.display ="none";
            }
            
        },
        handleRemove: function(spanID){
            var cartItemsInfo = this.parentElement;
            cartItemID =  cartItemsInfo.getElementById('elem' +spanID);
            // console.log("cartItemsInfo is" , cartItemsInfo);
            
        },
        
    }
})();

Execute.init();