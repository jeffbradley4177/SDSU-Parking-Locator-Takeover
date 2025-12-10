/**
 * useToggle Hook
 * 
 * Custom hook for managing boolean state with toggle functionality.
 * 
 * @example
 * ```tsx
 * const [isOpen, toggle, setIsOpen] = useToggle();
 * 
 * <button onClick={toggle}>Toggle</button>
 * <button onClick={() => setIsOpen(true)}>Open</button>
 * ```
 */

import { useState, useCallback } from 'react';

export function useToggle(
  initialValue = false
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle, setValue];
}
