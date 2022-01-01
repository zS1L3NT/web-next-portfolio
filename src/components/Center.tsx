import { ReactNode } from "react"

type Props = {
	className?: string
	children?: ReactNode
}

const Center: React.FC<Props> = (props: Props) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className={props.className}>{props.children}</div>
		</div>
	)
}

export default Center
