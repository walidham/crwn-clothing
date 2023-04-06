import { useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import {SignUpContainer} from './sign-up-form.styles';
import Button from "../button/button.component";
import {useDispatch} from "react-redux";
import {signUpStart} from "../../store/user/user.action";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();
    //Generic function
    //console.log(formFields);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password, confirmPassword} = formFields;
        if (password === confirmPassword) {

            try {
                dispatch(signUpStart(email,password,displayName));
                resetFormFields();
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Email already exists');
                } else {
                    console.log('error when create user : ', error.message);
                }
            }

        } else {
            alert('Passwords do not match')
        }

    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={async (event) => {
                await handleSubmit(event);
            }}>
                <FormInput label='Display Name'
                           type='text'
                           required={true}
                           onChange={handleChange}
                           name={'displayName'}
                           value={displayName}/>

                <FormInput label='Email'
                           type={'email'}
                           required={true}
                           onChange={handleChange}
                           name={'email'}
                           value={email}/>

                <FormInput label='Password'
                           type={'password'}
                           required={true}
                           onChange={handleChange}
                           name={'password'}
                           value={password}/>

                <FormInput label='Confirm password'
                           type={'password'}
                           required={true}
                           onChange={handleChange}
                           name={'confirmPassword'}
                           value={confirmPassword}/>

                <Button type={'submit'}>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;