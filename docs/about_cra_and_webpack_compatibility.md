Thanks for the detailed output — this confirms that your project was scaffolded with Create React App (CRA), which uses react-scripts. CRA internally pins webpack to version 4.42.0, and your project currently has Webpack 5.99.8 installed, which is incompatible.

⸻

✅ Goal

Fix the error by removing the manually installed incompatible Webpack 5 and allowing react-scripts to install the correct version (4.42.0).

⸻

🧹 Fix the issue step by step

From your project root (uzbek-nasr), do the following in exact order:

⸻

1. Delete node_modules and lock file

rm -rf node_modules package-lock.json


⸻

2. Remove manually added webpack

If you have webpack listed in package.json under dependencies or devDependencies, delete that line.

Example:

"devDependencies": {
  "webpack": "^5.99.8",  ←❌ delete this
  ...
}

Save the file.

⸻

3. Reinstall dependencies

npm install

Let react-scripts pull in the correct version of Webpack (4.42.0).

⸻

4. Start the project again

npm start


⸻

⚠️ DO NOT manually install webpack in a CRA project

Unless you eject from CRA (not recommended unless you know exactly why), you must let react-scripts manage its own Webpack and Babel setup.

⸻

✅ Optional (Only if still broken)

If the issue still persists, you can add a .env file in the project root with:

SKIP_PREFLIGHT_CHECK=true

…but this is a temporary workaround and may cause unexpected errors later. Use this only if you’re stuck and don’t want to eject or rebuild.

⸻

Let me know if you want to fully migrate to a custom Webpack setup or Vite for more flexibility and speed. I can help you convert your CRA app if needed.