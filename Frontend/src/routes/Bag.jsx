
import BagItem from "../components/BagItem"
import BagSummary from "../components/BagSummary"
import {useSelector} from "react-redux";
const Bag =()=>{
    const items=useSelector((store)=> store.items);
    const bagItems=useSelector((store)=> store.bag);
    const finalItems=items.filter((item)=>{
        const foundIndex= bagItems.indexOf(item.id) ;
        return foundIndex >= 0;

})
   
    
    
    
    
  

    return ( <main>
          <div className="bag-page">
          <div className="bag-items-container">
          
            {
                finalItems.map((item) => (
                    
                         <BagSummary item={item} key={item.id}></BagSummary>
                    
   

        ))}
        </div>
        <BagItem></BagItem>
        
     </div>
</main> 
    )
}
export default Bag