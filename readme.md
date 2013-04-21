# Minuet

Minuet is a player for SoundCloud sounds of all kinds.

## What does Minuet do?
- _Use pure JavaScript and CSS_ As someone new to JavaScript, I decided not to use any libraries or frameworks, not even jQuery, to get the best understanding of what I'm really doing and why.
- Create a listening queue with any SoundCloud sounds
	- The queue will not store sounds after they've been listened to
	- The queue will allow users to add, remove, and re-order sounds
	- UI and continuous playback will work on mobile devices
		- Use mobile-first development
		- Ignore legacy browsers
- [Be appealing and intuitive](http://en.memory-alpha.org/wiki/Minuet)

## What could Minuet be doing better right now?
- The Player model should really be removed entirely
- The Queue model should split into a Queue and a Track model
- The SpecRunner file is misleading: I wrote the "should" of Jasmine tests for how I first wanted the app to behave, but they're all empty, so the "pass" is meaningless

## What might Minuet do in the future?
- Allow signin to SoundCloud accounts
- Show the last 5 sounds played
- Allow users to like sounds in their queues or recently played list
- Add tests, both for backend and views

## How do I run Minuet?
- Open [Minuet](https://dl.dropboxusercontent.com/u/20193004/minuet/minuet.html) in your browser. That was easy!

## How do I deploy Minuet?
- It's a set of static files (HTML, JavaScript, CSS), so you can host a copy pretty much anywhere. I used Dropbox, because it made getting started really fast and easy.


## How is Minuet licensed?
Minuet is under the MIT license.

