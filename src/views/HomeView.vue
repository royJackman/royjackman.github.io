<template>
  <main class="home">
     <div class="card">
        <h1>I have not decided what goes here yet.</h1>
        <h4>Enjoy the hover effect</h4>
     </div>
  </main>
</template>

<style lang="scss" scoped>
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
    transform: translateY(-5px);
  }
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1024px) {
  .card {
    margin-top: 2rem;
  }
}
</style>
