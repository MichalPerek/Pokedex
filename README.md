# 1. Task description:

Create an interactive catalogue of Pokemon using ‘Pokémon API’ (https://pokeapi.co). Data should be displayed on the screen in the form of a list, you should be able to load more data as you wish and interact with existing elements.

## UI requirements:

1. List with initial 20 Pokémons,
2. Display properties for each Pokemon: ‘name’, `type` and ‘sprite’,
3. On click - display additional data: 'weight' and 'height' for selected Pokemon.

# 2. Task approach:

    Simple one - page app, with static navigation bar containing two buttons (scroll to top, and scroll to bottom), and an additional button below list of currenlty       loaded Pokemon. Clicking on that button results in additional 20 pokemons data added to the screen. Basic CSS styling & transitions.

# 3. Tech used:

    -React,
    -javascript,
    -html,css


# 4. Web app screen shots:

## Preview:

https://glittering-piroshki-45c80d.netlify.app/

![image](https://user-images.githubusercontent.com/100487510/159385184-0044f915-808c-4bd9-8c7b-44749a652075.png)

![image](https://user-images.githubusercontent.com/100487510/159385212-cfc97b75-1981-4c00-bd3c-90a4fb8fae75.png)

![image](https://user-images.githubusercontent.com/100487510/159385239-c4caf39a-b0c4-442f-9d7d-8e1508dc2fab.png)

# 5. To - do's and plans on development:

1. Add filtering feautre (for example filter by sprite),
2. Add night theme, and button on Navbar to change theme,
3. Add fancy animations when displaying more info on Pokemon card,
4. Add background color to Pokemon card that is corresponding with this pokemon's sprite (eg. for sprite == water, background is blue, etc).
5. Rewrite with TypeScript,
6. Add Redux state management,
7. Rewrite code for data fetching with axios,

# 6. Known bugs:

1. Sometimes pokemon load out of order, first is ID 2, then ID 1, ID 3, etc. Refreshing page fixes that.
2. Page is not fully responsive on mobile devices - navbar works fine, pokemon card too, but the image and text content is clipped. 

# 7. Valuable resources I took inspiration from:

    Tutorials on how to work with PokeApi:

    1. https://www.youtube.com/watch?v=HaEB0vdxpdg&t=114s
    2. https://www.youtube.com/watch?v=CZBWT7MQYr0&t=632s
    3. https://www.youtube.com/watch?v=o3ZUc7zH8BE&t=710s
