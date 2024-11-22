# To manually publish gh-pages

Manually Publish If the automated process continues to fail, deploy manually:

- Build your project

```bash
npm run build
```

- Navigate to ```build`` folder

```bash
cd build
```

- Initialize a new git repository, commit and push changes to ```gh-pages``` branch

```bash
git init
git remote add origin git@github.com:samrullo/uzbek-nasr.git
git branch -M gh-pages
git add .
git commit -m "uzbek nasr gh-pages branch"
git push -f origin gh-pages
```

Above will start github Action to build and release github pages


