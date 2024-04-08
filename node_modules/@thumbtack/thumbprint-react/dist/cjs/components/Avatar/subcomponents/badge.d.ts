import React from 'react';
interface PropTypes {
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    type: 'user' | 'entity';
    children?: React.ReactNode;
}
/**
 * `Badge` appears on the top-right corner of an `Avatar`. It is used to either
 * show a checkmark or an indicator that there are unread notifications.
 */
export default function Badge({ size, type, children }: PropTypes): JSX.Element;
export {};
//# sourceMappingURL=badge.d.ts.map