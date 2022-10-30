<script lang="ts">
  let firstName: string = "";
  let lastName: string = "";
  let email: string = "";
  let sumbitted: boolean = false;

  function submitForm(e: Event) {
    e.preventDefault();
    sumbitted = true;
  }
</script>

<div class="container">
  <h1>Log in</h1>
  <form class="form">
    <div class="input-container">
      <input
        type="text"
        name="first-name"
        id="firstname"
        autocomplete="given-name"
        placeholder="First Name"
        bind:value={firstName}
      />
      <label for="firstname">First Name</label>
    </div>
    <div class="input-container">
      <input
        type="text"
        name="last-name"
        id="lastname"
        autocomplete="family-name"
        placeholder="Last Name"
        bind:value={lastName}
      />
      <label for="lastname">Last Name</label>
    </div>
    <div class="input-container span-2">
      <input
        type="email"
        name="email"
        id="email"
        autocomplete="family-name"
        placeholder="Email Address"
        bind:value={email}
      />
      <label for="email">Email Address</label>
    </div>
    <button type="submit" on:click={submitForm}>Log In</button>
  </form>
  {#if sumbitted}
    <div class="answers">
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  {/if}
</div>

<style lang="scss">
  :root {
    --_radius: 0.5rem;
    --_t-speed-fast: 100ms;
    --_t-speed-slow: 300ms;
  }
  h1 {
    text-align: center;
  }
  input {
    border: none;
    border-radius: var(--_radius);
    padding: 0.25em;
  }
  button {
    cursor: pointer;
  }

  // Main Styles
  .container {
    margin-top: 1rem;
  }

  .form {
    margin-top: 1rem;
    display: grid;
    gap: 1.25rem 1rem;
  }
  .input-container {
    display: grid;
    position: relative;

    input {
      --border-size: 0;
      outline: none;
      box-shadow: 0 0 0 0.1em var(--theme-bg),
        0 0 0 calc(var(--border-size) * 0.1em + 0.09em)
          var(--theme-text-main-accent);
      transition: box-shadow var(--_t-speed-slow);

      &::placeholder {
        color: var(--theme-input-placeholder);
        opacity: 0;
      }

      &:where(:focus, :not(:placeholder-shown)) {
        & ~ label {
          translate: 0 -1.9em;
          background-color: var(--theme-bg);
          color: inherit;
          font-size: 0.7rem;
        }
        &::placeholder {
          opacity: 1;
        }
      }
      &:focus {
        --border-size: 1;
      }

      &:focus:invalid:not(:placeholder-shown) {
        background-color: var(--theme-input-bg-invalid);
      }
    }

    label {
      top: 0.35rem;
      left: -0.5ch;
      font-size: 0.9rem;
      position: absolute;
      color: var(--theme-input-placeholder);
      padding-inline: 0.5ch;

      transition: translate var(--_t-speed-fast), color var(--_t-speed-fast),
        background-color var(--_t-speed-fast), font-size var(--_t-speed-fast);
    }
  }

  // Desktop Media Query
  @media (min-width: 650px) {
    .form {
      > .span-2 {
        grid-column: 1 / span 2;
      }

      button {
        grid-column: 1 / 3;
        margin-inline: auto;
        width: 20rem;
      }
    }
  }

  // Prefers Reduced Motion Query
  @media (prefers-reduced-motion: reduce) {
    :root {
      --_t-speed-fast: 0ms;
      --_t-speed-slow: 0ms;
    }
  }
</style>
