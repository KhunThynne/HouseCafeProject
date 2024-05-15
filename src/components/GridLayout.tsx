import { ReactNode } from "react";

interface GridLayoutProps {
    // Define your props here
    children?: ReactNode,
    className?: string,
}

const GridLayout: React.FunctionComponent<GridLayoutProps> = ({ children, className = "" }) => {
    // Component logic
    return <div className={`grid h-screen grid-rows-[80px,1fr] gap-y-1  ${className}`}>
        {children}
    </div>;
}


export default GridLayout;