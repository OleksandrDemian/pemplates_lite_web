# Pemplates Lite

Avoid boilerplate code during project setup.

This project allows you to search for project templates on github and easily setup them for development.

Currently it is hosted on <a href="https://thirsty-leakey-8f0295.netlify.app/">netlify</a>

Check also <a href="https://github.com/OleksandrDemian/pemplates">desktop app</a>, it is easier to use
and it offers some extra features like templates and projects management.

### How it works

- Go to <a href="https://thirsty-leakey-8f0295.netlify.app/">website</a>
- Choose what you want to search (templates, biolerplate, starter-kit)
- Enter keywords (ex: react electron)
- Press enter
- Choose the template from the list (list is ordered by stars count)
- Choose between <a href="https://git-scm.com/docs/git-clone">git clone</a> or <a href="https://www.npmjs.com/package/degit">degit</a>
- By clicking on one of those the command will be copied tou your clipboard. Open terminal and execute the copied command in order to create a project.
- Start developing

### Some notes

- You can click on repo's name to open it on github
- It's better to use degit as it is faster and automatically removes git config

# Dev
Thi sproject is made with Svelte 3 (it still has it's icon).

To run dev server:
```
npm run dev
```

To build:
```
npm run build
``` 