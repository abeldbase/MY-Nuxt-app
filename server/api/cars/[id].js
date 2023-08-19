import cars from '~/static/json/cars.json'
export default defineEventHandler((event) => {
    const id = event.context.params.id
    return cars.find((car) =>{ if(car.id == id) return car })
})