<script context="module">
  export async function preload(page, session) {
    var { token } = session;

    if (!token) {
      // console.log("/units: NO SESSION");
      return this.redirect(302, "login");
    }

    // console.log("/units HAS SESSION");

    const response = await this.fetch(`/api/units`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    });

    const parsed = await response.json();

    // console.log(`/units DATA ${JSON.stringify(parsed)}`);
  }
</script>

<script>
  export let units = [];
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  onMount(async () => {
    // console.log("UNITS onMount");

    const response = await fetch("/api/units");
    units = await response.json();

    // console.log(`UNITS MOUNTED ${JSON.stringify(units)}`);
  });
</script>

<h1>My Units</h1>
<div id="unit-list">
  {#each units as unit}
    <a href={`/units/${unit.id}`}>
      <div class="unit">
        <div class="unit-number">{unit.unit_number}</div>
        <div class="unit-name">{unit.unit_name}</div>
      </div>
    </a>
  {/each}
</div>

<style>
  div#unit-list {
    display: flex;
    flex-wrap: wrap;
  }

  div.unit {
    width: 260px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 10px 30px 10px 0px;
    padding: 10px;
    cursor: pointer;
    border-radius: 8px;
  }

  div.unit:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  div.unit-name {
    font-size: 1.2rem;
    font-weight: 700;
  }

  div.unit-number {
    font-size: 0.8rem;
  }
</style>
