<script lang="ts">
  const possibleSins: Array<string> = [
    "been on a date 💕",
    "been in a relationship 🥰",
    "kissed a mps (member of the preferred sex) 😘",
    "made out in public 😐",
    "played a game involved stripping 🩲",
    "masturbated 😈",
    "sent or received underwear pics 👙",
    "sent nudes 🚫",
    "received nudes ❌",
    "sexted 📲",
    "facetime sex 🤳",
    "kissed 3 or more people in one night. 👨‍👩‍👦",
    "FwB 👩🏼‍🤝‍👨🏽",
    "been in love 💖",
    "had a dating app 🔥",
    "paid for a premium version of a dating app 💸",
    "long distance relationship 🛫",
    "asked for a stranger’s contact info #️⃣",
    "been asked for your contact info by a stranger 👻",
    "gotten back with/hooked up with an ex ❎",
    "slid into someone’s DMs 📳",
    "watched porn 🟧⬛️",
    "paid for any porn 🤑",
    "watched porn with mps 🍿",
    "talked to 5 or more people at once 5️⃣",
    "posted a thirst trap 😜",
    "said “i love you” 😍",
    "been to a party 🎉",
    "thrown a party 🥳",
    "drank 🥂",
    "been drunk 😵",
    "blacked or yakked 🥴",
    "played a drinking game 🥤",
    "faked sobriety 🤥",
    "flirted with a stranger to get a free drink 🍻",
    "taken alcohol from your parents 🥃",
    "smoked weed 🍃",
    "done edibles 🍪",
    "hit a bong ⚗️",
    "nicotine (vaped) 💨",
    "smoked a cigarette 🚬",
    "cocaine or a drug stronger 💉",
    "had a fake 🆔",
    "had a fake ID confiscated 👮‍♂️",
    "used a fake to buy alcohol/drugs 💰",
    "used a fake to get into a bar/club 🕺",
    "had the police called on you 🚔",
    "gotten in trouble with school or law 🙁",
    "showered with mps 🚿",
    "given/received a hickey 💋",
    "had/given blue balls 🔵",
    "someone else made you orgasm 🤯",
    "cheated/been cheated on/been cheated with 🤮",
    "bought plan b 👼🏼",
    "bought birth control 💊",
    "given head 🧠",
    "received head 👄",
    "used a sex toy 🧸",
    "spent the night with mps 💤",
    "been walked in on while engaging in a sexual act 😳",
    "sexiled a roommate 👋🏼",
    "had sex 🍆",
    "had sex 3 or more times in one night. 🏘",
    "STI/STD test 🦠",
    "had car sex 🚘",
    "had sex in public 📢",
    "used blindfold/handcuffs in bed 🤭",
    "joined the mile high club 🛫",
    "❓",
    "3some 3️⃣",
    "orgy! 🔢",
    "body count > 5 📈",
    "sex tape. 🎥",
    "anal 🍑",
    "period sex 🩸",
    "bought a pregnancy test 📄",
    "been preggo/ gotten someone preggo 🤰",
    "streaked 👀",
    "skinny dipped 🌊",
    "seen a stripper 👅",
    "run from the police 👮",
    "been questioned by/handcuffed by police 🚨",
    "committed vandalism 🎨",
    "driven under the influence 🚙",
    "texted while driving 💬",
    "gotten a tattoo 🖋️",
    "pierced something other than your ears 👃",
    "stolen something 💲",
    "crashed a car 🏎",
    "blocked someone on social media 👎🏽",
    "gotten kicked out of a party 😡",
    "been at a party that got raided 🚒",
    "snuck out 😰",
    "had corona! 😷",
    "had a crush on a teacher 👩‍🏫",
    "stalked someone’s snapchat location 📍",
    "gotten with 2+ people in the same friend group 👏🏼",
    "whole snap best friends list has been love interests 😎",
    "gotten with someone 3+ years older than you 👵",
    "gotten with someone 3+ years younger than you 👶",
  ];

  type Result = {
    floor: number;
    ceil: number;
    rating: string;
    remark: string;
  };

  const possibleResults: Array<Result> = [
    {
      floor: 0,
      ceil: 2,
      rating: "Angel",
      remark:
        "You're literally not real or 12. Did you just skip all the checkboxes to see what this would say? If this is actually you, you're probably ace or something idk. ",
    },
    {
      floor: 3,
      ceil: 6,
      rating: "Innocent",
      remark:
        "You're quite well behaved, I'd guess you haven't been in trouble at school before. You're more pure than most people pretend to be, and you should feel free to be proud of this if you so wish. There's not really much to say about you from just this number.",
    },
    {
      floor: 7,
      ceil: 33,
      rating: "Average Person",
      remark:
        "I would guess this is where the average person stands. You're probably fine as far as anyone else can see. I don't have much to say since this is one of the more likely scores. Anyways, how is your day?",
    },
    {
      floor: 34,
      ceil: 55,
      rating: "Rebelious",
      remark:
        "You've done quite a number of things, I would say I'm impressed if I were near your level. Honestly I have no idea how you're even doing all these things. I might not want to be your friend, although I'm not sure since I'm not aware of people's scores",
    },
    {
      floor: 56,
      ceil: 91,
      rating: "Impure",
      remark:
        "You are quite impure! Holy hell that's a lot of things. Are you sure you're still alive? Either way, please excuse me as I will be exiting immedietly to avoid getting stabbed.",
    },
    {
      floor: 92,
      ceil: 100,
      rating: "Embodiment of Pure Sin",
      remark:
        "You are pure evil. Well, at least by society's standards. I would probably not hang out with you since you likely have more than one felony. I willingly admit I am more than a little scared of you. Please do not break my kneecaps or stab either of my kidneys.",
    },
  ];

  let yourSins: Array<number> = [];

  let finishedInput: boolean = false;

  function calculateScore() {
    finishedInput = true;
  }
  function resetScore() {
    yourSins = [];
    finishedInput = false;
  }
</script>

<div class="container">
  {#if !finishedInput}
    <div class="sin-container">
      {#each possibleSins as sin, index}
        <div class="input-item">
          <input
            type="checkbox"
            name={sin}
            id={index.toString()}
            bind:group={yourSins}
            value={index}
          />
          <label for={index.toString()}>{index + 1}: {sin}</label>
        </div>
      {/each}
      <button class="calculate-button" on:click={calculateScore}>
        Calculate Score
      </button>
    </div>
  {:else}
    <div class="rating-container">
      {#each possibleResults as result}
        {#if result.floor <= yourSins.length && yourSins.length <= result.ceil}
          <p>Your Innocence:</p>
          <h2>{result.rating} ({100 - yourSins.length})</h2>
          <p>{result.remark}</p>
        {/if}
      {/each}
      <button class="reset-button" on:click={resetScore}>
        Calculate Score
      </button>
    </div>
  {/if}
</div>

<style lang="scss">
  // General Styles

  label,
  button[type="checkbox"] {
    cursor: pointer;
  }

  // Main styles

  .container {
    & > * + * {
      margin-top: 0.5rem;
    }
  }

  .sin-container {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
    margin-inline: auto;

    > .input-item {
      position: relative;
      display: flex;

      > label {
        width: 100%;
      }
    }
  }
  .calculate-button,
  .reset-button {
    height: 3rem;
    width: 10rem;
    margin-inline: auto;
    margin-top: 2rem;
    margin-bottom: 10rem;
  }

  .rating-container {
    text-align: center;
    max-width: 35ch;
    margin-inline: auto;

    & > * + *:not(.reset-button) {
      margin-top: 0.5rem;
    }
  }
</style>
