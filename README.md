# The Hero's Journey (Of Scaling Back-Ends)

Ever wondered how to build and scale the back-end of a web application to handle massive amounts of traffic? So did I, until, through trial and error, I managed to take a legacy codebase with 170 million rows of data, and increase its capacity from 100 users per second to 1300 users per second. It was an epic journey, one full of traps around every turn, moments of "I am a God!" followed by "Why me God?" and countless queries, Docker instances, EC2 containers and stress tests.

The work that I did is not well-represented in this repo, because it was almost entirely a back-end project. However, I thought I would build out this readme to represent the work that I did and explain how one might follow in my footsteps, and perhaps avoid some of the pitfalls I faced in scaling a back end.
