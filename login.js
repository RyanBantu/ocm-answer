import { signInWithGoogle } from '../service/firebase';
import reb from './logo/OneChurch_Manipal_Stack_black-01.png';

const Login = () => {
    return (
<div>
        <div>
        <img className='w-96' src={reb} />
      </div>
        <div class="rounded-md ... border-8 w-44 border-orange-400 pl-2  hover:bg-indigo-500 opacity-100 ">
            <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
        </div>

        </div>
    )
}

export default Login;