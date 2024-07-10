# 🍴 What’s in your fridge: A Combination of Recipes and Shopping
![image](https://github.com/zzgh06/cooking-recipe-be/assets/127922435/b549bfe3-30e2-4195-9399-683b292fbfee)
What’s in your fridge is a website where users can browse various recipes and easily purchase the necessary ingredients.
>
<br>

### Development Period

- Total development period: 2024-06-16 ~ 2024-06-30
- Backend implementation: 2022-06-18 ~ 2022-06-27
- Frontend and functionality implementation: 2022-06-18 ~ 2022-06-30

### Deployment Links

><div>Frontend Server: https://whats-is-your-fridge.netlify.app/</div>
>Backend Server: http://what-is-your-fridge.us-east-1.elasticbeanstalk.com/
<br>

### Test Account

- **Test ID**: admin@gmail.com
- **Test PW**: 123

## Project Introduction

**What’s in your fridge** was planned to eliminate the hassle of searching for recipes on multiple sites and separately purchasing the ingredients needed for cooking.
- Helps users easily search for cooking recipes and purchase the necessary ingredients directly,
- Through the My Fridge feature, it recommends recipes using ingredients that the user already has.
- Allows various users to rate and comment on their favorite recipes or products.
<br>

## Team Members

|Lee Jeong Woo|Jung Sung Wook|Choi Chung Hyun|Oh Hye Rim|
|:------:|:---:|:---:|:-----:|
|[@leejeongwoo1](https://github.com/leejeongwoo1/leejeongwoo1)|[@SungJung0616](https://github.com/SungJung0616)|[@zzgh06](https://github.com/zzgh06)|[@ohloara](https://github.com/ohloara)|
<br>

## Getting Started

1. Clone the repository
    ```sh
    git clone git@github.com:zzgh06/cooking-recipe-be.git
    ```
2. Install packages
    ```sh
    cd cooking-recipe-be
    npm install
    ```
3. Set environment variables
    ```
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```
4. Start the local server
    ```sh
    npm run local_start
    ```
<br>

## 📚 STACKS
### Environment
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
### Config
<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white">

### Development
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
### Deployment
<img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"> <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7">
<br>
<br>

## Adopted Development Technologies and Branch Strategy

**React**

- Componentized to consider future maintenance and reusability.
- With many parts being used repeatedly such as user banners, top and bottom banners, resource savings were possible through componentization.

**Redux Toolkit**

- Simplified state management by using Redux Toolkit.
- Redux Toolkit reduces boilerplate code and simplifies setup compared to traditional Redux, reducing learning costs.
- Efficiently managed state and asynchronous logic using createSlice and createAsyncThunk.

## Branch Strategy

- Operated master, develop, and feature sub-branches based on Git-flow strategy.
- The master branch is used only at the deployment stage.
- The develop branch acts as the master branch during the development phase in git-flow.
- Feature branches were used for independent development environments by function unit, and each branch was deleted after merging.

## Project Structure

### Backend

### Backend Folder Structure

[cooking-recipe-be.md](./cooking-recipe-be.txt)

### Backend ERD

![ERD](./public/image/erd.png)

### API

- ![API Auth](./public/image/api_auth.png)
- ![API User](./public/image/api_user.png)
- ![API Fridge](./public/image/api_frige.png)
- ![API Ingredient](./public/image/api_ingredient.png)
- ![API Recipe](./public/image/api_recipe.png)
- ![API Cart](./public/image/api_cart.png)
- ![API Review Recipe](./public/image/api_review_recipe.png)
- ![API Review Ingredient](./public/image/api_reivew_ingredient.png)
- ![API Order](./public/image/api_order.png)

## Frontend

### Frontend Folder Structure

[cooking-recipe-fe.md](./cooking-recipe-fe.txt)

## Screenshots

|Recipe Page|Recipe Detail Page|
|:------:|:------:|
|![image](https://github.com/zzgh06/cooking-recipe-be/assets/127922435/67fffb80-cd5b-4b85-97ea-4a66c17d8e58)|![image](https://github.com/zzgh06/cooking-recipe-be/assets/127922435/fc0316fc-6b81-485b-9804-4662433d00b0)|

|Store Page|Store Detail Page|
|:---:|:------:|
|![image](https://github.com/zzgh06/cooking-recipe-be/assets/127922435/b5937626-ae3d-43c7-9e29-7ef02f6b5c28)|![image](https://github.com/zzgh06/cooking-recipe-be/assets/127922435/6a69d98e-8a16-4105-b4a7-b8d2ef44f498)|

|My Fridge Page|Admin Page|
|:------:|:------:|
|![image](https://github.com/zzgh06/cooking-recipe-be/assets/127922435/39273759-b8a2-4ac5-94dd-c5e5e8fb526b)|![image](https://github.com/zzgh06/cooking-recipe-be/assets/127922435/4dde076d-63e9-4655-9a11-d961d5a36ad2)|
<br>

## ⭐ Key Features 
  ### 1. Recipe Management
  - Search and write various recipes
  - View detailed recipe information
  ### 2. Ingredient Management
  - Add required ingredients to the cart
  - Purchase ingredients
  ### 3. Fridge Management
  - Manage fridge ingredients
  - Recommend recipes using ingredients in the fridge
  ### 4. Review and User Management
  - Write reviews for recipes and ingredients
  ### 5. Chatbot
  - Inquiry function
<br>

## How to Use
1. Search for the desired recipe on the homepage.
2. Click on the recipe to view detailed information.
3. Add the necessary ingredients to the cart.
4. Register the ingredients you have in My Fridge and check the recommended recipes.
5. Go to the cart page to purchase ingredients.
6. Check the order status on the My Page.
<br>
