---
title: Write code faster Expert-level Vim; A review
date: "2020-04-17T00:00:00.000Z"
description: A review of the Railsberry talk in 2012 by Ben Orenstein
tags: Review, Vim
---

![sunrise](./frank-mckenna-4V8JxijgZ_c-unsplash.jpg)
Photo by Frank Mckenna on Unsplash

#### Introduction

Recently I've been thinking about Vim a lot, as I've just transitioned from VSCode
to writing in Vim in the terminal. It's a brand new way (for me) of editing
documents compared to any editor I've used in the past, and in the long run
I think it'll pay off.

Also, it's fun to learn something new.

Having learnt most of the basic navigation commands, I'm now reading a lot about
how people increase their efficiency and what are the tips and tricks that take
Vim users to the next level.

This search brought me to a video from 2012 called ["Write Code Faster: Expert-Level
Vim"](https://www.youtube.com/watch?v=SkdrYWhh-8s) by Ben Orenstein. In the video
Ben talks about a lot of Vim tips, a few of which blew my mind 🤯.

Here I'm going to list out a summary of the key talking points of the talk.

#### Don't be scared

Ben said people often come up to him after his talks and say that they simply 
dont have time to spend 3 months learning an editor, and they get turned off
by the learning curve. His response is that
>"Vim is like a programming language for editing text."

Which is a pretty powerful statement if you think about it. If you can learn a
programming language, you can learn Vim.

#### Vimtutor

If you're brand new to Vim, vimtutor is your friend. If you open up your terminal
and type `vimtutor`, Vim will launch in a special mode with a help file loaded
and walk you through the absolute basics of Vim. It'll take you 30 minutes to complete
and will get you good enough to get stuff done.

#### Be obnoxiously intolerant of typing

One of the most important parts of mastering Vim is to hate typing. Don't settle
for doing something with 2 keystrokes when you can use 1.

You need to have the mentality of everytime you do something, thinking "this is
taking too long, I hate doing this."

The example Ben uses is saving a file. To save a file in Vim by default you press
the keys `<Esc><Shift>:w<Enter>`, that's 5 keystrokes. That's way too many keystrokes
for something you're doing hundreds of times a day, so Ben remaped that to `<Ctrl>s`.
2 keystrokes.

Something so little, but it matters a great deal - for speed and for your health.

#### Be intolerant of doing things frequently that take a lot of time

The way Ben does this is by binding a lot of leaders. A leader command is a way
of binding short mappings to longer commands, and Ben has 60-70 of them!

In the video, it's hard to see the screen because of the camera angle, but it's
easy enough to find his [vimrc file on GitHub](https://github.com/r00k/dotfiles/blob/master/vimrc)
if you want to see the complete list.

In Vim, the leader key by default is `\`, but it is commonly re-mapped to `,` or 
`<space>`.

Ben uses a few Ruby specific examples in the video, but looking at the list of
leader commands in his vimrc I can see a few that are a bit more relevent to me.

```
map <Leader>gw :cd %:p:h<cr>:!git add . && git commit -m 'WIP' && git push<cr>
```

This is a mapping for committing all his code and pushing it with the comment
"WIP". You can see all the keystrokes that he would have to push to accomplish this
task, but instead, with this binding, he can press just 3 keystrokes. `,gw` (since
he mapped his leader key to `,`).

One of my favourtie quotes from this video:

> The thing is, it doesn't make you a faster programmer, it's not going to make you
> think faster, but it shortens the distance between thought, and code looking like
> you want it to. It makes that loop tighter and smaller, which makes you go faster
> overall.

#### Re-map your common typos 

Remap `:Q` to `:q`

#### Have a cheat sheet

Vim is huge, and the only way to learn it is a little bit at a time. And you make
that little bit muscle memory, and then you learn a little bit more.

The only way to do this effectively is with a cheat sheet. Ben is always trying
to learn 5 +/- 2 commands by writing them on a little sheet of paper. The process is to
find the useful commands and build them up in memory. If you aren't using the command,
get rid of it; similarly once you remember it, replace it with a new command. And
you're slowly building up more and more commands and committing them to muscle memory.

#### Have a great .vimrc

There's an argument in the vim community that having an empty .vimrc and using 
stock standard vim is the way to go. Ben's argument is yeah, that makes sense if
you're a system administrator and are remote connecting into different machines
all the time and taking your customisations with you everywhere would just be plain
difficult.

But for programmers we're typically only working on one or two computers at a time,
so it's a non-issue if we have our own personal bindings. And finely tuning your
vimrc can save heaps of time as we saw with the couple of examples above with binding
shortcuts to common commands.

#### Know how to read the manual

Vim's help is really comprehensive, and really accessible. Simply type `:h` in 
normal mode and it'll open up for you.

There's a getting started section if you're new, and an "editing effectively" section
which are highly recommended.

#### Don't touch the arrow keys

Stay on the home row. All you have to do is never use them again, learn h, j, k, l
and you'll be used to them in a couple of days.

#### Navigating between files

Use a fuzzy file navigator. Ben recommends (CommandT)[https://github.com/wincent/command-t] in the video, but looking at his .vimrc it looks like he uses [ctrlp](https://github.com/kien/ctrlp.vim) now. I use (fzf)[https://github.com/junegunn/fzf] based on
some advice I found on Reddit, I think it does the same thing but apparently
fzf is faster.

#### Moving around within a file

A Vim anti-pattern is holding j to move down, or holding k to move up.

Using line numbers to jump around is much more efficient. I.e. to move to line 14
you can type `14G`, or if you have relative numbers you can type `14j`

Another option is to search using the `/` key. I.e. to find the word "Vim" you can
type `/Vim` and the cursor will move to the next instance of the word "Vim".

#### Know your Motions

From within Vim type `:h cursor-motions`, to bring up the manual on motions. Add
a couple to your cheat sheet.

#### Macros

Macros literally record your keystrokes, then allows you to instantly replay all
those keystrokes on command. Ben goes through an example in the video using some
Ruby code, it's a bit hard to see the screen to follow along but I think it's still
worth watching to see his thought process as he builds out the macro. You'll find
this section at minut 19:20 in the video.

One of the cool things about macros is that it is _literally_ just recording
keystrokes and you can tell this by pasting from the register that you saved the
macro into. Ben does this in the video by pasting from the `q` register where he
saved his macro by typing `"qp`. Using the output you can update the macro or
move it to your .vimrc and load it into a register when you load Vim or save it
as a leader command.

#### VimScript

The best way to learn it is ["Learn Vimscript the Hard Way"](https://learnvimscriptthehardway.stevelosh.com/)
by Steve Losh.

Again, the examples Ben gives are Ruby specific - but he's able to write functions
that can run tests in Vimscript which I think could be really powerfull. Especially
when binding to leader commands.

Being able to script your editor is not something that I have tried yet but I can
see how it could be really powerful.

#### Closing recommendations

Ben mentions [VimCasts.org](http://vimcasts.org/) which I also haven't used before,
but looks like it would be a good reference for some more reading up on Vim.

#### Conclusion

I really enjoyed the video and would highly recommend having a look if anything
in this artcle was new to you. There is also another 20 minutes of Q&A after his
talk where he covers some good questions!

Happy Coding!



