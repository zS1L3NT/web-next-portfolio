import { ReactNode } from "react"

type Props = {
	className?: string
	children?: ReactNode
}

const Center = (props: Props) => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className={props.className}>{props.children}</div>
		</div>
	)
}

export default Center
