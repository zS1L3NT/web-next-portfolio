import { PropsWithChildren } from "react"

const Center = ({ className, children }: PropsWithChildren<{ className: string }>) => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className={className}>{children}</div>
		</div>
	)
}

export default Center
