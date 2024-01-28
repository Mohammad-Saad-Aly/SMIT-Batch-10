import React, {useState} from 'react'

import onBulb from '../../assets/onbulb.jpg'
import offbulb from '../../assets/offbulb.jpg'

function States() {

    // let [bulb, setBulb] = useState(true)

    // let handle = ()=>{
    //     setBulb(!bulb)
    // }

    // let [data, setData] = useState([
    //     {
    //         name : 'Rehman',
    //         age: 14,
    //         roll : 'ABC'
    //     },
    //     {
    //         name : 'Ali',
    //         age: 24,
    //         roll : 'DEF'
    //     },
    // ])

    // let handle = ()=>{
    //     setData(
    //         [
    //             ...data,
    //         {
    //             name : 'Sufiyan',
    //             age: 18,
    //             roll : 'Pappi'
    //         }
    //         ]
    //     )
    // }

  return (
    <div>

    {/* {
        data.map((v, i)=>{
            return <div key={i}>
                <h1>{v.name}</h1>
                <h1>{v.age}</h1>
                <h1>{v.roll}</h1>
            </div>
        })
    }

    <button onClick={handle}>Add more Data</button> */}




        {/* {
            bulb ? <img src={onBulb} /> : <img src={offbulb} />
        }   
        <br />
        <button onClick={handle}>On and Off</button> */}
    </div>
  )
}

export default States