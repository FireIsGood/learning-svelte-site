<script lang="ts">
  import { search, hideIncorrect } from "@components/event-store";
  export let callsign: Props;

  type Props = {
    text: string;
    key: string;
    image: string;
  };

  let matches: boolean;
  let exactMatch: boolean;

  $: {
    const s = $search;
    if (s) {
      matches = s.slice(0, s.length) === callsign.key.slice(0, s.length);
    }
    exactMatch = s === callsign.key ? true : false;
  }
</script>

<div
  class="container"
  class:matches
  class:exactMatch
  class:fails={!matches &&
    $search.length > 0 &&
    $search !== "?" &&
    $hideIncorrect}
>
  <p>{callsign.text}</p>
  <div class="slot">
    <slot />
  </div>
  {#if exactMatch}
    <strong>Woah that's me!</strong>
  {:else if $search && $search !== "?"}
    <p>Search is {$search}</p>
  {:else}
    <p>There is no search term</p>
  {/if}
  {#if matches}
    <p>Search currently <span class="green">matches</span></p>
  {:else}
    <p>Search currently <span class="red">fails</span></p>
  {/if}
</div>

<style>
  .container {
    margin-top: 1rem;
    background-color: var(--theme-card);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }
  .slot {
    display: flex;
  }

  .matches {
    background-color: var(--theme-card-alt);
  }
  .exactMatch {
    outline: 4px solid var(--theme-card-alt-outline);
    order: -1;
  }

  .fails {
    display: none;
  }

  .green {
    color: green;
    text-decoration: underline;
  }
  .red {
    color: red;
  }
</style>
