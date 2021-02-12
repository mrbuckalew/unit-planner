<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<main>
  <Header {segment} />
  <div class="spacer">
    <slot />
  </div>
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 960px;
    background-color: white;
    padding: 0px 10px;
    margin: 0 auto;
    min-height: 100vh;
  }
  .spacer {
    margin: 20px auto;
    overflow-y: scroll;
    height: 100%;
    flex-grow: 1;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    main {
      font-size: 1.5em;
    }
  }
</style>
