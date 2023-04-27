import DirectoryComponent from "../../components/directory/directory.component";
import {Outlet} from "react-router-dom";

const  Home = () => {


    return (
        <div>
            <DirectoryComponent />
            <Outlet></Outlet>
        </div>

    );
}

export default Home;
