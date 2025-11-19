import { cn } from "@/lib/cn";
import {
    forwardRef,
    memo,
    useRef,
    useState,
    type ComponentPropsWithoutRef,
    type ReactNode,
} from "react";

export type DrawerState = "collapsed" | "partial" | "full";

export interface DrawerProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
    state?: DrawerState;
    onStateChange?: (state: DrawerState) => void;
    children?: ReactNode;
    showScrim?: boolean;
    closeOnScrimClick?: boolean;
    controlled?: boolean;
};

const STATE_CLASSES: Record<DrawerState, string> = {
    collapsed: "h-[var(--component-drawer-height-collapsed)]",
    partial: "h-[var(--component-drawer-height-partial)]",
    full: "h-[var(--component-drawer-height-full)]",
};

const BASE_CLASSES = [
    "fixed bottom-0 left-0 right-0",
    "flex flex-col",
    "bg-[var(--component-drawer-bg)]",
    "border-t border-[var(--component-drawer-border)]",
    "rounded-t-[var(--component-drawer-radius)]",
    "shadow-[var(--component-drawer-shadow)]",
    "z-[var(--component-drawer-z-index)]",
    "transition-all duration-[var(--component-drawer-transition-duration)]",
].join(" ");

const SCRIM_CLASSES = [
    "fixed inset-0",
    "bg-[var(--component-drawer-scrim)]",
    "z-[var(--component-drawer-scrim-z-index)]",
    "transition-opacity duration-[var(--component-drawer-transition-duration)]",
].join(" ");

const HANDLE_CONTAINER_CLASSES = [
    "flex items-center justify-center",
    "cursor-grab active:cursor-grabbing",
    "touch-none",
].join(" ");

const HANDLE_BAR_CLASSES = [
    "w-[var(--component-drawer-handle-width)]",
    "h-[var(--component-drawer-handle-height)]",
    "rounded-[var(--component-drawer-handle-radius)]",
    "bg-[var(--component-drawer-handle)]",
].join(" ");

const CONTENT_CLASSES = [
    "flex-1",
    "flex",
    "flex-col",
    "overflow-y-auto",
].join(" ");

export const Drawer = memo(
    forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
        {
            state: controlledState,
            onStateChange,
            children,
            className,
            showScrim = false,
            closeOnScrimClick = true,
            controlled = false,
            ...props
        },
        ref
    ) {
        const [internalState, setInternalState] = useState<DrawerState>("collapsed");
        const drawerRef = useRef<HTMLDivElement>(null);
        const startY = useRef<number>(0);
        const startHeight = useRef<number>(0);
        const isDragging = useRef<boolean>(false);
        const currentState = controlled ? controlledState || "collapsed" : internalState;

        const setState = (newState: DrawerState) => {
            if (!controlled) {
                setInternalState(newState);
            }
            onStateChange?.(newState);
        };

        const handleDragStart = (clientY: number) => {
            isDragging.current = true;
            startY.current = clientY;
            if (drawerRef.current) {
                startHeight.current = drawerRef.current.getBoundingClientRect().height;
            }
        };

        const handleDragMove = (clientY: number) => {
            if (!isDragging.current || !drawerRef.current) return;

            const deltaY = startY.current - clientY;
            const newHeight = startHeight.current + deltaY;
            const windowHeight = window.innerHeight;

            if (newHeight < windowHeight * 0.15) {
                setState("collapsed");
            } else if (newHeight < windowHeight * 0.60) {
                setState("partial");
            } else {
                setState("full");
            }
        };

        const handleDragEnd = () => {
            isDragging.current = false;
        };

        const handleTouchStart = (e: React.TouchEvent) => {
            handleDragStart(e.touches[0].clientY);
        };

        const handleTouchMove = (e: React.TouchEvent) => {
            handleDragMove(e.touches[0].clientY);
        };

        const handleTouchEnd = () => {
            handleDragEnd();
        };

        const handleMouseDown = (e: React.MouseEvent) => {
            handleDragStart(e.clientY);
        };


        const handleScrimClick = () => {
            if (closeOnScrimClick && currentState !== "collapsed") {
                setState("collapsed");
            }
        };

        const handleHandleClick = () => {
            if (currentState === "collapsed") {
                setState("partial");
            } else if (currentState === "partial") {
                setState("full");
            } else {
                setState("collapsed");
            }
        };

        return (
            <>
                {showScrim && currentState !== "collapsed" && (
                    <div
                        className={SCRIM_CLASSES}
                        onClick={handleScrimClick}
                        aria-hidden="true"
                    />
                )}

                <div
                    ref={(node) => {
                        drawerRef.current = node;
                        if (typeof ref === "function") {
                            ref(node);
                        } else if (ref) {
                            ref.current = node;
                        }
                    }}
                    className={cn(
                        BASE_CLASSES,
                        STATE_CLASSES[currentState],
                        className
                    )}
                    {...props}
                >
                    <div
                        className={HANDLE_CONTAINER_CLASSES}
                        style={{
                            paddingBlock: "var(--component-drawer-handle-spacing)",
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onClick={handleHandleClick}
                        role="button"
                        aria-label={`Drawer ${currentState}. Click or drag to adjust.`}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                handleHandleClick();
                            }
                        }}
                    >
                        <div
                            className={HANDLE_BAR_CLASSES}
                            aria-hidden="true"
                        />
                    </div>

                    <div
                        className={CONTENT_CLASSES}
                        style={{
                            gap: "var(--component-drawer-gap)",
                            paddingInline: "var(--component-drawer-padding-inline)",
                            paddingBlock: "var(--component-drawer-padding-block)",
                        }}
                    >
                        {currentState !== "collapsed" && children}
                    </div>
                </div>
            </>
        );
    })
);
