import React,{Component} from 'react'
import './Sortlist.css'
export default function Sortlist(props) {
    const {children,goDetail}=props
    return (
        <div className='Sortlist'>
            <ul>
         {children.map(item=>{
             return  <li key={item.id} onClick={()=>goDetail(item.id,item.catename)} ><img src={Component.prototype.$img+item.img} alt=""/><div className='catename'>{item.catename}</div></li>
         })}
         </ul>       
        </div>
    )
}
