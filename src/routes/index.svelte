<script context="module">
  export async function preload(page, session) {
    const { token } = session;

    if (!token) {
      return this.redirect(302, "login");
    }
  }
</script>

<script>
  // import successkid from "images/successkid.jpg";
  import { units } from "../stores";
  let units_list;
  const unsubscribe = units.subscribe((value) => {
    units_list = value;
  });
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<!-- <figure>
  <img alt="Success Kid" src={successkid} />
  <figcaption>Have fun with Sapper!</figcaption>
</figure> -->

{#each units_list as unit}
  {unit.name} {unit.number}
{/each}

<!-- <figure>
  <img alt="Success Kid" src={successkid} />
  <figcaption>Have fun with Sapper!</figcaption>
</figure> -->
<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
