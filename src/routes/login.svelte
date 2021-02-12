<script>
  import { name, units } from "../stores";
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  onMount(() => {
    name.set("");
  });

  let pwd = "";
  const loginClick = async () => {
    console.log(`Logging in with ${JSON.stringify({ pwd })}`);
    const res = await fetch("users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pwd }),
    });
    const json = await res.json();
    if (!json.error) {
      console.log(JSON.stringify(json));
      name.set(json.name);
      units.set([...json.units]);
      goto("/");
    }

    pwd = "";
  };
</script>

<div>
  <form>
    <label for="pwd">Unit Planning Password</label>
    <input type="password" id="pwd" bind:value={pwd} />
    <button on:click|preventDefault={loginClick} disabled={pwd.length < 4}>
      Log In
    </button>
  </form>
</div>

<style>
  div {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }
  label {
    display: block;
  }
  form {
    display: block;
    max-width: 360px;
    width: 100%;
    margin: 0 auto;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    height: 3em;
    margin-top: 6px;
    font-size: 1em;
    padding: 0 12px;
  }
  button {
    height: 2.5em;
    margin-top: 12px;
    padding: 0.5em 1em;
    font-size: 1em;
  }
</style>
