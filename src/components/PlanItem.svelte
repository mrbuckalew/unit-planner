<script>
  export let plan;
</script>

<a href={`/plans/${plan.fileID}`} class="plan">
  <div
    class="plan"
    class:slo={plan.outcometype === "student"}
    class:program={plan.outcometype === "program"}
  >
    <span>
      {plan.outcomenumber} (
      {#if plan.outcometype === "program"}
        Program Outcome
      {:else}
        Student Learning Outcome
      {/if}
      )
    </span>
    <div>
      {plan.outcome}
    </div>
  </div>
</a>

<style>
  div.plan {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 10px;
  }

  a.plan {
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
  }

  .program {
    background-color: rgba(11, 42, 120, 0.2);
    border: 1px solid rgba(11, 42, 120, 0.6);
  }
  .program:hover {
    background-color: rgba(11, 42, 120, 0.1);
  }

  .slo {
    background-color: rgba(255, 211, 0, 0.2);
    border: 1px solid rgba(255, 211, 0, 0.6);
  }

  .slo:hover {
    background-color: rgba(255, 211, 0, 0.1);
  }
</style>
