# Introduction 
Higher Lower card game implemented with a .NET 6 Core API backend and a React JS frontend.

# Getting Started
To run the project, you need to run the backend and frontend separately. Run the backend by navigating to the backend solution located at `\HigherLower\backend\HigherLowerBackend\HigherLowerBackend` and using `dotnet run`. To view the API definitions and the data schemas, head to `https://localhost:7087/swagger/index.html`.

The frontend can then be ran by opening the frontend project located at `\HigherLower\frontend` and running `npm start`. This will open up a webpage with the react app running in it. 

If the project is working correctly, you should see two cards displayed on the screen. One will be face up and one face down with a question mark on the back. To play the game, simply guess whether the card to be revealed will be a higher or lower rank than the current card being displayed using the two buttons at the bottom of your screen. 
