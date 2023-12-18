
# Movieland 

React + Redux + RTK + Bootstrap application that fetches movies from [https://www.themoviedb.org/](https://www.themoviedb.org/)

Created with [Create React App](https://github.com/facebook/create-react-app).

## Code Review :mag:
 

 1. The project lacks consistent formatting with `Prettier`, and there are indentation issues and missing semicolons, which is not ideal for readability and maintainability
 2. This project lists all dependencies under 'dependencies' and does not use `devDependencies`
 3. The `search endpoint` has an error and results in a 404
 4. It would be better to store keys and the base URL in a `.env` file, and consider creating URLs in a more straightforward manner
 5. Using `splice` without handling the `-1` index when removing from the star and watchLater slices may cause a bug
 6. The project contains a typo in the `watchLateSlice`, where it should be named `removeAllWatchLater`
 7. To prevent unnecessary rerendering, It's better to access only the necessary portion of the state using `useSelector`
 9. Checking if a movie is starred or in watchLater is not efficient; it can use the `Array.prototype.some()` method. Additionally, we can create a custom `hook` for these tasks for better readibility
 10. We can fetch the trailer and movie list with `hooks` to simplify our components
 11. `Clear search button` does not work
 12. `search and discover movies` in `movieSlice` can be separated to enhance readability
 13. When the user starts searching, a request is sent to the server for each character entered. This can be optimized using a `useDebounce` hook
 14. we can toggle `clsx` package to toggle classnames in `Movie` component
 15. there are some `inline styles` for youtubePlayer that can be optimized
 16. `App.js` can be simplified by removing unused codes
 17. It's more maintainable to keep tests and styles close to related components

  

## My Decisions :pencil:️

**Refactoring**

In addition to fixing ***all*** the reported code review points, I

- added `TypeScript ` to project, for better maintainability and catching errors
- restructured and used ***features folders instead of data folder***, which is compatible with Redux Toolkit
- improved the ***tests*** of the project

**Features added**

-   Grid display added to movie list
-   Trailer displayed in Modal using createPortal
-   Infinite scroll added using ***intersection observer hook*** to display movies

## Areas for Improvement :hourglass:

- Adding more tests to improve coverage
- Making the app more accessible by adding A11y tags
- Optimizing styles and separate them for each component
- Creating better UI considering responsiveness

## Available Scripts :rocket:

In the project directory, you can run:

### `npm install`

Install all dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.'

