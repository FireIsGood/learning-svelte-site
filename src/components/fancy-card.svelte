<script lang="ts">
  let showText: boolean = false;
  const quotes = [
    "Did you know? For every three fingers you have, your life expectancy drops by 15%",
    "I am within your walls",
    "The devil works fast but wikipedia editors work faster.",
    "I wish I could reach out and",
    "Cards games are a little silly, wouldn't you agree? I'm no game.",
  ];

  let select = 0;
  const switchQuotes = setInterval(changeQuote, 10000);

  interface Card {
    title: String;
    body: String;
    hue: Number;
  }

  const cards: Card[] = [
    {
      title: "Amogus",
      body: "Sussy Baka",
      hue: 80,
    },
    {
      title: "How are you today?",
      body: "Have you been drinking water? Many symptoms of fatigue can be traced back to dehydration. Stay healthy!",
      hue: 120,
    },
    {
      title: "short boye",
      body: "so short and concise!",
      hue: 240,
    },
    {
      title: "Secret Message woooo",
      body: "I am the body text Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dignissimos laudantium magnam dolorem ut laboriosam excepturi facilis saepe cum.",
      hue: 200,
    },
  ];

  function changeQuote() {
    select = (select + 1) % quotes.length;
  }

  function typewriter(node: Node, { speed = 1 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid)
      throw new Error(
        "This transition only works on elements with a single text node"
      );

    const text = node.innerText;
    const duration = text?.length * speed;

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
</script>

<section>
  <div class="card-wrapper">
    <div class="card" style="--hue: 320">
      <h2>Thoughts</h2>
      <p>
        I enjoy eating pancakes, but they are sometimes ovecooked. This is an
        issue and I dislike it.
      </p>
    </div>
    <div class="card quotes" style="--hue: 0">
      {#key select}
        <h2>Quote of the Day</h2>
        <p in:typewriter={{ speed: 15 }}>
          {quotes[select]}
        </p>
      {/key}
    </div>
    {#each cards as card}
      <div class="card" style={`--hue: ${card.hue}`}>
        <h2>{card.title}</h2>
        <p>{card.body}</p>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    min-height: 100vh;
    background-color: #212121;

    background-image: radial-gradient(
      rgba(#ecbbfb, $alpha: 0.2) 5%,
      transparent 5%
    );
    background-size: 3vmin 3vmin;
    background-position: 0% 0%;

    > * + * {
      margin-top: 1rem;
    }
  }

  label {
    display: flex;
    align-items: center;
  }

  @keyframes waitingBar {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  // Main styles

  .card-wrapper {
    display: grid;
    max-width: 60rem;
    margin-inline: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;

    .card {
      --hue: 224;
      z-index: 0;
      position: relative;
      min-height: 10rem;
      color: white;
      border: 1px solid;
      padding: 1rem;

      background-color: #212121;
      background-image: radial-gradient(
        rgba(#bbdefb, $alpha: 0.35) 5%,
        transparent 5%
      );
      background-size: 5vmin 5vmin;
      background-position: 0% 0%;
      transition: 400ms ease;

      &:before {
        opacity: 0.5;
        z-index: -1;
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          145deg,
          transparent 0% 25%,
          hsl(calc(var(--hue)), 100%, 58%) 60%,
          hsl(calc(var(--hue) + 20), 100%, 42%) 70%,
          hsl(calc(var(--hue) + 36), 100%, 42%) 80%,
          hsl(calc(var(--hue) + 52), 100%, 37%) 90%,
          hsl(calc(var(--hue) + 91), 100%, 51%) 100%
        );
        background-position: 0% 0%;
        background-size: 300% 300%;
        transition: background-position 400ms ease;
      }

      &:hover,
      [aria-selected="true"] {
        background-position: -2.5vmin -2.5vmin;

        &:before {
          background-position: 100% 100%;
        }
      }

      &.quotes h2 {
        position: relative;
        z-index: 1;

        &:before,
        &:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          z-index: -1;
        }

        &:before {
          width: 100%;
          background-color: #1a237e;
        }
        &:after {
          width: 0%;
          background-color: #3949ab;
          animation: 10000ms waitingBar linear forwards;
        }
      }

      > * + * {
        margin-top: 0.5rem;
      }
    }
  }
</style>
