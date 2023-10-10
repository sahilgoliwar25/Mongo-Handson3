const express = require("express");
const app = express();
const port = 5000;
const connectToDB = require("./db/connection");
const routes = require("./routes/routes");
require("dotenv").config();
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send(
    '<html><body>https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1640781204638-employee.json <br/>Create a database , give it name like "Human_Resource". Create a collection inside this named "employee" <br/><br/> 1. Query the collection "employee" and list all the documents <br/> 2. Query the collection "employee" and list the employees who are having salary more than 30000 <br/> 3. Query the collection "employee" and list the employees who are having experience more than 2 years. <br/>4. Query the collection employee" and list the employees who are graduated after 2015 and having experience more than 1 year <br/>5. Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000. <br/>6. Delete all the documents from "employee" where last company is Y<br/><br/><br/>-> route to "http://localhost:5000/api/" and then use query followed by the query number to see the output. Eg- /query1, /query2, etc <br/><br/></body></html>'
  );
});
const startConnection = async () => {
  try {
    await connectToDB(process.env.mongo_uri);
    //below line is optional
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startConnection();

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
