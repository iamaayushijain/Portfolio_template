/// <reference types="react" />
interface ButtonProps {
    type: 'button' | 'submit';
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseOver?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}
/**
 * Enable plain and themed `<button>` elements to share the same props.
 */
declare const getButtonProps: ({ onClick, type, onMouseEnter, onMouseOver, onFocus, onMouseLeave, onBlur, }: ButtonProps) => ButtonProps;
export default getButtonProps;
//# sourceMappingURL=get-button-props.d.ts.map