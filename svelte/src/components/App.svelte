<script lang="ts">
  import ColorPicker from './ColorPicker.svelte';
  import Nested from './Nested.svelte';
  import PackageInfo from './PackageInfo.svelte';
  import PointerMoveSection from './PointerMoveSection.svelte';
  import Things from './Things.svelte';

  let name = 'Svelte';
  let string = `this string contains some <strong>HTML!!!</strong>`;
  let count = 0;

  $: doubled = count * 2;
  $: console.log(`the count id ${count}`);
  $: if (count >= 10) {
    alert(`count is dangerously high!`);
    count = 0;
  }

  function increment() {
    count += 1;
  }

  // Updating arrays and objects.
  let numbers: number[] = [1, 2, 3, 4];
  $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }

  // Spread props
  const pkg = {
    name: 'svelte',
    speed: 'blazing',
    version: 4,
    website: 'https://svelte.dev'
  };
</script>

<h1>Hello {name.toUpperCase()}!</h1>
<p>This is a paragraph.</p>

<h3>Nested components</h3>
<Nested answer={42} />

<h3>HTML tags</h3>
<p>{@html string}</p>

<section>
  <h3>Assignments, Declarations, Statements, If blocks</h3>
  <button on:click={increment}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
  </button>
  <p>{count} doubled is {doubled}</p>
  {#if count > 8}
    <p>{count} is greater than 8</p>
  {:else if count < 3}
    <p>{count} is less than 3</p>
  {:else}
    <p>{count} is between 3 ans 8</p>
  {/if}
</section>

<section>
  <h3>Updating arrays and objects</h3>
  <button on:click={addNumber}> Add a number </button>
  <p>{numbers.join(' + ')} = {sum}</p>
</section>

<h3>Spread props</h3>
<PackageInfo {...pkg} />

<ColorPicker />

<section>
  <h3>Things</h3>
  <Things />
</section>

<PointerMoveSection />

<style>
  p {
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    /* font-size: 2em; */
  }
</style>
