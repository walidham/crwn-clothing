import Home from "./routes/home/home.component";
import { Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckoutComponent from "./routes/checkout/checkout.component";
import {useEffect} from "react";


import {checkUserSession, setCurrentUser} from "./store/user/user.action";
import {useDispatch} from "react-redux";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, []);



    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='shop/*' element={<Shop/>}/>
                <Route path='auth' element={<Authentication/>}/>
                <Route path='checkout' element={<CheckoutComponent/>}/>
            </Route>
        </Routes>

    );
}

export default App;
