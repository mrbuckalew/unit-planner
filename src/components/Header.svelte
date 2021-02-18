<script>
  import { name } from "../stores";

  let name_value;

  const unsubscribe = name.subscribe((value) => {
    name_value = value;
  });

  export let segment;
</script>

<section>
  <div class="nav-container">
    <div>
      <a href="/units">
        <img
          src="southern-union-state-community-college.svg"
          alt="SUSCC logo"
        />
      </a>
    </div>
    <div id="sysname">
      <h2><nobr>Unit Planning</nobr></h2>
    </div>
  </div>
</section>

{#if segment !== "login"}
  <nav>
    <ul>
      <li class="link">
        <a class:current={segment === "units"} href="units">home</a>
      </li>
      <li class="link">
        <a class:current={segment === "about"} href="about">about</a>
      </li>
      <li class="link">
        <a href="/login">logoff</a>
      </li>
      <li class="hamburger">
        <div />
        <div />
        <div />
      </li>
    </ul>
    <div id="user">
      {name_value}
    </div>
  </nav>
{/if}

<style>
  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  section {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  img {
    height: 56px;
    max-width: 75%;
  }

  div.nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    max-width: 960px;
    margin: 0 auto;
  }

  h2 {
    color: rgb(36, 64, 143);
    font-family: "Times New Roman";
    font-variant: small-caps;
    flex-grow: 1;
  }

  .hamburger div {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    border-radius: 2px;
  }

  li.hamburger {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    li.hamburger {
      display: inline;
    }

    li.link {
      display: none;
    }

    h2 {
      font-size: 0.8em;
    }
  }
</style>
