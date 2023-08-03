export default function Mouse() {
	return (
		<div className="w-[26px] h-[40px] absolute left-1/2 -translate-x-1/2 bottom-8 border-[1.5px] border-white rounded-[15px]">
			<div className="animate-roll w-[3px] h-[3px] absolute left-1/2 ml-[-1.5px] translate-y-[10px] bg-white rounded-full z-[2]"></div>
			<div className="animate-roll-shadow w-[3px] h-[3px] absolute left-1/2 ml-[-1.5px] translate-y-[10px] bg-[#aaa] rounded-full"></div>
		</div>
	)
}
