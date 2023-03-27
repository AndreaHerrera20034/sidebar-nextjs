import { createContext, useState, ReactNode } from "react";

const initialValue = {
    isCollapsedSidebar: false,
    tooggleSidebarCollapseHandler: () => {},
};

export const SidebarContext = createContext(initialValue);

interface Props {
    children: ReactNode | ReactNode[];
}

const SidebarProvider = ({children}:Props) => {
    const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(false);

    const tooggleSidebarCollapseHandler = () => {
        setIsCollapsedSidebar((prev) => !prev);
    };

    return (
        <SidebarContext.Provider value={{isCollapsedSidebar, tooggleSidebarCollapseHandler}}>{children}</SidebarContext.Provider>
    );
};

export default SidebarProvider;