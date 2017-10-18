# Exercises With Code Bases

<!--WDI4 1:35 introing to devs, 1:41 turning over to devs for independent work-->

## Adding a Feature

Look around [the comments app](https://github.com/den-materials/angular-comments). This is just a basic app that displays a list of comments. You may need to run `npm install` for it to work.

- Alter it so that each comment has an author (represented by a string).
- Add a feature that allows you to add more comments.
    - This should all be within the same component.
    - Visually, it should consist of two text inputs (one for author, one for comment) and a submit button.
- Add a feature that allows you to delete comments.
- Add a feature that allows you to edit comments.
    - When you click on a comment, the text should be replaced by two text inputs (one for author, one for comment).


<!--WDI4 2:31 taking a break -->
<!--WDI4 2:42 coming back, few minutes to explain, then devs on their own at 2:46, let devs run with it till 4-->

## Changing a Feature

Look again at what you did in [the comments app](https://github.com/den-materials/angular-comments). It's all in one component, which isn't very modular. Put the list of comments into one component and the new comments form into another component. Use Observables to communicate between the two.

At the moment, there's no styling. Add some by incorporating [Bootstrap](http://getbootstrap.com/), [Materialize](http://materializecss.com/), or [Skeleton](http://getskeleton.com/). Feel free to write your own CSS as an alternative to using one of these CSS frameworks.

## Fixing Bugs

Someone has hacked up the [Tour Of Heroes](https://angular.io/tutorial/toh-pt5) demo from Google. Go into [heroes](heroes/) and run `npm install` and `npm start` to start the app. Try to fix all of the errors so that the app works like [this](https://den-materials.github.io/tour-of-heroes-dist). Try not to look at the code listed in the previous link unless you're absolutely stumped.

## Choose Your Own Adventure

Choose something to do during this time. Here are some suggestions:

- Extend your [comments app](https://github.com/den-materials/angular-comments) even further by creating sign-up/login functionality:
        - Use routing to display a main page that prompts the user with links to two pages (login/sign up).
        - On the sign-up page, users can create a profile with a username, full name, password, and email.
            - The username and email must be unique. No two users can have the same username or email address.
        - On the login page, users can log in with either their email or username and password. The user must already exist to utilize this page.
            - Once logged in, the user is taken to the main comments app like they were before.
            - Alter this app so that, when adding new comments, there is no `author` text input field. Instead, the logged-in user's full name is used.
- Create a new app using one of [these free APIs that don't require authentication](https://shkspr.mobi/blog/2016/05/easy-apis-without-authentication/). There are more links [here](https://github.com/toddmotto/public-apis), but some require authentication.
- Deploy your own back-end API and use it in an app.
- Use the [JSON server](https://github.com/typicode/json-server) as a dummy API.
- See if you can create a game like Tic-Tac-Toe or Hangman.
