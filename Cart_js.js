var itemNames = document.querySelectorAll(".itemNameHeader");
var cartInfoWrapper = document.getElementById("cartInfoWrapper");
var itemQtys = document.querySelectorAll(".itemQty");
var buttons = document.querySelectorAll("input[type=button]");
var j;
var counter  = 1;

var itemstoAdd = [        
        {   
            "itemID"  : 1,
            "itemName": "Joola Carbon Blade",
            "itemQuantity": 4 
        },
        {   
            "itemID"  : 2,
            "itemName": "Mark V Red Rubber",
            "itemQuantity": 4 
        },
        {    
            "itemID"  : 3,
            "itemName": "Mark V Black Rubber", 
            "itemQuantity":4
        },
        {    
            "itemID"  : 4,
            "itemName": "DHS 3 star Ball", 
            "itemQuantity": 4
        },
        {    
            "itemID"  : 5,
            "itemName": "Stiga TT Table",
            "itemQuantity": 4 
        }
]

var Execute = (function () {
    return {
        updateQuantity: function () {
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
            var newDiv = document.createElement("div");
            var newInnerDiv = document.createElement("div");            
            var newLabel = document.createElement("label");
            var newSpan = document.createElement("span");
            var newButton = document.createElement("button");
            newDiv.className = "cartItemsInfo";
            newInnerDiv.className = "cartInfo";
            newButton.className = "removeButtons";
            newButton.innerHTML = "Remove";
            cartInfoWrapper.appendChild(newDiv);
            newDiv.appendChild(newInnerDiv);
            newInnerDiv.appendChild(newLabel);
            newInnerDiv.appendChild(newSpan);
            newDiv.appendChild(newButton);
            newSpan.id = "value";
            newLabel.innerHTML = itemstoAdd[spanID-1].itemName;
            newSpan.innerText = itemstoAdd[spanID-1].itemQuantity;
            newSpan.innerText = counter; 
            // newButton.addEventListener('click',Execute.handleRemove.bind());
            console.log(newButton);
            newButton.addEventListener('click',Execute.handleRemove.bind(newButton));
            if(itemstoAdd[spanID-1].itemQuantity < 1) {
            parentEle.parentElement.style.display ="none";
            }
            else{
                itemstoAdd[spanID-1].itemQuantity -= counter;
                Execute.updateQuantity();
            }
        },
        handleRemove: function(newButton){
            var cartButtonsArray = cartInfoWrapper.getElementsByTagName("button");
            // console.log("Cart info array is",cartButtonsArray);
            // for(let c=0 ; c < cartButtonsArray.length ; c++){
            //     if(cartButtonsArray[c].className === "removeButtons"){
            //        var cartInfo = cartButtonsArray[c].parentElement;
            //        var cartItemsInfo = cartInfo.parentElement;
            //        console.log("cartButtonsArray" , cartButtonsArray[c]);
            //        cartItemsInfo. parentNode. removeChild(cartItemsInfo);
            console.log(newButton);
            var cartInfo = newButton.parentElement;
                   var cartItemsInfo = cartInfo.parentElement;
                   console.log("cartItemsInfo is" , cartItemsInfo);
                   cartItemsInfo. parentNode. removeChild(cartItemsInfo);
            
        },
        
    }
})();


function init() {
    Execute.updateQuantity();
    for(let j=0 ; j < buttons.length ; j++) {
        buttons[j].addEventListener("click", function() {
           Execute.fetchInventoryID(this);
            
        });
    };
    // var outputButtons =[];
    //  outputButtons = document.getElementsByClassName("removeButtons");
    // for(let j=0 ; j < outputButtons.length ; j++) {
    //     outputButtons[j].addEventListener("click", function() {
    //         var spanElement = document.createElement("span");
    //         outputButtons[j].appendChild(spanElement);
    //         spanElement.innerHTML("No item is present in the cart");
    //         //var newSpan = document.createElement("span");
    //         // document.getElementById("cartInfoWrapper").innerHTML = "<h6> No item is present in the cart </h6>";   
    //         });
    //     }
}
init();