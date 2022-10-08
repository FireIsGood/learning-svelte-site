<script lang="ts">
  let allfakePosts: Array<Post> = [];

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      allfakePosts = json;
    });

  let numPosts = 1;
  let fakePosts: Array<Post> = [];
  $: fakePosts = allfakePosts.slice(0, numPosts);

  function addPost() {
    if (numPosts === 100) return;
    numPosts += 1;
  }
  function removePost() {
    if (numPosts === 0) return;
    numPosts -= 1;
  }

  let showWow = false;

  function toggleWow() {
    showWow = !showWow;
  }
</script>

<div class="container">
  <button on:click={toggleWow}>Click to show Wow </button>

  {#if showWow}
    <h1>Wow</h1>
  {/if}

  <p>
    and now... {numPosts ? numPosts : "no"} post{numPosts !== 1 ? "s" : ""}!
  </p>
  <div>
    <button on:click={removePost}>Remove One</button>
    <button on:click={addPost}>Add One</button>
  </div>
  <ul>
    {#each fakePosts as post}
      <li class="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  li {
    list-style: none;
  }

  /* Main Styles */

  .container > * + * {
    margin-top: 1rem;
  }

  .post {
    padding: 0.5rem;
    background-color: var(--theme-card);
    border-radius: 0.5rem;

    & > * + * {
      margin-top: 1rem;
    }

    & + .post {
      margin-top: 1rem;
    }
  }
</style>
