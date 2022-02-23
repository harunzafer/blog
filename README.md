# Static Blog with SvelteKit

## Development

Clone the repository and install node modules.

```bash
git clone git@github.com:hrzafer/blog.git
cd blog
npm install
```

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

This project uses `@sveltejs/adapter-static@next` to generate static html files under `build` folder. You can preview the production build with `npm run preview`.


## Deployment

Run the following command to push all static files under `build` to [hrzafer.github.io](https://github.com/hrzafer/hrzafer.github.io) repo's `master` branch which can be accessed by [hrzafer.github.io](https://hrzafer.github.io/).

## Blogging

To add a post add a `my-new-awesome-post.md` file under `src/routes/blog/` which will be accessible at `<URL>/blog/my-new-awesome-post`