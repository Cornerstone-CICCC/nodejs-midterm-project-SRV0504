type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
