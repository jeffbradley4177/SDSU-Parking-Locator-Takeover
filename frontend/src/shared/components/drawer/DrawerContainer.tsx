import { cn } from "@/lib/cn";
import {
    forwardRef,
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
    type ComponentPropsWithoutRef,
    type ReactNode,
} from "react";

export type DrawerState = "collapsed" | "partial" | "full";

export interface DrawerProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
    /** Current drawer state (for controlled mode) */
    state?: DrawerState;
    /** Callback when drawer state changes */
    onStateChange?: (state: DrawerState) => void;
    /** Drawer content (hidden when collapsed) */
    children?: ReactNode;
    /** Show backdrop scrim when drawer is open */
    showScrim?: boolean;
    /** Close drawer when clicking the scrim */
    closeOnScrimClick?: boolean;
    /** Enable controlled mode (state prop required) */
    controlled?: boolean;
    /** Allow closing drawer with Escape key */
    closeOnEscape?: boolean;
}

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
    "motion-reduce:transition-none",
    // Safe area inset for mobile devices with home indicator
    "pb-[env(safe-area-inset-bottom)]",
].join(" ");

const SCRIM_CLASSES = [
    "fixed inset-0",
    "bg-[var(--component-drawer-scrim)]",
    "z-[var(--component-drawer-scrim-z-index)]",
    "transition-opacity duration-[var(--component-drawer-transition-duration)]",
    "motion-reduce:transition-none",
].join(" ");

const HANDLE_CONTAINER_CLASSES = [
    "flex items-center justify-center",
    "cursor-grab active:cursor-grabbing",
    "touch-none",
    "select-none",
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
    // Smooth scrolling for mobile
    "-webkit-overflow-scrolling-touch",
    "overscroll-contain",
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
            closeOnEscape = true,
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
        const isOpen = currentState !== "collapsed";

        const setState = useCallback((newState: DrawerState) => {
            if (!controlled) {
                setInternalState(newState);
            }
            onStateChange?.(newState);
        }, [controlled, onStateChange]);

        // Body scroll lock when drawer is open (prevents iOS bounce/scroll issues)
        useEffect(() => {
            if (!isOpen) return;

            const originalOverflow = document.body.style.overflow;
            const originalPosition = document.body.style.position;
            const originalWidth = document.body.style.width;
            const scrollY = window.scrollY;

            // Lock body scroll
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            document.body.style.top = `-${scrollY}px`;

            return () => {
                // Restore body scroll
                document.body.style.overflow = originalOverflow;
                document.body.style.position = originalPosition;
                document.body.style.width = originalWidth;
                document.body.style.top = "";
                window.scrollTo(0, scrollY);
            };
        }, [isOpen]);

        // Escape key handler
        useEffect(() => {
            if (!isOpen || !closeOnEscape) return;

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    setState("collapsed");
                }
            };

            document.addEventListener("keydown", handleKeyDown);
            return () => document.removeEventListener("keydown", handleKeyDown);
        }, [isOpen, closeOnEscape, setState]);

        const handleDragStart = useCallback((clientY: number) => {
            isDragging.current = true;
            startY.current = clientY;
            if (drawerRef.current) {
                startHeight.current = drawerRef.current.getBoundingClientRect().height;
            }
        }, []);

        const handleDragMove = useCallback((clientY: number) => {
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
        }, [setState]);

        const handleDragEnd = useCallback(() => {
            isDragging.current = false;
        }, []);

        const handleTouchStart = useCallback((e: React.TouchEvent) => {
            handleDragStart(e.touches[0].clientY);
        }, [handleDragStart]);

        const handleTouchMove = useCallback((e: React.TouchEvent) => {
            handleDragMove(e.touches[0].clientY);
        }, [handleDragMove]);

        const handleTouchEnd = useCallback(() => {
            handleDragEnd();
        }, [handleDragEnd]);

        // Mouse drag handlers (for desktop testing)
        useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
                if (isDragging.current) {
                    handleDragMove(e.clientY);
                }
            };

            const handleMouseUp = () => {
                if (isDragging.current) {
                    handleDragEnd();
                }
            };

            // Add global listeners for mouse drag
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);

            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };
        }, [handleDragMove, handleDragEnd]);

        const handleMouseDown = useCallback((e: React.MouseEvent) => {
            e.preventDefault(); // Prevent text selection during drag
            handleDragStart(e.clientY);
        }, [handleDragStart]);

        const handleScrimClick = useCallback(() => {
            if (closeOnScrimClick && isOpen) {
                setState("collapsed");
            }
        }, [closeOnScrimClick, isOpen, setState]);

        const handleHandleClick = useCallback(() => {
            if (currentState === "collapsed") {
                setState("partial");
            } else if (currentState === "partial") {
                setState("full");
            } else {
                setState("collapsed");
            }
        }, [currentState, setState]);

        return (
            <>
                {/* Scrim always renders for smooth fade animation */}
                {showScrim && (
                    <div
                        className={cn(
                            SCRIM_CLASSES,
                            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                        )}
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
