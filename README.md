**Stratos**

Stratos is made in honor of Stratosphere: Conquest of the Skies. It is not affiliated with the game or Moby Games in any way. 
The gameplay may be similar but the fortresses, artillary, and landscape will be different.

Statos is a pure Javascript and (possibly) WebGL implementation of the basic Stratosphere gameplay. It's designed to run on any device but works best in Chrome.

**Gameplay (desired traits)**

Use your arrow keys to slam your fortress into your enemies. The fortress that survives the attacks wins. You can add defenses and weapons to your fortress as you level up.

You may augment your fortress with engines, spikes, cannons, and walls. Each device takes a certain amount of room on your fortress and when you've run out of room you can no longer add devices.

Destroying or damaging an enemy fortress by running into it or hitting it with your cannons will release pieces of the fortress that you can pick up by flying over. The pieces will gravitate toward the nearest fortress. 

After all enemies are destroyed, the player will have the chance to add sections to their fortress by using pieces gathered from other fortresses. Pieces can also be traded as cash in order to purchase devices.

**TODO**

* Make motion fluid. The fortress should not immediately stop but should slow down until it comes to a halt. It should also not speed up immediately but should begin moving slowly, then increase speed over time. Bigger fortresses are slower unless they've been augmented with engines.

* Terrain - High peaks with low valleys filled with water. Sky. Create walls around map the prevent fortress from exiting arena, but walls don't damage fortresses. Mountains damage fortresses after a few seconds of colliding with them.

* Prototype enemies (AI and structure) and player fortress structure. 

* Collision detection.

* Enemy destruction based on collision.

* Points!

* Adding elements to player's fortress.
