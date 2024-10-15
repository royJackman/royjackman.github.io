<template>
  <main class="about">
    <div class="content">
      <h1 class="accent">Welcome to my website</h1>
      <h2>It's been difficult deciding what to write.</h2>
      <p>My initial plan was to put some lorem ipsum here, changing the first letter of every word so in order they say "you've lost the game". Somehow, that didn't seem fulfilling.</p>
      <p> Instead, I hope whoever is reading this, if you appreciate the joy of digital creation, please go outside. Not just because most of us don't do it often enough, but also for the universe of inspiration that lives all around us.</p>
      <p>Try to appreciate it before it's gone.</p>
    </div>
    <img src="../assets/wobblyWallaby.jpeg" alt="Suspect seen illegally feeding wild Wallaby"/>
  </main>
</template>

<style lang="scss">
.about {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
}

.content {
  margin-right: 3rem;
}

h1 {
  font-weight: 700;
}

img {
  max-width: 20vw;
  height: fit-content;
}

p {
  margin-top: 0.5rem;
  text-align: justify;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    margin-top: 0rem;
  }
}
</style>
