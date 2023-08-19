import cars from '~/static/json/cars.json'
export default defineEventHandler(() =>{
    return {
        "data" : cars
    }
})