import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { itemsActions } from '../store/itemSlice';
import { fetchStatusActions} from '../store/fetchStatusSlice';
const FetchItems=()=>{

   const fetchStatus= useSelector((store)=> store.fetchStatus);
   const dispatch =useDispatch();

   useEffect( () =>{
    
    if(fetchStatus.fetchDone){ return}
    


    const controller=  new AbortController();
    const signal = controller.signal;
   
    dispatch(fetchStatusActions.markFetchingStarted());
    console.log(fetchStatus)
fetch('http://localhost:8080/items', {signal})
.then((res) => res.json())
.then(({items}) => {
    
    dispatch(fetchStatusActions.markFetchDone());
    dispatch(fetchStatusActions.markFetchingFinished());

dispatch(itemsActions.addInitialItems(items))
});
return ()=>
{

controller.abort();
};
}, [fetchStatus] );



    return <></>
}
export  default FetchItems
/*  dispatch(fetchStatusActions.markFetchingDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        
         dispatch(fetchStatusActions.markFetchingStarted());*/