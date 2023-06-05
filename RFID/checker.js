const fun= ()=>{
    const fs=require("fs"); 
    let thresholdData =JSON.parse(fs.readFileSync("./thresholdInventory.json")); 
    let kitchenData = JSON.parse(fs.readFileSync("./kitchenInventory.json"))
    const tmpArr=[];
    
    thresholdData.forEach(element=>{ 
        item=element.item; 
        qty=element.qty;
        kitchenData.forEach(element=>{
            if(element.item==item && element.qty<=qty) 
            {
                tmpArr.push({
                    "item": item, 
                    "qty": qty
                });
            }
        })
    }) 
   return tmpArr;
} 

console.log(fun());