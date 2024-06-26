import { createContext, useEffect, useState } from 'react';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';
import HeaderNav from './components/HeaderNav';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminHeaderNav from './components/AdminHeaderNav';
import Cookies from 'universal-cookie';
const userContext = createContext(null);

function App()
{
  const objcookie = new Cookies();
  const [uid,setuid]=useState(null);
  const [userinfo,setuserinfo] = useState(null);

  useEffect(()=>
    {
      if(objcookie.get("usercookie")!==undefined)
      {
        setuid(objcookie.get("usercookie"));
      }
    },[])

    useEffect(()=>
    {
      if(uid!==null)
      {
          fetchudatabyid();
      }
    },[uid])

    var fetchudatabyid=async()=>
      {
        try
        {
            var resp = await fetch(`${process.env.REACT_APP_APIURL}/fetchuserbyid/${uid}`)
            if(resp.ok)
            {
                var result = await resp.json();
                setuserinfo(result.userdata);
                sessionStorage.setItem("userdata", JSON.stringify(result.userdata));
            }
        }
        catch(e)
        {
            toast.error("Some error occured" + e);
        }
      }




  useEffect(()=>
  {
    if(sessionStorage.getItem("userdata")!==null)
    {
      setuserinfo(JSON.parse(sessionStorage.getItem("userdata")));
    }
  },[])



  return (
    <>
      <ToastContainer theme="colored"/>
      <userContext.Provider value={{userinfo,setuserinfo}}>
        {
          userinfo===null?<HeaderNav/>
          :userinfo.usertype==="admin"?<AdminHeaderNav/>:
          <HeaderNav/>
        }
        <AppRoutes/>
        <Footer/>
      </userContext.Provider>
    </>
  );
}

export default App;
export {userContext};
