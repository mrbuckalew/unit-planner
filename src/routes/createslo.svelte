<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("plans/years.json");
    const years = await res.json();

    const goalres = await this.fetch("plans/goals.json");
    const goals = await goalres.json();

    return { years, goals };
  }
</script>

<script>
  export let years;
  export let goals;
  let goal = "Goal 1";
</script>

<h1>Add Student Learning Outcome</h1>

<form>
  <label for="year">Planning Year</label>
  <select id="year">
    {#each years as year}
      <option value={year}>{year}</option>
    {/each}
  </select>

  <label for="goal">Institutional Goal Supported</label>
  {#each goals as { label, text }, i}
    <div class="radio-block">
      <input
        type="radio"
        name="goal"
        id={"goal" + label}
        value={label}
        bind:group={goal}
        checked={goal === label}
      />
      <label
        for={"goal" + label}
        class="goal{goal === label ? ' selected' : ''}"
      >
        {label + " - " + text}
      </label>
    </div>
  {/each}

  <div class="textwrapper">
    <label for="slo">Student Learning Outcome</label>
    <textarea cols="2" rows="10" name="slo" />
  </div>

  <div class="textwrapper">
    <label for="assessment">
      What data supports the need for the Student Learning Outcome (Initial
      Assessment)?
    </label>
    <textarea cols="2" rows="10" name="assessment" />
  </div>

  <div class="textwrapper">
    <label for="plan">
      What is the action plan to achieve the student learning outcome?
    </label>
    <textarea cols="2" rows="10" name="plan" />
  </div>

  <div class="textwrapper">
    <label for="measurement">How will the outcome be measured?</label>
    <textarea cols="2" rows="10" name="measurement" />
  </div>

  <div class="textwrapper">
    <label for="schedule">Scheduled Completion Date</label>
    <input type="calendar" name="schedule" />
  </div>

  <div class="textwrapper">
    <label for="budget"
      >Is there a budget amount required to complete the student learning
      outcome? If yes, what amount?</label
    >
    <input type="text" id="budget" name="budget" />
  </div>
</form>

<style>
  label {
    display: block;
    width: 100%;
    font-size: 1.2em;
  }

  label.goal {
    display: block;
    font-size: 1em;
    cursor: pointer;
    padding: 3px 18px;
    margin: 0 4px;
    border-radius: 6px;
    border: 2px solid rgba(0, 0, 0, 0.15);
  }

  label.selected {
    border: 2px solid rgba(0, 0, 255, 0.4);
    background-color: rgba(0, 0, 255, 0.05);
  }

  input[type="radio"] {
    display: none;
  }

  .radio-block {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 6px;
  }

  textarea {
    width: 100%;
  }

  .textwrapper {
    box-sizing: border-box;
    margin: 5px 0;
    padding: 6px;
    max-width: 960px;
    width: 100%;
  }
</style>
