# HeroesApp :superhero: 

<p align="center">
  <a href="https://angular.dev/" target="blank"><img src="https://repository-images.githubusercontent.com/24195339/d4194dc2-d880-43f7-960c-ea30e05c6531" width="200" alt="Angular Logo" /></a>
  <a href="https://ionicframework.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LogoIonic.png/640px-LogoIonic.png" width="200" alt="Ionic Logo" /></a>
  <br/>
  <br/>
  <br/>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/640px-Marvel_Logo.svg.png" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/640px-Marvel_Logo.svg.png" width="200" alt="Marvel logo" /></a>
</p>


HeroesApp is an application that interacts with the Marvel API. It displays a list of superheroes and you can view details of each one of them. The content will be displayed based on the default language of the device (or browser).

## ⚠️**Information for reviewers**⚠️
Search for 'OBS' in the root project folder. I've added several comments regarding the approach I've taken to solve specific situations.

## Tech-stack :wrench:

- Angular version: 17.3.6
- Angular CLI version: 17.3.6
- Ionic version: 8.0.0
- Capacitor version: 6.0.0
- ngx-translate version: 15.0.0
- Node version: 20.10.0

## Local Setup :computer:

Before you can run this project on your local machine, you need to install the necessary dependencies. Follow these steps:

1. **Clone the repository**

    Use the following command to clone this repository to your local machine:

    ```bash
    git clone https://github.com/arrighidante/HeroesApp.git
2. **Navigate to the project directory**

    Change your current working directory to the project's directory:
     ```bash
     cd HeroesApp
     
3. **Install dependencies**

    Use npm (node package manager) to install all the project dependencies. Run the following command:
    ```bash
    npm install

4. **MARVEL API Keys**

    Make sure to use your own API Keys. You can get them from <a href="https://developer.marvel.com/documentation/getting_started" target="_blank">Marvel's official documentation</a>
    - Replace your API Keys in the environment.ts file

## Development server to run on your machine

5. **Run the application**

    Now that you have installed all the necessary dependencies, you can start the application. Use the following command:
    ```bash
    ionic s
  This will start a development server and open the application in your default web browser. Navigate to http://localhost:8100/. The application will automatically reload if you change any of the source files.
