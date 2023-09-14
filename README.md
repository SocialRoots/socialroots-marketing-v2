# Socialroots Marketing Site(V2)



## Instructions

1. Make sure you have `MySQL` server running on local machine.

2. Make sure you have [Ghost CLI](https://ghost.org/docs/ghost-cli/) installed on your local  machine. Run `ghost -v` to make sure CLI version is or above `1.24.0`

3. Create a database `srghost` with MYSQL

4. Replace MYSQL credentials and database name in `config.development.json`

5. Replace `paths.contentPath` in `config.development.json` file with `content` folder path(see sample config file)

6. run `npm install` or `yarn install` from root directory

7. Run `ghost run` to start local development server


8. Now you should be able to access ghost site on [localhost:2367](http://localhost:2367) in your browser. You can acess the admin panel on [localhost:2367/ghost](http://localhost:2367/ghost)
   
9.  Go to admin panel and create a new account. Make sure to save your password as this will be used for all future sessions(until you decide to nuke your database 😀)


# How to import Socialroots.io data on local machine

1. Go to [https://www.socialroots.io/ghost/#/settings/labs](https://www.socialroots.io/ghost/#/settings/labs). To access this, you must have ghost credentials. connect with team if you don't have already.
2. Click on `Export your content` and save the JSON file on your machine.

3. Now go to your local machine app admin [[localhost:2367/ghost](http://localhost:2367/ghost/#/settings/labs)](http://localhost:2367/ghost/#/settings/labs) and click on import content to import the file.

4. In your local machine settings, open Design and open 'Themes'. Toggle the 'Advanced' menu at the top of the page to reveal Firma v1.0.1 and Activate this.