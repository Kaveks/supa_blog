import supabase from "@/app/config/supabaseClient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const LoginPage = async() => {
        
    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            emailRedirectTo: `${location.origin}/auth/callback`,
            },
        },
        })
        console.log(data)
    }
    signInWithGoogle()
    async function signout() {
        const { error } = await supabase.auth.signOut()
      }
      
    return ( 
        <>
        <main className=" max-w-contentContainer h-screen mdl:h-full mx-auto my-2 md:my-28 flex flex-col bg-teal-600">
          <div className="w-full h-screen items-center mx-auto flex flex-col">
          <div 
          className=" border-2 tracking-wide w-full h-screen my-auto mx-auto gap-2  
          mdl:w-[600px] mdl:h-[400px] justify-center items-center font-bodyFont 
          flex flex-col bg-red-300 rounded-lg">
    
              <button 
              onClick={signInWithGoogle}
              className="border-2 font-md text-base inline-flex mdl:text-2xl mdl:font-semibold shadow-md 
              mdl:w-[300px] bg-green-400 rounded-lg px-2 max-w-[300px] items-center justify-center my-2 mdl:mb-8 
              ">
                <span className="text-yellow-500 mr-2 inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={faGoogle} style={{height:'18px'}} /> </span>
              Login with Google</button>
    

                <div className="items-center gap-2 mt-4 mb-2 font-titleFont text-medium font-semibold
                 text-black justify-center flex flex-row sm:flex-col">
                  <button className=' inline-flex order-1 sm:w-[80px] rounded-md items-center justify-center hover:bg-yellow-100 hover:border-4
                   hover:text-zinc-600 bg-teal-400 border-2 duration-300'
                  onClick={signInWithGoogle}>Sign in</button>
                  <button className=' inline-flex order-3 sm:w-[80px] items-center justify-center rounded-md hover:bg-yellow-100 hover:border-4
                   hover:text-zinc-600 bg-teal-400 border-2 duration-300' 
                  onClick={signout}>Sign out</button>
                </div>
          </div>
          </div>
        </main>
        </>
     );
}
 
export default LoginPage;




