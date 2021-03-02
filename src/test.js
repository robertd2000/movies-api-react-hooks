import { useEffect, useState } from "react"

const Test = () => {


    const [count, setCount] = useState(0)
    
    const change = () => {
        setCount(count + 1)
    }

    return <div onClick={change} >
        {count}
    </div>
}

export default Test