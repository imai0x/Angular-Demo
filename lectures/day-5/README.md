# Exercises With Code Bases

## Adding a Feature

Look around [the comments app](comments/). This is just a basic app that displays a list of comments. You may need to run `npm install` for it to work.

- Alter your comments so that each comment has an author (represented by a string).
- Add a feature that allows you to add more comments.
    - This should all be within the same component.
    - Visually, it should consist of two text inputs (one for author, one for comment) and a submit button.
- Add a feature that allows you to delete comments.
- Add a feature that allows you to edit comments.
    - When you click on a comment, the text should be replaced by two text inputs (one for author, one for comment).

## Changing a Feature

Look again at what you did in [the comments app](comments/). It's all in one component, which isn't very modular. 

1. First, abstract out all the comments logic into a service called `comment-service.ts`. Create a `commment/` directory, and run `ng g service comment`. Look at your `balance.service.ts` from the Vending Machine Lab as reference.
    - Your comment service should have the following methods: `updateSubject()`, `getComments()`, `setComments()`, `addComment()`, `deleteComment()`, `editComment()`, and `onCommentUpdated()`. 
    - Your comment service should have the following variables: `comments` (array) and `subject` (Observable).
    - Make sure your code is working as before, but using the Comment Service. 

2. Separate the list of comments and the new comments form into separate components. Use the Comment Service / Observable in the comment service to communicate between the 2 components.

3. At the moment, there's no styling. Add some by incorporating [Bootstrap](http://getbootstrap.com/), [Materialize](http://materializecss.com/), or [Skeleton](http://getskeleton.com/). Feel free to write your own CSS as an alternative to using one of these CSS frameworks.

## Fixing Bugs

Someone has hacked up the [Tour Of Heroes](https://angular.io/tutorial/toh-pt5) demo from Google. Go into [heroes](heroes/) and run `npm install` and `npm start` to start the app. Try to fix all of the errors so that the app works like [this](https://den-materials.github.io/tour-of-heroes-dist). Try not to look at the code listed in the previous link unless you're absolutely stumped.

## Choose Your Own Adventure

Choose something to do during this time. Here are some suggestions:

- Extend your [comments app](comments/) even further by creating sign-up/login functionality:
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
