<script lang="ts">
  const possibleSins: Array<string> = [
    "been on a date ๐",
    "been in a relationship ๐ฅฐ",
    "kissed a mps (member of the preferred sex) ๐",
    "made out in public ๐",
    "played a game involved stripping ๐ฉฒ",
    "masturbated ๐",
    "sent or received underwear pics ๐",
    "sent nudes ๐ซ",
    "received nudes โ",
    "sexted ๐ฒ",
    "facetime sex ๐คณ",
    "kissed 3 or more people in one night. ๐จโ๐ฉโ๐ฆ",
    "FwB ๐ฉ๐ผโ๐คโ๐จ๐ฝ",
    "been in love ๐",
    "had a dating app ๐ฅ",
    "paid for a premium version of a dating app ๐ธ",
    "long distance relationship ๐ซ",
    "asked for a strangerโs contact info #๏ธโฃ",
    "been asked for your contact info by a stranger ๐ป",
    "gotten back with/hooked up with an ex โ",
    "slid into someoneโs DMs ๐ณ",
    "watched porn ๐งโฌ๏ธ",
    "paid for any porn ๐ค",
    "watched porn with mps ๐ฟ",
    "talked to 5 or more people at once 5๏ธโฃ",
    "posted a thirst trap ๐",
    "said โi love youโ ๐",
    "been to a party ๐",
    "thrown a party ๐ฅณ",
    "drank ๐ฅ",
    "been drunk ๐ต",
    "blacked or yakked ๐ฅด",
    "played a drinking game ๐ฅค",
    "faked sobriety ๐คฅ",
    "flirted with a stranger to get a free drink ๐ป",
    "taken alcohol from your parents ๐ฅ",
    "smoked weed ๐",
    "done edibles ๐ช",
    "hit a bong โ๏ธ",
    "nicotine (vaped) ๐จ",
    "smoked a cigarette ๐ฌ",
    "cocaine or a drug stronger ๐",
    "had a fake ๐",
    "had a fake ID confiscated ๐ฎโโ๏ธ",
    "used a fake to buy alcohol/drugs ๐ฐ",
    "used a fake to get into a bar/club ๐บ",
    "had the police called on you ๐",
    "gotten in trouble with school or law ๐",
    "showered with mps ๐ฟ",
    "given/received a hickey ๐",
    "had/given blue balls ๐ต",
    "someone else made you orgasm ๐คฏ",
    "cheated/been cheated on/been cheated with ๐คฎ",
    "bought plan b ๐ผ๐ผ",
    "bought birth control ๐",
    "given head ๐ง?",
    "received head ๐",
    "used a sex toy ๐งธ",
    "spent the night with mps ๐ค",
    "been walked in on while engaging in a sexual act ๐ณ",
    "sexiled a roommate ๐๐ผ",
    "had sex ๐",
    "had sex 3 or more times in one night. ๐",
    "STI/STD test ๐ฆ?",
    "had car sex ๐",
    "had sex in public ๐ข",
    "used blindfold/handcuffs in bed ๐คญ",
    "joined the mile high club ๐ซ",
    "โ",
    "3some 3๏ธโฃ",
    "orgy! ๐ข",
    "body count > 5 ๐",
    "sex tape. ๐ฅ",
    "anal ๐",
    "period sex ๐ฉธ",
    "bought a pregnancy test ๐",
    "been preggo/ gotten someone preggo ๐คฐ",
    "streaked ๐",
    "skinny dipped ๐",
    "seen a stripper ๐",
    "run from the police ๐ฎ",
    "been questioned by/handcuffed by police ๐จ",
    "committed vandalism ๐จ",
    "driven under the influence ๐",
    "texted while driving ๐ฌ",
    "gotten a tattoo ๐๏ธ",
    "pierced something other than your ears ๐",
    "stolen something ๐ฒ",
    "crashed a car ๐",
    "blocked someone on social media ๐๐ฝ",
    "gotten kicked out of a party ๐ก",
    "been at a party that got raided ๐",
    "snuck out ๐ฐ",
    "had corona! ๐ท",
    "had a crush on a teacher ๐ฉโ๐ซ",
    "stalked someoneโs snapchat location ๐",
    "gotten with 2+ people in the same friend group ๐๐ผ",
    "whole snap best friends list has been love interests ๐",
    "gotten with someone 3+ years older than you ๐ต",
    "gotten with someone 3+ years younger than you ๐ถ",
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
