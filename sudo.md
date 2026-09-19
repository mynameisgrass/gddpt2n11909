# sudo.md — System-Level Commands Required

> **Instructions:** Run these commands when you return. They require `sudo` privileges.

- [ ] **No system-level commands are currently required.**
  - All dependencies are installed at the user level via `npm`.
  - Node.js and npm are assumed to be pre-installed on this CachyOS system.
  - If `node` or `npm` is not found, run:
    ```bash
    sudo pacman -S nodejs npm
    ```
    **Why:** Node.js runtime and npm package manager are required to scaffold and run the Next.js application.
