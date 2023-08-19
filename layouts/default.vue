<template>
    <header>
        <!--Nav bar section-->
        <nav class="navbar navbar-expand-md navbar-primary bg-light mb-4">
            <a class="navbar-brand" href="/">
                <div class="d-flex gap-2">                
                <img src="/logo.jpg" width="50" height="50">
                <h1>CarCare</h1>
            </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="nav-bar nav">
                    <li class="nav-item active">
                        <!-- Home link redirects to HomePage component-->
                        <NuxtLink to="/" class="nav-link text-dark">{{ headers.home }}</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <!-- make link redirects to CarMake component-->
                        <NuxtLink to="/search" class="nav-link text-dark">{{ headers.search }}</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <!-- model link redirects to CarModel component-->
                        <router-link to="/services" class="nav-link text-dark">{{ headers.services }}</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- new arrival link redirects to New Arrivals component-->
                        <NuxtLink to="/newArrival" class="nav-link text-dark">{{ headers.newArrivals }}</NuxtLink>
                    </li>
                    <li class="nav-item me-5">
                        <!-- type link redirects to Type component-->
                        <NuxtLink to="/feature" class="nav-link text-dark">{{ headers.feature }}</NuxtLink>
                    </li>
                </ul>
                
            </div>
        </nav>
    </header>
    <div>
        <slot />
    </div>
</template>
<script setup>
   const headers = {home: 'Home', search: 'Find Vehicle', services: 'Available Services', newArrivals: 'New Arrivals', feature: 'Features'}
   
</script>
