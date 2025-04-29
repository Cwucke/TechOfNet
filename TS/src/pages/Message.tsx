import React, {useEffect, useState} from "react";
import { Container } from "../components/Container";
import Text from "../components/Text";

const Message: React.FC = () => {
    const [data, setData] = useState<{title: string, desc:string, price:string, message:string} | null>(
        null
    )


useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetch("http://localhost:5000/api/data")
            const result = await response.json()
            setData(result)
        }
        catch(error){
            console.error("Error fetching data: ", error)
        }
    }

fetchData()
}, []);


return(
    <>
        {data?.message}
    </>
)
}
export default Message