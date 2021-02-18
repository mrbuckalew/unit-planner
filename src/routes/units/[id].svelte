<script context="module">
  export async function preload({ params }, session) {
    const { token } = session;
    let [id] = params.id;

    if (!token) {
      return this.redirect(302, "login");
    }

    const response = await this.fetch(`/api/units/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    });

    const { unit, years, plans } = await response.json();

    // console.log(`/unit/${id} DATA ${JSON.stringify({ unit, years, plans })}`);

    return { unit, years, plans };
  }
</script>

<script>
  import PlanList from "../../components/PlanList.svelte";
  export let years;
  export let unit;
  export let plans;
</script>

<section class="unit">
  <div>{unit.unit_number}</div>
  <div>{unit.unit_name}</div>
</section>

{#each years as year}
  <PlanList {year} plans={plans.filter((p) => p.ayear === year.id)} />
{/each}
