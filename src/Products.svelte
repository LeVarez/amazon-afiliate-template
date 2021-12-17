<script lang="ts">

  interface Products{
    name: string;
    img: string;
    ref: string;
    price: number;
  }
  import dogsbeds from './json/dogs/beds.json';
  import dogsfood from './json/dogs/food.json';

  let data = {
    dogs: {
      beds: dogsbeds,
      food: dogsfood
    },
    cats: {

    }
  }

  export let currentdata = "";

  let products : Products[] = [];

  $:{
    let path = currentdata.split(".");
    if(currentdata.length > 0) products = data[path[0]][path[1]];
    console.log(products);
  }

</script>


<div class="container">
	{#each products as product, i}
  <div class="item">
    <div class="opacity">
        <a class="buy_button" href={product.ref}>Comprar en<br>Amazon</a>
    </div>
    <img src={product.img} class="product_imgbox" alt={product.name}>
    <div class="product_body">
      <h3 class="product_name">{product.name}</h3>
      <span class="product_price">{product.price}€</span>
    </div>


  </div>

  {/each}
</div>

<style lang="scss">

  .buy_button{
    display: block;
    opacity: 0;
    background-color: hotpink;
    color: #FFF;
    border-radius: 3px;
    margin: 0 auto;
    width: 75%;
    height: 20%;
    -ms-transform: translateY(-50%);
    transform: translateY(175%);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding-bottom: 5px;
    text-decoration: none;
  }
  .buy_button:hover{
    background-color: rgb(255, 35, 145);

  }
  .opacity {
    z-index: 2;
    position: absolute;
    background: rgba(29, 29, 29, 0.0);
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    border-radius: 5px;
  }
  .opacity:hover {
    background: rgba(29, 29, 29, 0.5);

  }
  .opacity:hover .buy_button{
    display: block;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
  }
  .product_name{
    margin: 0 auto 0 auto;
  }
  .product_imgbox{

    width: 90%;

    height: 100px;
    display: block;
    margin: 10px auto;
  }
  .container{
    z-index: 0;
    text-align: center;
    max-width: 100%;
    height: auto;
    margin: 30px auto;
    padding-left: 20%;
    padding-right: 20%;
    display: grid;


    //Using auto-fill and auto-fit
    grid-template-rows: repeat(2, minmax(150px, min-content));
    grid-template-columns: repeat(auto-fill,100px);
    grid-template-columns: repeat(auto-fit,100px);
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));

    grid-column-gap: 15px;
    grid-row-gap: 50px;


    .item{
      position: relative;
      display: inline-block;
      width: 200px;
      height: 200px;
      border-radius: 5px;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 1px 2px rgba(0,0,0,0.15);

    }


    .item:hover {
      transform: scale(1.2, 1.2);
      box-shadow: 0 5px 15px rgba(0,0,0,0.5);
      z-index: 1;
    }

    /* Fade in the pseudo-element with the bigger shadow */
    .item:hover::after {
      opacity: 1;
    }
  }


  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>