import {render, screen} from "@testing-library/react";
import Button, {BUTTON_TYPE_CLASSES} from "../button.component";

describe('button test',()=>{
    test('should render basic button when nothing is passed',()=>{
        render(<Button>Test</Button>);
       // const buttonElement = screen.getByText(/test/i);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle('background-color: black');
    });

    test('should render google button when passed google type', () => {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.google}/>);
        const googleButtonElement = screen.getByRole('button');
        expect(googleButtonElement).toHaveStyle('background-color: #4285f4');
    });

    test('should render inverted button when passed inverted type', () => {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}/>);
        const googleButtonElement = screen.getByRole('button');
        expect(googleButtonElement).toHaveStyle('background-color: white');
    });

    test('should be disabled when isLoading is true',()=>{
        render(<Button isLoading={true}/> );
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    })
})
