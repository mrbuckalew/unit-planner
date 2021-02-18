<script>
  import PlanItem from "./PlanItem.svelte";
  export let year;
  export let plans;
  let hidden = true;
</script>

<section class="year">
  <div
    class="year"
    on:click={() => {
      hidden = !hidden;
    }}
  >
    <div class="icon">
      {#if hidden}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          ><path d="M0 0h24v24H0V0z" fill="none" /><path
            d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
          /></svg
        >
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          ><path d="M0 0h24v24H0V0z" fill="none" /><path
            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
          /></svg
        >
      {/if}
    </div>
    <div>
      {year.beginyear} - {year.endyear}
    </div>
  </div>
  <div class="plan-list" id={`year-${year.endyear}`} class:hidden>
    {#each plans as plan}
      <PlanItem {plan} />
    {:else}
      <div class="noplans">No Unit Plans found for this year.</div>
    {/each}
  </div>
</section>

<style>
  div.year {
    font-weight: 700;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    cursor: pointer;
    font-family: monospace;
  }

  section.year {
    margin-bottom: 10px;
  }

  div.plan-list {
    margin-left: 24px;
  }

  div.hidden {
    display: none;
  }

  svg {
    display: block;
    margin: auto 0;
  }
</style>
