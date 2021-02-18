<!-- <script ✂prettier:content✂="CiAgaW1wb3J0IHsgbmFtZSwgdW5pdHMgfSBmcm9tICIuLi9zdG9yZXMiOwogIGltcG9ydCB7IGdvdG8gfSBmcm9tICJAc2FwcGVyL2FwcCI7CiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gInN2ZWx0ZSI7CgogIG9uTW91bnQoKCkgPT4gewogICAgbmFtZS5zZXQoIiIpOwogIH0pOwoKICBsZXQgcHdkID0gIiI7CiAgY29uc3QgbG9naW5DbGljayA9IGFzeW5jICgpID0+IHsKICAgIGNvbnNvbGUubG9nKGBMb2dnaW5nIGluIHdpdGggJHtKU09OLnN0cmluZ2lmeSh7IHB3ZCB9KX1gKTsKICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCJ1c2Vycy9sb2dpbiIsIHsKICAgICAgbWV0aG9kOiAiUE9TVCIsCiAgICAgIGNyZWRlbnRpYWxzOiAiaW5jbHVkZSIsCiAgICAgIGhlYWRlcnM6IHsKICAgICAgICAiQ29udGVudC1UeXBlIjogImFwcGxpY2F0aW9uL2pzb24iLAogICAgICB9LAogICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHB3ZCB9KSwKICAgIH0pOwogICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7CiAgICBpZiAoIWpzb24uZXJyb3IpIHsKICAgICAgY29uc29sZS5sb2coYFJldHVybmVkICR7SlNPTi5zdHJpbmdpZnkoanNvbil9YCk7CiAgICAgIG5hbWUuc2V0KGAke2pzb24udXNlci5maXJzdF9uYW1lfSAke2pzb24udXNlci5sYXN0X25hbWV9YCk7CiAgICAgIHVuaXRzLnNldChbLi4uanNvbi51c2VyLnVuaXRzXSk7CiAgICAgIGlmIChqc29uLnVzZXIudW5pdHMubGVuZ3RoID4gMSkgewogICAgICAgIGdvdG8oIi91bml0cyIpOwogICAgICB9CiAgICAgIGlmIChqc29uLnVzZXIudW5pdHMubGVuZ3RoID09PSAxKSB7CiAgICAgICAgZ290byhgL3VuaXRzLyR7anNvbi51c2VyLnVuaXRzWzBdfWApOwogICAgICB9CiAgICB9CgogICAgcHdkID0gIiI7CiAgfTsK" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script> -->
<script>
  import { goto, stores } from "@sapper/app";
  const { session } = stores();
  let pwd = "";
  let error;

  const handleLogin = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ pwd }),
    });

    const parsed = await response.json();

    // console.log(`RESPONSE ${JSON.stringify(parsed)}`);

    if (parsed.error) {
      // console.error("LOGIN ERROR!");
      error = parsed.error;
    } else {
      // console.log("LOGIN FINE");
      $session.token = parsed.token;
      window.localStorage.setItem("planning-token", parsed.token);
      goto("/units");
    }
  };
</script>

<div>
  <form on:submit|preventDefault={handleLogin} method="post">
    <label for="pwd">Unit Planning Password</label>
    <input type="password" id="pwd" bind:value={pwd} />
    <button type="submit" disabled={pwd.length < 4}> Log In </button>
  </form>
</div>

{#if error}
  <p>{error}</p>
{/if}

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
