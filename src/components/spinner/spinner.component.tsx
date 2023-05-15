import {SpinnerContainer, SpinnerOverlay} from './spinner.styles';


const SpinnerComponent = ()=>(
    <SpinnerOverlay data-testid='spinner'>
        <SpinnerContainer />
    </SpinnerOverlay>
)

export default SpinnerComponent;
