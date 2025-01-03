import { useContext } from "react"
import { playerInfoContext } from "../../context/player-info.context"
import playerStatsButton from "./player-stats-button.component"
const PlayerStats = () => {
    const { strength, dexterity, endurance, luck, skillPoints, increaseStat } = useContext(playerInfoContext)

    return (
        <div className="mt-6 flex flex-col justify-center min-h-[640px] gap-8">
            <h2 className="text-xl font-medium px-4">Skill points: {skillPoints}</h2>
            <ul className="flex flex-col gap-12">
                {playerStatsButton({statName: 'Strength', increaseStat, statValue: strength, statDescription: 'Increse damage'})}
                {playerStatsButton({statName: 'Dexterity', increaseStat, statValue: dexterity, statDescription: 'Increse dodge chance'})}
                {playerStatsButton({statName: 'Endurance', increaseStat, statValue: endurance, statDescription: 'Increse health'})}
                {playerStatsButton({statName: 'Luck', increaseStat, statValue: luck, statDescription: 'Increse critical hit chance'})}
            </ul>
        </div>
    )
}

export default PlayerStats