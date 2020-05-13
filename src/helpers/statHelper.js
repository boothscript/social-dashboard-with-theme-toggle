export default function statHelper(stat){
    if (stat > 9999){
        console.log(Math.round(stat / 1000))
        return `${Math.round(stat / 1000)}k`
    }
    return stat
}