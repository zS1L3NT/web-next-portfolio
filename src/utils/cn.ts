import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export default (...inputs: clsx.ClassValue[]) => twMerge(clsx(...inputs))
