import { cn } from "@/lib/cn";

export interface MessageProps {
  title: string;
  className?: string;
}

function Message({ title, className }: MessageProps) {
  return <h1 className={cn("msg-title", className)}>{title}</h1>;
}

export default Message;
