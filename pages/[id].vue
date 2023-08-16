<template>
    <div>
        <h5 v-randomColor>{{ title }}</h5>
        <div class="d-flex gap-2 align-items-start">
            <div>
                <img :src="`/${carDetails.img}`" height="390">
            </div>
            <div class="container text-left bg-light text-primary">
            <div class="row">
                <div class="col text-primary">
                    ID
                </div>
                <div class="col text-danger">
                    {{ carDetails.id }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    YEAR
                </div>
                <div class="col text-danger">
                    {{ carDetails.year }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    MAKE
                </div>
                <div class="col text-danger">
                    {{ carDetails.make }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    MODEL
                </div>
                <div class="col text-danger">
                    {{ carDetails.model }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    DOORS
                </div>
                <div class="col text-danger">
                    {{ carDetails.doors }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    LENGTH
                </div>
                <div class="col text-danger">
                    {{ carDetails.length }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    WIDTH
                </div>
                <div class="col text-danger">
                    {{ carDetails.width }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    SEATS
                </div>
                <div class="col text-danger">
                    {{ carDetails.seats }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    HEIGHT
                </div>
                <div class="col text-danger">
                    {{ carDetails.height }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    WHEEL BASE
                </div>
                <div class="col text-danger">
                    {{ carDetails.wheel_base }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    GROUND CLEARANCE
                </div>
                <div class="col text-danger">
                    {{ carDetails.ground_clearance }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    CARGO CAPACITY
                </div>
                <div class="col text-danger">
                    {{ carDetails.cargo_capacity }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    GROSS WEIGHT
                </div>
                <div class="col text-danger">
                    {{ carDetails.gross_weight }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    ENGINE TYPE
                </div>
                <div class="col text-danger">
                    {{ carDetails.engine_type }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    FUEL TYPE
                </div>
                <div class="col text-danger">
                    {{ carDetails.fuel_type }}
                </div>
            </div>
            <div class="row">
                <div class="col text-primary">
                    CYLENDERS
                </div>
                <div class="col text-danger">
                    {{ carDetails.cylinders }}
                </div>
            </div>

        </div>
        </div>         
    </div>
</template>
<script setup>
const title = 'Car Details By ID'
const { id } = useRoute().params
console.log(id)
const { data: carDetails } = await useFetch('/api/cars/' + id)

</script>