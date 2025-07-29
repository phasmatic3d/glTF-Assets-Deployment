# Sample Asset Website

This Repository is a curated collection of glTF models that illustrate one or more features or capabilities of glTF. This [Sample Assets website](https://github.com/KhronosGroup/glTF-Sample-Assets) demonstrates where we are on that path to convergence and highlights areas that could still use improvement. 

## Getting Started

This webpage was built using [Next.js](https://nextjs.org).

To start developing, first clone this repo. This will download the code and data from the repository and submodules. The LFS Git extension is necessary in order to handle large files.

Then install the node packages using 
```bash 
npm install
``` 

Beware that `postinstall` command from `npm install` will fail on Windows due to missing `cp` command. Just copy all `*.wasm` files from `glTF-Sample-Renderer/dist/libs/*.wasm` to `glTF-Sample-Renderer/dist/` folder.

and run the development server using 
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing by modifying the pages in the `app/` folder or their components in `components/` folder. The page auto-updates as you edit files.

To build the website use
```bash
npm run build
```

## Deploy

Push commits to the main branch and automatic actions on the repo will build and deploy the webpage.



