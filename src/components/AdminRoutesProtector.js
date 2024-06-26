import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

var AdminRoutesProtector=(props)=>
{
    const {userinfo} = useContext(userContext);
    const mynavigate = useNavigate();
    useEffect(()=>
    {
        if(userinfo===null)
        {
            mynavigate("/login");
        }
        else{
            if(userinfo.usertype!="admin"){
                mynavigate("/login");
            }
        }
    },[userinfo])

    return(
        <>
            <props.compname/>
        </>
    )
}
export default AdminRoutesProtector;