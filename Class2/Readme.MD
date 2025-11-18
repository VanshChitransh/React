# Full Git, Node, npm, npx, Dependencies & JavaScript Fundamentals — Detailed Guide

This document is a complete, structured explanation covering:

- Git internals
- `.git` folder structure (objects, refs, logs, commits, blobs, trees, etc.)
- Remotes & origin
- npm vs npx
- Dependency trees
- Semantic versioning (major/minor/patch)
- Caret (^) and tilde (~) in dependencies
- Browserslist
- ES modules & ECMAScript history

Everything is included in a clean, readable format.

---

## 📂 1. How Git Stores Data Internally

Git does not store your files as normal files inside `.git`.  
Instead, it stores everything in the form of **objects**.

### Git objects:

- **blob** → file content
- **tree** → directory structure
- **commit** → snapshot reference + metadata
- **tag** → references to commits

### The main types:

| Type   | Meaning                                    |
|--------|--------------------------------------------|
| Blob   | Stores file content only (no filename)     |
| Tree   | Stores directory structure and file names  |
| Commit | Points to a top-level tree + commit metadata |

---

### 📌 1.1 Where Git stores objects

Inside:

```
.git/objects/
```

You will see directories like:

```
06 1e 46 58 7c 98 9c b1 ee info pack
```

These do **not** represent your project folders.  
They represent the **first two characters of SHA-1 object hashes**.

#### Example:

Object hash:

```
1e55e728a77e875edafde3a4ccd95abc3f8d1241
```

Stored in:

```
.git/objects/1e/55e728a77e875edafde3a4ccd95abc3f8d1241
```

Git splits the hash:

- **First 2 chars** → folder
- **Next 38 chars** → file

---

### 📌 1.2 What are blobs?

A **blob** contains only the file contents, not the filename.

#### Example:

If `index.html` has:

```html
<h1>Hello</h1>
```

Git blob stores ONLY:

```html
<h1>Hello</h1>
```

- No filename.
- No folder.
- Just content.

---

### 📌 1.3 What are tree objects?

**Trees** are essentially folders containing:

- filenames
- file permissions
- blob references
- other tree references

#### Example:

```
100644 blob a3c1f2... index.html
040000 tree 7cd4e3... Class1
```

Trees assemble blobs into a directory structure.

---

### 📌 1.4 What are commit objects?

**Commits** reference:

- a tree
- parent commit(s)
- author
- commit message

#### Example:

```
tree 9b3f6a...
parent eef03e...
author Vansh...
message: "Day 1"
```

---

### 📌 1.5 The complete Git structure

```
commit → tree → blobs
             → more trees
```

This is how Git stores your entire project.

---

## 📂 2. .git Folder Breakdown

### ✔ `.git/objects/`

Contains all Git objects (blobs, trees, commits).

### ✔ `.git/refs/`

Stores pointers to branches and remotes:

```
refs/heads/master
refs/remotes/origin/master
```

### ✔ `.git/logs/`

Stores every update history of refs.

### ✔ `.git/config`

Stores repo configuration:

- remote URLs
- branch settings
- core settings

### ✔ `.git/index`

The staging area (binary file).

### ✔ `.git/hooks`

Contains hook samples (pre-commit, pre-push).  
Hooks run custom scripts when certain Git actions happen.

### ✔ `.git/description`

Used in bare repositories (safe to ignore).

---

## 📂 3. Why Node Modules Have package.json But Not package-lock.json

Every dependency inside `node_modules` must have:

- its own metadata
- version
- scripts
- internal dependencies

So they all have `package.json`.

But they do **NOT** include `package-lock.json` because:

✔ Only **YOUR** project should freeze exact versions  
(node_modules packages must remain flexible)

✔ Lock files do **NOT** belong in reusable libraries

✔ npm removes lock files when publishing a package

---

## 📂 4. Semantic Versioning (SemVer)

Versions follow:

```
MAJOR.MINOR.PATCH
```

