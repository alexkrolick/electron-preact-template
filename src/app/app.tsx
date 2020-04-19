import { h } from "preact";
import { css } from "emotion";

function App() {
  return (
    <h1
      class={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${"purple"};
        }
      `}
    >
      preact app
    </h1>
  );
}

export default App;
