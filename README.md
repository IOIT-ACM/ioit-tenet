# IOIT TENET web

## Repository Structure

- The code components are structured in a modular way. We have a `/modules` directory that contain code components for each module _(ie. Home page, search page, etc)_
- The common code components like _Agenda button, navbar_ are stored in the `/components/common` directiry

```
project/
│
├── public/                  # Static files (images, fonts, etc.)
│   ├── images/
│   └── ...
└── src/                     # Source files
    ├── components/          # Shared/reusable components
    │   ├── common/          # Common UI components (buttons, inputs, etc.)
    │   ├── faq/             # FAQs for each page
    │   ├── ui/              # Common shadcn UI components
    │   └── shell.tsx        # Wrapper for page layouts
    ├── hooks/               # Custom hooks
    ├── lib/                 # Utility functions and libraries
    ├── modules/
    │   ├── user/
    │   │   ├── components/
    │   │   │   ├── component1.tsx
    │   │   │   └── component2.tsx
    │   │   └── index.ts/
    │   ├── product/
    │   │   ├── components/
    │   │   │   ├── component1.tsx
    │   │   │   └── component2.tsx
    │   │   └── index.ts/
    │   └── ...
    ├── app/                 # Next.js App router
    │   ├── api/             # API routes
    │   ├── (site)/          # Home and search page
    │   ├── (seo)/           # About, help, terms, privacy pages
    │   ├── (details)/       # User and room listing details
    │   ├── (profile)/       # User profile, their listings
    │   └── page.tsx         # entrypoint
    ├── styles/              # Global styles
    ├── types/               # TypeScript types
    .
```

## Developer Tools suggestions:

- Install [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  - This extension is a collection of super helpful snippets for common use cases among react developers. This reduces your keystrokes to only 4-5 instead of having to type out the entire component each time.
  - Just type `rfce` or `rafce`
- Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - Integrates ESLint into VS Code.

## List of UI libraries

**Note: If you add a new UI component or change the existing UI component, please do it in a seperate commit.**

- [Schacn/UI](https://ui.shadcn.com/)
- [Aceternity UI](https://ui.aceternity.com/)
