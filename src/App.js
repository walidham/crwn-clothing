import {Route, Routes} from "react-router-dom";

import {useEffect, lazy, Suspense} from "react";


import {checkUserSession} from "./store/user/user.action";
import {useDispatch} from "react-redux";
import SpinnerComponent from "./components/spinner/spinner.component";
import {GlobalStyle} from "./global.style";

const Home = lazy(() => import( "./routes/home/home.component"))
const Authentication = lazy(() => import( "./routes/authentication/authentication.component"))

const Navigation  = lazy(()=>import( "./routes/navigation/navigation.component"));
const  Shop = lazy(()=>import("./routes/shop/shop.component") );
const  CheckoutComponent = lazy(()=> import("./routes/checkout/checkout.component")) ;

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, []);


    return (
        <Suspense fallback={<SpinnerComponent/>}>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Navigation/>}>
                    <Route index element={<Home/>}/>
                    <Route path='shop/*' element={<Shop/>}/>
                    <Route path='auth' element={<Authentication/>}/>
                    <Route path='checkout' element={<CheckoutComponent/>}/>
                </Route>
            </Routes>
        </Suspense>

    );
}

export default App;
