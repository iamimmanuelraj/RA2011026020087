import axios from "axios";

let token=""

export const fetchDetail = async(id) => {
    try {
        const res =  await axios.get(`http://20.244.56.144/train/trains/${id}`,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`bearer ${token}`,
            }
        });
        return res
    } catch (error) {
        console.error(error)
    }
}

export const fetchToken = async () => {
        const res = await axios.post("http://20.244.56.144/train/auth",
        {
            "companyName": "Train Central",
            "clientID": "d53bd519-6f8e-4ca5-bddb-61afac4930b2",
            "clientSecret": "TbMqfZvtRimIUkOA",
            "ownerName": "Immanuel Raj C",
            "ownerEmail": "ia2783@srmist.edu.in",
            "rollNo": "RA2011026020087"
        },{
                headers:{
                    "Content-Type":"application/json"
                }
            })
        token = res.data.access_token
        return res.data.access_token
    }



export const getData = async (token) => {
    try {
        const res =  await axios.get("http://20.244.56.144:80/train/trains",{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`bearer ${token}`,
            }
        });
        return res
    } catch (error) {
        console.error(error)
    }
}