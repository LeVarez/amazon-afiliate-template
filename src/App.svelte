<script lang="ts">
import { MetaTags, JsonLd } from 'svelte-meta-tags';

import {Router, Link, Route} from 'svelte-routing';
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

<Router>
