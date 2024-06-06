# PROJECT 4 README 

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

Azul spots is a unified site for snorkeling and scuba-diving reservations. It implements the idea of owners who have specific spots and users who purchase the trip and review the experience. The owners can have a rating and be “Super Guides”. Users can have fields that let the owners know the amount of scuba trips the user has and their experience level. 

<br>

## MVP Waterfall

Users can see and reserve dive spots
- Users can log into their account
  - sers can update their name, contact info, see all reservations, etc on an account page.
  - Users can log out of their account
- Users can see reservations
  - Users can cancel reservations
  - Users can message owners of reservations
  - Users can review past reservations

Owners can see, edit, delete, and create dive spots
- Owners have a hub of their listings
  - Owner has a admin page where full CRUD can be performed on their listings
  - Owner can update the main contact and about information for their account
- Owners can see reservations
  - Owners can see all users reserved for a spot
  - Owners can message a single user or the group
  - Reservations shown in calendar / chronological format

<br>

### Goals & How-to

Beautiful UI & UX
  - Thoughtfully crafted interface that follows design principles and language such as material design or AirBnB design.
  - Have the app user tested on atleast 10 people and get their feedback for revision
  - A “wow” factor such as dark-mode toggling, personalization, or other unique component.

Performant
- A rating in Google Lighthouse score
- Use caching to avoid expensive API queries
- Use appropriate rendering methods for each page

Bug-free
- Spend an hour stress testing the application under load and trying to break the site
- Proper use of Typescript
- Unit test each function

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Inspiration


#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### Data
- Guides (has many spots)
  - spots: Array<object>

- Spots (belongs to owners)
  - title: string
  - description: text
  - location: [number, number]
  - tags: Array<string>
  - type: "snorkel" | "scuba" | "both"
  - images: Array<string>
  - cost: number
  - restrictions:

- reservations (has many explorers)(belongs to spot)

- explorers (has many reservations)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.