# README

myStash Frontend!

React version 16.14.0

Apart from coding, I love crafting. Sewing, crochet, and knitting, to be more specific. 

While it is very easy to keep track of which patterns you want to buy that day (do it the way people have for around 100 years, write it down on a piece of paper at the pattern books table, or put it in the "Notes" app of your phone) it is rather difficult to know which patterns you already own, especially if you own dozens of them like me. There have been many times I have found myself shopping for patterns and wondering if I already have one I am looking at. Taking pictures of each one and scrolling through my phone every time I think "I may already have this" is not only tedious, it takes up valuable space on the phone and if scrolling too quickly, it makes a pattern easy to miss as some look very similar. I thought if I had an app where I could search exactly through what I already had by just typing in the pattern number I would know very quickly... so I decided to create just that!

myStash is an app to track:

* Which sewing patterns you own
* What fabric, yarn, thread, needles, and different notions you own

Zippers/buttons/etc. are meant to be tracked under "Notions". Adding a "Supplies" model seemed redundant as they would be nearly identical. 

At first I meant to include thread in the "Notions" model, but looking at how much thread the average crafter owns I decided it needed its own model as well. That is how I found out "Thread" is a reserved word on Rails. I am highly assuming that "String" is one as well, so I named the model "Floss". The end user sees the correct terms reflected in the frontend. 

A user is currently able to:

* Search for patterns by pattern number and/or brand and add to their stash.
* Delete a pattern from their stash.
* Add a pattern by brand or number if it doesn't already exist in the database. Pattern instances will be usable by multiple users.
  * The edit fuction for a pattern can currently be done by any registered user. While this has good intentions (one user may own the pattern but have a very raggedy envelope and thefore not want to upload a pic, yet still want to add the pattern to the DB/stash), it has the potential to be misused. Without having different user levels or a vetting system, everyone is on the honor system.

Todo:
* Users will be able to upload pictures of the front and back of a pattern. 
* Full CRUD is only currently available for the pattern model. Other models will soon have this functionality.

Specific to one user only:
* Add fabric and upload a pic to create a "swatch".
* Add yarn and upload a pic to create a "swatch". As the yarn model also allows for (optional) lot number, this is user-specific.
  * Lot numbers are strings in order to accomodate dashes and possible alphanumeric lot numbers.
* Add notions they already own (needles, scissors, etc). Because a model with only thread, zippers, buttons, etc. would be too similar, I decided to have the user incorporate those items under the "Notions" model as well. There will be a field to specify color and size for that reason.

### "Why can I add a pattern to my stash multiple times? That's a bug!!"

No, it isn't. This is a feature. If you have bought patterns long enough, you will at some point in your life have bought duplicates by mistake (the whole idea that inspired this app). You may have bought duplicates on purpose to own different sizes. Your stash can have multiple copies of the same pattern, but the database itself can only accept a pattern with the same number once. Unfortunately, if you happen to delete one of these duplicates from your stash, it will delete all instances of it because it deletes by ID. 