<script>
  export let segment;
  // import { name } from "../stores";

  // let name_value;

  // const unsubscribe = name.subscribe((value) => {
  //   name_value = value;
  // });
</script>

<nav>
  <div class="nav-container">
    <div>
      <a href="/">
        <img
          src="southern-union-state-community-college.svg"
          alt="SUSCC logo"
        />

      </a>
    </div>
    <ul>
      <li class="link">
        <a class:current={segment === undefined} href=".">home</a>
      </li>
      <li class="link">
        <a class:current={segment === "about"} href="about">about</a>
      </li>
      <li class="hamburger">
        <div />
        <div />
        <div />
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

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

  /* [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  } */

  li.link a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  img {
    height: 56px;
    max-width: 75%;
  }

  div.nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    max-width: 960px;
    margin: 0 auto;
  }

  .current {
    color: red;
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
  }
</style>
