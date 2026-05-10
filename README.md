# Chai Tailwind [Live](https://chai-tail-vjs.netlify.app/)

Its a light weight, inline style generation engine by using html classes, support classes which is prefixed by `chai-` like `chai-bg-red` or `chai-text-yelow` etc.

## Quick Start

No need heavy installation instruction, just a plug and play setup with cdn.

1. Copy CDN from landing page [Landing Page](https://chai-tail-vjs.netlify.app/)

```html
<script src="https://chai-tail-vjs.netlify.app/lib/chaiTailwind.min.js"></script>
```

2. Emmbed this cdn to any HTML page, ensure load script after all DOM elements but before main script.

```html
<body style="background-color: black; color: white">
  <h1>ChaiTail Demonstration</h1>
  <script src="https://chai-tail-vjs.netlify.app/lib/chaiTailwind.min.js"></script>
</body>
```

3. now can you use supported utilities classes in you html file.

```html
<h1 class="chai-text-black chai-p-12 chai-m-12 chai-bg-white">
  ChaiTail Demonstration
</h1>
```

## Supported Utils

There are only few utils classes support provided which are:

1. Layout
   - chai-flex
   - chai-flex-col
   - chai-items-center
   - chai-justify-center
2. Dynamic Properties
   - chai-p-{val}
   - chai-m-{val}
   - chai-rounded-{val}
   - chai-font-{val}
3. Apearance
   - chai-bg-{color}
   - chai-text-{color}
   - chai-block
   - chai-hidden

## Local Setup

1. Clone Repo

```bash
git clone <>
```

2. Install Dependencies

```bash
# with pnpm
pnpm install

# with npm
npm install
```

3. Start development environment by using `pnpm dev` script.

```json
 "scripts": {
    "dev:lib": "vite build --config vite.lib.config.js --watch",
    "dev": "vite",
    "build:lib": "vite build --config vite.lib.config.js",
    "build:site": "vite build --config vite.config.js",
    "build": "pnpm run build:lib && pnpm run build:site"
}
```

> Note: Make sure library file build in `/public/lib/ChaiTailwind.min.js` if not exist then build it first using `pnpm dev:lib` (can use `npm`) script.
