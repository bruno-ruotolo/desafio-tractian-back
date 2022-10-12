<br />
<div align="center">
    <h3 align="center">Naittrac</h3>
    <p> Track and Manage your Assets Quickly, Easily and Online </p>
</div>

## Technologies
These are the main tools, frameworks and languages that were used in this project:<br>

<div>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white" />
  <img style='margin: 5px;' src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img style='margin: 5px;' src="https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white" />
  <img style='margin: 5px;' src="https://img.shields.io/badge/-Highcharts-%6699A1?style=for-the-badge&logoColor=white" />
  <img style='margin: 5px;' src="https://img.shields.io/badge/Joi-FFFF00?style=for-the-badge&logo=joi&logoColor=058a5e"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</div>

## How to Run

You can use this API in two ways, cloning this repository or testing using the deploy running on Heroku

To clone the project, run the following command:

```git
git clone https://https://github.com/bruno-ruotolo/desafio-tractian-back.git
```

Then, navigate to the project folder and run the following command:

```git
npm i
```

Finally, start the server:

```git
npm run dev
```

You can now access the API's endpoints locally.

If you want to use the deployed API access: https://desafio-tractian-ruotolo.herokuapp.com/

# API Reference

Here you can check the endpoints related to the project, as well as their respective characteristics. Have Fun 😄

## How to User

You can use the default login simulating an internal registration made by the company: 

```
e-mail: tractian@naittrac.com
password: 123tractian
```

## Routes
### Authentication Routes

#### Login
- POST _/_

- Body
```json
{
  "email": "user@myemail.com",
  "password": "mypassword"
}
```

- Response
```json
jwtrandomtoken
```
---

### Companies Routes

#### Create Company
- POST _/companies_

- Body
```json
{
  "name": "company name",
}
```

#### Get companies from the logged in user
- GET _/companies_

- Response
```json
[
    {
      "_id":"company unique ID",
      "name": "company name",
    },
    {...}
]
```

### Units Routes

#### Create Unity
- POST _/units/:companyId_

- Body
```json
{
  "name": "unity name",
}
```

#### Get units from a specific company
- GET _/units/:companyId_

- Response
```json
[
    {
      "_id":"unit unique id",
      "name": "unit name",
      "companyId": "company id",
      "assets": [
        {
            "_id":"asset unique id",
            "title": "asset title",
            "image": "asset image link",
            "description": "asset description",
            "model": "asset model",
            "unityId": "asset unit id",
            "owner": "asset owner user Id"
        },
        {...}
      ],
    },
    {...}
]
```

## Authors
### Bruno Ruotolo

[![GitHub](https://img.shields.io/badge/-BrunoRuotolo-black?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/bruno-ruotolo/)]([https://www.linkedin.com/in/bruno-amaral-ruotolo-295876186/](https://github.com/bruno-ruotolo/))
[![Gmail Badge](https://img.shields.io/badge/-brunoaruotolo@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:)](mailto:brunoaruotolo@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-brunoamaralruotolo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-amaral-ruotolo-295876186/)](https://www.linkedin.com/in/bruno-amaral-ruotolo-295876186/)
