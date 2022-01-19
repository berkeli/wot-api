import { ObjectId, Document } from 'mongoose';
import ITank from 'src/interfaces/tank';

// Create an interface for tank information
interface ITank_Achievements {
    shootToKill?: number,
    aimer?: number,
    fighter?: number,
    medalLavrinenko?: number,
    armorPiercer?: number,
    medalPoppel?: number,
    kamikaze?: number,
    supporter?: number,
    medalKay?: number,
    medalAbrams?: number,
    medalCarius?: number,
    duelist?: number,
    markOfMastery?: number,
    handOfDeath?: number,
    mainGun?: number,
    titleSniper?: number,
    charmed?: number,
    medalKnispel?: number,
    bonecrusher?: number,
    defender?: number
}

interface ISingleTankStat {
    tank_id:number | ObjectId | ITank,
    mark_of_mastery:number,
    max_frags:number,
    max_xp:number,
    spotted:number,
    hits:number,
    losses:number,
    draws:number,
    wins:number,
    avg_damage_blocked:number,
    hits_percents:number,
    battles:number,
    damage_dealt:number,
    capture_points:number,
    damage_received:number,
    shots:number,
    frags:number,
    xp:number,
    survived_battles:number,
    dropped_capture_points:number,
    wn8:number,
    achievements:ITank_Achievements,
}

export default interface ITankStatistic extends Document {
    _id: number | ObjectId,
    data: ISingleTankStat[]
}
