import { useQuery } from "@tanstack/react-query"
import { AuthContext } from "../provider/AuthProvider"
import axios from "axios"
import { useContext } from "react"


const useCart = () => {
    const {user}=useContext(AuthContext)
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn:async()=>{
            const res=await axios.get(`http://localhost:5000/carts`)
            return res.data
        }
    })
    return [cart,refetch]
}

export default useCart