# GameAnalytics Tech chalenge 😉
In this exercise, I used plain javascript and no libraries or frameworks. 

> I have used the Model-View-ViewModel (MVVM) is a structural design pattern that separates objects into three distinct groups. This way, my Controller looks much cleaner and easy to read. 

For example instead of using  
 
 ```javascript
document.getElementById("sort-by-vote-control").addEventListener('click', () => { 
    //Here goes the code
}));
 ```
I use 
 ```javascript
ViewModel.onClickSortByVote(() => {  
    //Here goes the code 
})
 ```
 -  I have separated the business logic into different files under the modules folder. 

- For the unit test, I used Jest as is easy to install in under 5 min and easy to test and mock. For example, I mock the fetch very quickly to isolate the HTTP side effects and only test my methods. 

- I used different files for HTML, JAVASCRIPT and CSS for separation of concerns. 

- I handled negative scenarios, like if there is no image from the API to show a placeholder one 

- For accessibility reasons I allow the user to submit the form by using Enter or clicking the search Icon

- I keep the code in every file under than 100 lines to avoid spaghetti code. 

>I injected the service to my App to illustrate that I understand the principle of Inversion of control and the benefits of creating and injecting my objects from outside instead of creating them inside my class. As in this way, I can Mock them in unit test and inject another one. Or I could use the App with a different service elsewhere. 

- I used constants everywhere to avoid magic strings 

## In a live scenario and If I had more time:
- In a real case scenario, I would try to avoid saving things to local storage as my javascript code could be compromised, or some chrome extension could be malicious, or the user can manipulate it very easily. Instead, I would try to leverage the backend session (httpOnly Cookie, Redis e.t.c). 

- If I had more time, I would try to make the App responsive and truncate the text with an ellipsis when it is not fitting.

- I would connect my code with code quality tools like sonarqube, eslint, husky e.t.c 

- I would put the API key to a .env file on my root folder.

- spend more time on creating acceptance tests and E2E tests instend of just unit tests


### Many thanks for your time 🤗 


## Install dependancies
 ```sh
$ npm install
```


## Run the project

```sh
$ npm run start
```

After you run it please visit http://127.0.0.1:8080


## Run the unit tests
```sh
$ npm run test
```





