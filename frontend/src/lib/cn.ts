import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 * 
 * Combines multiple class names and intelligently merges conflicting Tailwind classes.
 * 
 * @param inputs - Class values to merge (strings, objects, arrays, etc.)
 * @returns Merged class string
 * 
 * @example
 * ```tsx
 * cn('px-2 py-1', 'px-4') // => 'py-1 px-4' (px-2 removed)
 * cn('text-red-500', condition && 'text-blue-500') // => conditionally applies classes
 * cn({ 'bg-red-500': isError, 'bg-green-500': isSuccess }) // => object syntax
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
