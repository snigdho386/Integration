const fun= (item,qty)=>{
    const fs=require("fs"); 
    let jsonData =JSON.parse(fs.readFileSync("./thresholdInventory.json"));
    const tmpArr=[];
    jsonData.forEach(element=>{
        tmpArr.push(element);
    }); 
    let f=0;
    tmpArr.forEach(element=>{
        if(element.item==item) 
        {
            element.qty=qty; 
            f=1; 
            return;
        }
    }) 
    if(!f) 
    {
        let obj={}; 
        obj.item=item; 
        obj.qty=qty; 
        tmpArr.push(obj);
    } 
    jsonData=tmpArr; 
    fs.writeFileSync("./thresholdInventory.json", JSON.stringify(jsonData));
} 

fun("", 5);