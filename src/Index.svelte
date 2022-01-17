<script>
    import { Router, Route } from 'svelte-routing';
    import HomePage from './routes/HomePage.svelte';
    import DogsFood from './routes/productsPages/dogs/DogsFood.svelte';
    import DogsBeds from './routes/productsPages/dogs/DogsBeds.svelte';
    import DogsToys from './routes/productsPages/dogs/DogsToys.svelte';
    import DogsLeash from './routes/productsPages/dogs/DogsLeash.svelte';

    export let url = '';
  </script>

  <Router {url}>
    <div>
      <Route path="dogs/toys" component={DogsToys} />
      <Route path="dogs/beds" component={DogsBeds} />
      <Route path="dogs/food" component={DogsFood} />
      <Route path="dogs/leash" component={DogsLeash} />
      <Route path="/" component={HomePage} />
    </div>
  </Router>