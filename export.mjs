export const calculateCoef = (attackType, defenceType) => {
    if (attackType === defenceType){
        return 0.5;
    }
    let type = Effective[attackType];
    return type[defenceType];

}
const Effective = {
    fire:{
        water: 0.5,
        grass: 2,
        electric: 1
    },
    water: {
        fire: 0.5,
        grass: 1,
        electric: 2
    },
    grass: {
        fire: 2,
        water: 1,
        electric: 0.5
    },
    electric: {
        fire: 0.5,
        water: 2,
        grass: 1
    }
}
