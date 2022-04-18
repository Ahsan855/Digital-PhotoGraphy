import { Link } from 'react-router-dom';

const Register = () => {
    // const [agree, setAgree] = useState(false);
    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    // const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const navigate = useNavigate();

    // const navigateLogin = () => {
    //     navigate('/login');
    // }

    // if(loading || updating){
    //     return <Loading></Loading>
    // }

    // if (user) {
    //  console.log('user', user);  
    // }

    // const handleRegister = async (event) => {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     // const agree = event.target.terms.checked;

    //     await createUserWithEmailAndPassword(email, password);
    //     await updateProfile({ displayName: name });
    //     console.log('Updated profile');
    //     navigate('/home');
    // }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' /><br />

                <input type="email" name="email" id="" placeholder='Email Address' required /><br />


                <input type="password" name="password" id="" placeholder='Password' required /><br />
                <input  type="checkbox" name="terms" id="terms" /><br />
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label htmlFor="terms">Accept Genius Car Terms and Conditions</label> <br />
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form><br/>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
        </div>
    );
};

export default Register;