interface Card {
iconUrl:string
descrp: string
iconClassName?: string
}

const Card = ({iconUrl, descrp, iconClassName = ""}:Card)=>{
    return (<div className="transition duration-200 p-2 bg-white/5 rounded-2xl w-30 h-30 flex flex-col justify-around hover:bg-white/10 group border border-white/10 shadow-lg shadow-black/20">
    <img src={iconUrl} alt="icon" className={`w-10 h-10 hover:animate-pulse origin-right group-hover:scale-110 transition duration-500 ${iconClassName}`}/>
    <p className="text-[18px] font-semibold text-white">{descrp}</p>
    </div>)
}

export default Card;