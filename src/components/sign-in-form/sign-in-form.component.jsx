import { useState} from "react";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import {SignUpContainer,ButtonsContainer} from  './sign-in-form.styles';
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password,} = formFields;
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
        const {email, password} = formFields;
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default :
                    console.log(error);
            }

        }

    }
    const signInWithGoogle = async () => {
      await signInWithGooglePopup();

    };


    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={async (event) => {
                await handleSubmit(event);
            }}>
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
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} type='button'>Sign In with Google</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignInForm;