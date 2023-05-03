import {BackgroundImage,Body,DirectoryItemContainer} from './directory-item.styles';

import {useNavigate} from "react-router-dom";
import {FC} from "react";
import {CategoryDirectory} from "../directory/directory.component";

type DirectoryItemProps = {
    category: CategoryDirectory;
};


const DirectoryItemComponent:FC<DirectoryItemProps> = ({category})=>{
    const navigate = useNavigate();

    const onNavigateHandler = ()=> navigate(route);

    const {title,imageUrl,route} = category;
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage
                 imageUrl={imageUrl}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItemComponent;
