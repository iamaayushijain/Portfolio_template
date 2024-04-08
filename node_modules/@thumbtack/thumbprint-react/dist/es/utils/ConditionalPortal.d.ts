import React from 'react';
interface PropTypes {
    /**
     * Whether or not the contents should be displaced to the end of the `<body>`, or rendered inline.
     */
    shouldDisplace?: boolean;
    /**
     * The contents to render.
     */
    children?: React.ReactNode;
}
/**
 * Component to conditionally portal a component to the end of the `<body>` if a certain condition is
 * true. Also automatically guards against trying to use portals in SSR where `document` is not
 * defined.
 */
export default function ConditionalPortal({ shouldDisplace, children, }: PropTypes): JSX.Element | null;
export {};
//# sourceMappingURL=ConditionalPortal.d.ts.map