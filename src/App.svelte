<script lang="ts">
import { MetaTags, JsonLd } from 'svelte-meta-tags';
import router from 'page';

//Include our routes
import HomePage from "./routes/HomePage.svelte";
import DogBeds from './routes/productsPages/dogs/DogBeds.svelte';
import DogsFood from './routes/productsPages/dogs/DogsFood.svelte';
import DogsToys from './routes/productsPages/dogs/DogsToys.svelte';
import DogsLeash from './routes/productsPages/dogs/DogsLeash.svelte';

let page;
let params;

// Set up the pages to watch for
router('/', () => (page = HomePage))
router('/dogs/beds', () => (page = DogBeds))
router('/dogs/food', () => (page = DogsFood))
router('/dogs/toys', () => (page = DogsToys))
router('/dogs/leash', () => (page = DogsLeash))

// Set up the router to start and actively watch for changes
router.start()


</script>


<MetaTags
title="Topmascotas"
description="Los mejores productos para tus mascotas"
canonical="https://topmascotas.sytes.net"
openGraph={{
    url: 'https://topmascotas.sytes.net',
    title: 'Los mejores productes para tus mascotas',
    description: 'Los mejores productos para tus mascotas',
    images: [
    {
        url: 'icon.png',
        width: 800,
        height: 600,
        alt: 'Topmascotas icon'
    }],
    site_name: 'Topmascotas'
}}
/>

<JsonLd
schema={{
    '@type': 'BreadcrumbList',
    itemListElement: [
    {
        '@type': 'ListItem',
        position: 1,
        name: 'Books',
        item: 'https://example.com/books'
    },
    {
        '@type': 'ListItem',
        position: 2,
        name: 'Science Fiction',
        item: 'https://example.com/books/sciencefiction'
    },
    {
        '@type': 'ListItem',
        position: 3,
        name: 'Award Winners'
    }
    ]
}}
/>

<svelte:component this="{page}" params="{params}" />
