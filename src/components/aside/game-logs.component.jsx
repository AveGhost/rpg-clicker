const GameLogs = ({battleLogs}) => {
    return (
        <div className="border border-[#A1662F] rounded-lg p-3 h-full w-[350px] ml-auto z-10">
            <h3 className="text-xl text-center">Game logs</h3>
            <ul className="overflow-y-auto h-[640px]">
                {battleLogs.map((log, index) => log.text && <li key={index} className={`${log.who === 'player' ? 'text-[#1aff67]' : 'text-[#ff0000]'} text-[.8rem] py-2`}>{log.text}</li>)}
            </ul>
        </div>
    )
}

export default GameLogs