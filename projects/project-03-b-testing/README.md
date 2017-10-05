[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The **Testable** Death Square

The rebels are on board our death square and are heading for our data banks. A platoon of storm troopers has been sent to stop them, but we need to know the second they go offline so we can switch to a backup. Let's do some test-driven development.

![](resources/passTest.jpg)

### Instructions:

1. Open up our data banks. Go into `turret-api` and run `seed.js` and `server.js` — don't forget to install those npm modules.

2. Go into `imperial-starfleet` and start up our front end.

3. Run `ng test` inside `imperial-starfleet`. Nice, we're passing two tests. But there's one failing test on InfoWindow. Let's make it pass.

4. That failing test is complaining that there is `No provider for Http`. What `Module` could we import to `info-window.component.spec.ts`? Hint: It's towards the top of `app.module.ts`. Don't forget to add it to an `imports` array below the `declarations` array in `TestBed.configureTestingModule`. Save the file and check the `ng test` browser output.

5. We're still failing. We need to import one more thing. It's called `RouterTestingModule` and it comes from the `@angular/router/testing` package. Don't forget to add it to the `imports` array, too. Save the fil and check the `ng test` browser output one more time.

6. Create a new test below the 'should be created' one and call it 'should have a findTurret function to get data from the data banks'. Fail this test the old fashioned way by making it test `expect(true).toEqual(false);`.

7. Now, let's actually test something. We're going to make a lot of changes to our Death Square Dashboard™ and we need to make sure that `findTurret` is still a working function. Replace our `expect(true)...` expectation with `expect(typeof(component.findTurret)).toBe('function');`.

8. Check your tests in Chrome one more time. Once they're all passing, we know one more thing is safe from the rebels.

### Resources

- [Angular testing guide](https://angular.io/guide/testing).
