import {
    ContextMenuContent,
    ContextMenuGroup,
    ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut
} from "@/components/ui/context-menu.tsx";
import {useNavigate} from "react-router";
import type {MainContextMenuProps} from "@/types/props/MainContextMenuProps.ts";
import React from "react";

const MainContextMenu = ({ reloadPath }: MainContextMenuProps) => {
    const navigate = useNavigate()

    return (
        <ContextMenuContent>
            {reloadPath ? (
                <React.Fragment>
                    <ContextMenuGroup>
                        <ContextMenuItem onClick={() =>
                            navigate(reloadPath)
                        }>
                            Reload
                            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                        </ContextMenuItem>
                    </ContextMenuGroup>
                    <ContextMenuSeparator />
                </React.Fragment>
            ) : null}
            <ContextMenuGroup>
                <ContextMenuLabel className="text-xs text-muted-foreground">Go To</ContextMenuLabel>
                <ContextMenuItem onClick={() =>
                    navigate("/")
                }>
                    Home
                </ContextMenuItem>
                <ContextMenuItem onClick={() =>
                    navigate("/actors")
                }>
                    Actors
                </ContextMenuItem>
                <ContextMenuItem onClick={() =>
                    navigate("/crews")
                }>
                    Directors & Crew
                </ContextMenuItem>
            </ContextMenuGroup>
        </ContextMenuContent>
    )
}

export default MainContextMenu