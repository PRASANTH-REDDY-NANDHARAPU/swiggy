import { useState } from "react"
import resto from "../MockData/data"
const Card=(props)=>{
    return  <div className="card">
        <img src={props.item.img_id}></img>
        <div className="card-text">
        <h2>{props.item.name}</h2>
        <h3><span><i class="bi bi-star-fill"></i></span>  {props.item.ratings} Ratings</h3>
        <p>{props.item.location}</p>
        <p>{props.item.deliveryTime} min</p>
        <p>{props.item.cost} RS</p>
        </div>
    </div>
   
}
const Resto =()=>{
    const [search,setSearch]=useState('')
    const [data,setData]=useState(resto)
    const [restoHeading,setRestoHeading]=useState("with online food delivery")
    return <div className="resto-page">
        <h1 className="resto-heading">Restaurants {restoHeading} in Bangalore</h1>

        <div className="filter-container">
            <div className="filter-btns">
                <button onClick={() => {
    const lesstime = data.sort((a, b) => a.deliveryTime - b.deliveryTime);
    setData([...lesstime]);
}}>Fast Delivery</button>
                <button onClick={()=>{
                  const four=  data.filter((x)=>{
                      return x.ratings>4
                    })
                   setData(four) 
                   setRestoHeading("With 4 + Ratings")
                }}>Ratings 4.0 +</button>
                <button onClick={()=>{
                  const less=  data.filter((x)=>{
                       return x.cost<300
                    })
                    setData(less)
                    setRestoHeading('With less Than 300 rupees')
                }}>Less than RS 300</button>
                <button onClick={()=>{
                  const middleCost=  data.filter((x)=>{
                       return x.cost>300 && x.cost<500
                    })
                    setData(middleCost)
                    setRestoHeading('With cost in between 300 and 500 rupees')

                }}>RS.300- RS.500</button>
            </div>
            <div className="input-search">
                <input  type="text" placeholder="EX:kfc,dominos" value={search} onChange={(s)=>{setSearch(s.target.value)}}></input>
                <button onClick={()=>{
                 const searchName=   data.filter((x)=>{
                        return x.name.toLowerCase().includes(search.toLowerCase())
                    })
                    setData(searchName)
                }}>search</button>
            </div>
        </div>

        {/* ---------------search ui is completed------------- */}
        {/* ------------------lets start resto cards---------- */}
    <div className="flex-holder">
        <div className="card-flex">
           {
            data.map((x)=>{
                   return <Card item={x}/>
            })
           }
        </div>
    </div>
        
    </div>
}
export default Resto