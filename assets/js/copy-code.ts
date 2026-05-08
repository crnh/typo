class CopyCodeButton extends HTMLElement {
  codeBlock: HTMLElement | null = null;
  button: HTMLButtonElement | null = null;

  connectedCallback() {
    this.codeBlock = this.previousElementSibling?.querySelector("code") as HTMLElement;
    this.button = this.querySelector("button") as HTMLButtonElement;

    this.button?.addEventListener("click", () => {
      const textToCopy = this.codeBlock?.textContent || this.codeBlock?.innerText;

      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          this.button.textContent = "copied";

          setTimeout(() => { this.button.textContent = "copy"; }, 500);
        }).catch((err) => { console.error("Failed to copy text", err); });
      } else {
        console.error("No code block attached");
      }
    });
  }
}

customElements.define("copy-code-button", CopyCodeButton);
