---
title: Deploying Gatsby to Github.io
date: "2020-03-24T08:02:00"
description: This is a tutorial for how to deploy a React Gatsby application to github.io
---

I just created this blog using Gatsby and deployed it to github. If you want,
you can see the source [here](https://github.com/Matthew-Burfield/matthew-burfield.github.io).
The deployment however wasn't very straight forward, especially when you want to
deploy to a GitHub pages subdomain at github.io. I.e. `username.github.io`.

This blog post is a reference for how you can deploy your Gatsby app to `username.github.io`.

## The docs are wrong.

My first attempt was to follow the [docs](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/).
The docs tell you to first intall a package called `gh-pages`, and then add a
new deploy script to your `package.json` file. The problem with doing this is that
it creates a new gh-pages branch and deploys there, and if you want to deploy to
`username.github.io`, your built app needs to be on the master branch.


### Install the `gh-pages` package

First, install the gh-pages package, you can use either npm or yarn. Go to the
root level of your project directory, and on the command line type:
npm:
```
npm install gh-pages --save-dev
```
yarn:
```
yarn add gh-pages --dev
```

### Add a deploy script

In your package.json file, add the following script.

```json
{
	"scripts": {
		"deploy": "gatsby build && gh-pages -d public -b master"
	}
}
```

This is where the gatsby docs stop, but there are a couple more steps required
to cleanly get your app deployed.

#### Create a new branch for your source code

From inside your project directory, on the command line, type:
```
git checkout -b master-source
git push --set-upstream origin master-source
```

This is the branch that is going to hold all your source code. From this branch,
we can run our deploy script, and push the built version of our app to the master
branch.
Using npm:
```
npm run deploy
```
Using yarn:
```
yarn deploy
```

