interface Card {
iconUrl:string
descrp: string
}

const Card = ({iconUrl, descrp}:Card)=>{
    return (<div className="transition duration-200 p-2 bg-black/20 rounded-2xl w-30 h-30 flex flex-col justify-around hover:bg-black/10 group border-r border-b border-blue-500 shadow-2xl shadow-blue-500">
    <img src={iconUrl} alt="icon" className="w-10 h-10 hover:animate-pulse origin-right group-hover:scale-110 transition duration-500"/>
    <p className="text-[18px] font-bold bg-linear-to-r from-green-300 to-blue-600
               bg-clip-text text-transparent">{descrp}</p>
    </div>)
}

export default Card;