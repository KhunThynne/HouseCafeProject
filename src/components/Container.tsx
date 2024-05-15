import { ReactNode } from "react";

interface ContainerProps {
    // Define your props here
    className?: string,
    children?: ReactNode
}

const Container: React.FunctionComponent<ContainerProps> = ({ children, className }) => {
    // Component logic
    return <main className={`${className} `}>

        {children}
    </main>;
}


export default Container;