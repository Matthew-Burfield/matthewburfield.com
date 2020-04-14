---
title: A journey into vim
date: "2020-04-13T00:00:00.000Z"
description: A story of my journey into vim
tags: Vim
---

![sunrise](./artem-sapegin-8c6eS43iq1o-unsplash.jpg)
Photo by Artem Sapegin on Unsplash

## What is Vim?

Vim is a text editor that's been around for nearly 30 years! It works differently
to normal text editors because it was designed before the invention of the mouse!
It doesn't have a graphical interface with menus and icons and instead has a text
interface.

Can you imagine trying to edit a Microsoft Word document without a mouse? That would
be a nightmare! If you wanted to go back up a couple of paragraphs to edit something
you would be holding down the arrow keys on your keyboard to move the cursor to where
you wanted to edit, and then after making whatever changed you wanted, you would have
to hold down the arrow keys again to get back to where you were originally editing.
What if you wanted to copy and paste? Holding shift and pressing arrow keys to 
highlight text?? Ughh, that makes my brain hurt just thinking about it!

Vim wouldn't have lasted very long if it worked that way - and luckily Vim doesn't
work like Microsoft Word does. Vim is called a Modal editor, in that it
has different modes. You'll spend most of your time (especially if you're programming)
in Normal mode, where you can't type text, but instead all the letters of the keyboard
make up a bunch of shortcuts for navigating around the page. I don't know how many
shortcuts there are, but there are a lot! Masters of Vim that have been using it
for decades frequently say they still discover new shortcuts!

Of course you can still type text! (It wouldn't be much of an editor if you couldn't)
and you do this by entering Insert mode.

The fact that you can do all of your editing without reaching for the mouse, and that
the navigation system in Vim is so powerful makes it have a bit of a learning curve,
but at the same time has the potential for being able to edit documents at the speed
of thought! 

## Why did I start using Vim?

Think about that for a second; Editing documents at the speed of thought.
If I'm programming in an editor like VS Code or Sublime, and I want to change the
contents of a function, I reach for the mouse, select all of the contents of the
function by holding down the left mouse button and dragging, then hit the delete
key and start typing my new function contents. Masters of Vim are able to do all
of that with a quick keyboard shortcut.

It's this potential for being so efficient in editing documents that excites me.

And that's just scratching the surface. With Vim's highly customizable and extensible
design, you are able to map any complex command you can think of to a keyboard
shortcut of your choosing. Allowing you to build up your own database of commands
overtime.

There are also macros that let you record keystrokes and replay them, plugins that
let Vim integrate with linters and Git and color schemes and pretty much everything
you need to be super efficient at editing documents in whatever programming
language you're using.

## Getting started and first steps

The often recommended way to start in Vim is to open your terminal and type
`vimtutor`. `vimtutor` is an interactive tutorial that will take you through
all the necessary functions of Vim in order to edit documents. And yes, it even
tells you [how to exit Vim](https://stackoverflow.blog/2017/05/23/stack-overflow-helping-one-million-developers-exit-vim/). Completing the tutorial will take you about 20
minutes and then you're good to go! It will teach you about Normal mode, Insert mode
and Commandline mode, and how to navigate around a file with `h`, `j`, `k`, `l` 
and some of the different ways to go in and out of insert mode to make edits.
Basically everything you need to be able to start editing documents.

After finishing `vimtutor`, I also played [Vim Adventures](https://vim-adventures.com)
which I really enjoyed. It was fun to be able to gameify learning Vim. Vim Adventures
doesn't really teach you anything that you haven't already learnt through `vimtutor`
but it does give you plenty more practice and using navigation keys.

## Full time Vim

With my newfound knowledge of editing documents in Vim, I set the goal that I would
use Vim whenever I worked on side projects, but that I couldn't possibly use it
at work until I built up some proficiency. This was a bad idea - I never really
got used to using Vim this way and using Vim fell by the wayside again in favour
of more familiar VS Code.

Every time I went back to Vim I felt I was re-learning everything from scratch.
I always felt slow moving around files, I had to look up how to do the most basic
things. Vim was too hard and unfamiliar - I soon moved back to the familiarity of
VS Code.

A year later the urge to learn Vim surfaced again and I was in the same boat,
do I bite the bullet and just go all in? Sacrificing efficiency? Could I even
do that? One of my biggest gripes was that I couldn't figure out how to work with
multiple files at the same time. In a programming project there are hundreds, if not
thousands of files! `vimtutor` taught me one way to change files, I knew I could
type `:find [path_name]` to go into Vim's command-line. But how the heck was I
supposed to remember the file paths of every file? I knew there must've been a
solution to work with multiple files, I just didn't know it.

The solution that worked for me, and that let me go full time Vim, was to use a
plugin for VS Code called [VSCodeVim](https://github.com/VSCodeVim/Vim). I'd recommend
using this plugin for anyone wanting to learn Vim. You kind of get the best of
both worlds and eased into it especially when you're starting. You still have your
file navigation in VS Code which means you can concentrate on just learning the
controls for navigating and editing the individual document.

Yes, there are efficient ways for working with multiple files in Vim, but using the
VS Code plugin gives you a taste of the power of Vim without the bottleneck of
also learning Vim's plugin system and editing Vim's configuration file.

1.5 million Vim users also use this plugin, including awesome programmers I follow
like [Kent C. Dodds](https://kentcdodds.com/), and if it's good enough for him,
then it's good enough for me!

Using Vim inside VS Code allowed me to go all in.

I do think it's important to just bite the bullet and go all in though. Yes, you'll
be slow at first, but just try to survive the first week and you're efficiency is
going to be much much better. Make sure you have your favourite search engine handy
and just look up commands for how to do stuff. If it takes you more than 3 or 4
keystrokes to get to where you want to edit, then there's probably a more efficient
way of doing it.

## Conclusion

It's been about 3 months since I switched to using Vim full time. I wouldn't say
I'm super efficient using it yet but I am starting to feel more comfortable using it.
It's definitely a marathon and not a sprint and I'm banking on being able to build
up efficiency in Vim over years of practice.

In my next post I'll talk about some of the techniques I've been using to start
building up some efficiency that'll hopefully take us from straight up beginner
to intermediate.

Happy Coding!
