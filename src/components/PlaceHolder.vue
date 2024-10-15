<template>
    <div class="card">
        <h1>This is a placeholder!</h1>
        <h3>I have not decided what goes here yet.</h3>
        <h4>Enjoy the hover effect</h4>
     </div>
</template>

<style lang="scss">
.card {
  border: 1px solid gray;
  padding: 2rem;
  border-radius: 8px;
  background-color: black;
  text-align: center;
  transition: 0.3s;
  animation: ease;

  &:hover {
    box-shadow: 5px 5px;
    transform: translate(-5px, -5px);
  }
}

@media (max-width: 1024px) {
  .card {
    margin-top: 2rem;
  }
}
</style>