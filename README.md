## E-commerce  rest  api  ###

#### I have tried to develop rest based simple shopping cart app.
##### Here I have tried to cover 5 features.

       1. Authentication 
       2. Authorization
       3. Products
       4. Orders
       5. Carts 
       
            
1. I have used json web token (*jwt*) for token based authentication.
   And verified token with express router middleware with every request.
   Generated token verified by jwt secret which is put in *.gitignore* file.
   Token validity is **1 day**. 
   
2. I have picked node.js and express for api development as I did other projects in node.js
    and tried to follow code standards as nano degree program shown.

3. I have picked **mongoDB** instead of DynamoDB to explore other DB. 
   And mlab's [ https://mlab.com/ ] free tier is enough for this project.
        