⭐ **PATCH** → bug fixes  
`1.2.3` → `1.2.4`

⭐ **MINOR** → new features (backward compatible)  
`1.2.3` → `1.3.0`

⭐ **MAJOR** → breaking changes  
`1.2.3` → `2.0.0`

---

## 📂 5. Meaning of ^, ~, and version ranges in dependencies

### ✔ `^` (caret) — allow MINOR + PATCH updates

`^1.2.3` = `1.x.x` allowed

### ✔ `~` (tilde) — allow PATCH updates

`~1.2.3` = `1.2.x` allowed

### ✔ `1.2.3 ... 1.4.0`

A version range between two versions.

---

## 📂 6. Dependency Tree Explained

Your project depends on packages,  
those packages depend on other packages, and  
those packages depend on others.

This forms a **dependency tree**:

```
project
├── react
│   ├── scheduler
│   └── loose-envify
│       └── js-tokens
└── axios
    ├── follow-redirects
    └── form-data
        ├── combined-stream
        └── mime-types
            └── mime-db
```

npm resolves this entire structure.

---

## 📂 7. npm vs npx (Important Difference)

### ⭐ npm = installer

Used to:

```bash
npm install axios
npm uninstall lodash
npm install -g nodemon
```

### ⭐ npx = executor

Used to run packages without installing them globally:

```bash
npx create-react-app myapp
npx vite
npx tailwindcss init
```

### 🔥 Where does npx store temporary packages?

In a temporary directory, **NOT** in `node_modules`.

Example temp locations:

- `/var/folders/.../npm-XXXX/` (Mac)
- `C:\Users\<User>\AppData\Local\Temp\npm-XXXX\` (Windows)

These files are removed after running the command.

---

## 📂 8. Git Remotes & Origin

✔ A **remote** = link to another repository (GitHub, GitLab)  
✔ **origin** = default name for the remote you cloned from

You can rename it:

```bash
git remote rename origin banana
```

You can change its URL:

```bash
git remote set-url origin NEW_URL
```

---

## 📂 9. ES Modules (type: "module")

In `package.json`:

```json
"type": "module"
```

This tells Node.js:

✔ Use ES modules (`import`/`export`)  
❌ Do not use CommonJS (`require`/`module.exports`)

### Behavior:

- `.js` = ES module
- `.cjs` = CommonJS
- `.mjs` = ES module

---

## 📂 10. What is ECMAScript (ES)?

**ES** = ECMAScript, the official name for JavaScript standard.

### Key milestones:

| Version      | Year | Notes                                           |
|--------------|------|-------------------------------------------------|
| ES1          | 1997 | First version                                   |
| ES3          | 1999 | Stabilized JS                                   |
| ES5          | 2009 | Strict mode, JSON                               |
| ES6/ES2015   | 2015 | let, const, arrow functions, classes, modules   |
| ES2016+      | Yearly | async/await, optional chaining, etc.          |

---

## 📂 11. Browserslist — Make Code Compatible with Browsers

**Browserslist** defines which browsers your app should support.

Example inside `package.json`:

```json
"browserslist": [
  "last 2 versions",
  "> 1%",
  "not dead"
]
```

### Tools that use it:

- Babel
- Autoprefixer
- Vite
- Webpack
- React scripts

### "last 2 versions" means:

Support last 2 versions of:

- Chrome
- Firefox
- Safari
- Edge
- Opera

---

## 📂 12. Common Browserslist Rules

```
last 2 versions
> 1%
not dead
not ie <= 11
cover 99.5%
defaults
```

Test your config:

```bash
npx browserslist
```

---

## 🎯 Final Summary

This README includes:

- Git internals
- How `.git` stores blobs/trees/commits
- What is origin / remote
- npm vs npx
- npx temp storage
- Semantic Versioning explained
- caret `^` and tilde `~`
- dependency trees
- why node_modules don't have package-lock.json
- ES modules (`type: "module"`)
- What ECMAScript is
- Browserslist meaning

This is a complete documentation of everything covered in the guide.