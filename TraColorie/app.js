// storage controller

// iteam controller
const ItemCtrl = ( function  () {
    // Item constructor
    const Item = function(id, name, calories) {
        this.id = id
        this.name = name
        this.calories = calories
    }

    // Data Structure/ State
    const data = {
        items:[
        {id:0, name:'Steak Dinner', calories:1200},
        {id:1, name:'Cookie', calories:400},
        {id:2, name:'Eggs', calories:200}
        ],
        currentItem:null,
        totalCalories:0
    }
    // Public methods
    return {
        getItems:function  () {
            return data.items;
        },
        addItem:function (name, calories) {
            let ID;
            // Create Id
            if (data.items.lengh > 0) {
                // statement
                ID = data.items[data.items.lenght-1].id+1;  
            } else {

                ID = 0;
            }
            // Calories to number
            calories = parseInt(calories);

            // Create new Item
            newItem = new Item(ID,name,calories);
            // Add to items array
            data.items.push(newItem); 
            return newItem;
        },
        logData:function(){
            return data;
        }
    }

})();

// UI controller
const UICtrl = ( function  () {
    const UISelectors = {
        itemList:'#item-list',
        addBtn:'.add-btn',
        itemNameInput:'#item-name',
        itemCaloriesInput:"item-calories"
    }

    // Public methods
    return {
        populateItemList:function  (items) {
            let html = '';
            items.forEach(function  (item) {
                html += `<li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content"> <i class="edit-item fa fa-pencil"></i> </a>
                        </li>`;
            });

            // Insert list Items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },

        getItemInput: function () {
            return {
                name:document.querySelector(UISelectors.itemNameInput).value,
                calories:document.querySelector(UISelectors.itemCaloriesInput).value
                
            }
        },
        addListItem:function (item) {
            // show the list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            // Create li element
            const li = document.createElement('li');
            // Add class
            li.className = 'collection-item';
            // Add ID
            li.id = ` item-{item-id}`;
            // Add html
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content"> <i class="edit-item fa fa-pencil"></i> </a>
                        </li>`;
            // Insert Item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        },
        clearInput:function () {
            document.querySelector(UISelectors.itemNameInput).value = ' ';
            document.querySelector(UISelectors.itemCaloriesInput).value = ' ';
        },
        hideList:function(){
            document.querySelector(UISelectors.itemList).style.display = 'none ';
        },
        getSelectors:function(){
            return UISelectors;
        }

    }

})();

// App controller
const AppCtrl = ( function  (ItemCtrl, UICtrl) {
    // Load event listeners
    const loadEventListeners = function () {
        // Get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);


    }

    // Add item submit
    const itemAddSubmit = function (e) {
        // Get form input from UI controller
        const input = UICtrl.getItemInput();
        console.log(input)

        // Check for name and calories
        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name,input.calories)
        
            // Add Item to UI List
            UICtrl.addListItem(newItem); 

            // Clear fields
            UICtrl.clearInput();

        } 
        e.preventDefault();
    }


    // public methods
    return {
        init:function  () {
            console.log('Initial app');
            // fetch items from data structure
            const items = ItemCtrl.getItems();
            // console.log(items)

            // Check if any items
            if (items.lenght === 0) {
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            }

            // populate list with items
            UICtrl.populateItemList(items);

            // Load event listeners
            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl);


AppCtrl.init();
