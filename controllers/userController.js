const Employee = require("../models/userModel");
const dataQuery = [
  {
    firstName: "John",
    lastName: "Doe",
    salary: "25000",
    department: "HR",
    lastCompany: "X",
    lastSalary: "10000",
    overallExp: "2",
    contactInfo: "1234567890",
    yearGrad: "2016",
    gradStream: "CSE",
  },
  {
    firstName: "Rohan",
    lastName: "Jame",
    salary: "30000",
    department: "Technical",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "1",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "20000",
    overallExp: "1",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "ECE",
  },
  {
    firstName: "Sao",
    lastName: "Avika",
    salary: "30000",
    department: "Sales",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "roh",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "EEE",
  },
  {
    firstName: "Rohan",
    lastName: "Jame",
    salary: "30000",
    department: "Technical",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "1",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "20000",
    overallExp: "1",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "ECE",
  },
  {
    firstName: "Sao",
    lastName: "Avika",
    salary: "80000",
    department: "Sales",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "EEE",
  },
  {
    firstName: "Rohan",
    lastName: "Jame",
    salary: "30000",
    department: "Technical",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "1",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "20000",
    overallExp: "1",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "ECE",
  },
  {
    firstName: "Sao",
    lastName: "Avika",
    salary: "30000",
    department: "Sales",
    lastCompany: "Y",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "1234567860",
    yearGrad: "2015",
    gradStream: "CSE",
  },
  {
    firstName: "Jame",
    lastName: "Doe",
    salary: "35000",
    department: "Accounts",
    lastCompany: "Z",
    lastSalary: "15000",
    overallExp: "2",
    contactInfo: "123567890",
    yearGrad: "2019",
    gradStream: "EEE",
  },
];
const options = { ordered: true };
//add new insertOne user
async function addNewUser(req, res) {
  try {
    const result = await Employee.insertMany(dataQuery, options);
    // const result = await User.create({ name: "Sahil", age: 20 });
    res.status(200).send({ msg: "data inserted", users: result });
  } catch (e) {
    console.log(e);
    res.status(500).send("error occured", { err: e });
  }
}

//find all employees
async function query1(req, res) {
  try {
    // const query =
    const result = await Employee.find();
    console.log(result);
    res.status(200).send({ msg: "List of All Employees", user: result });
  } catch (e) {
    res.status(500).send("error occured", { err: e });
  }
}

//find employees who are having salary more than 30000
async function query2(req, res) {
  try {
    const result = await Employee.find({ salary: { $gt: "30000" } });
    console.log(result);
    res.status(200).send({
      msg: "Employees who are having salary more than 30000",
      user: result,
    });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}
//find employees who are having salary more than 30000
async function query3(req, res) {
  try {
    const result = await Employee.find({ overallExp: { $gte: "2" } });
    console.log(result);
    res.status(200).send({
      msg: "Employees who are having experience more than 2 years",
      user: result,
    });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}
//find employees who are having salary more than 30000
async function query4(req, res) {
  try {
    const result = await Employee.find({
      yearGrad: { $gt: "2015" },
      overallExp: { $gt: "1" },
    });
    console.log(result);
    res.status(200).send({
      msg: "Employees who are graduated after 2015 and having experience more than 1 year",
      user: result,
    });
  } catch (e) {
    res.status(500).send("error occured", e);
  }
}

//updateOne user
async function updateUser(req, res) {
  try {
    const query = { salary: { $gt: "70000" } };
    const result = await Employee.findOneAndUpdate(
      query,
      { $set: { salary: "65000" } },
      {
        new: true,
      }
    );
    console.log(result);
    res.status(200).send({ user: result });
  } catch (e) {
    res.status(500).send("error occured", { err: e });
  }
}
//deleting Employees
async function deleteUser(req, res) {
  try {
    const result = await Employee.deleteMany({ lastCompany: "Y" });
    console.log(result);
    res.status(200).send({ mes: "Delete Employees", user: result });
  } catch (e) {
    res.status(500).send("error occured", { err: e });
  }
}
module.exports = {
  addNewUser,
  query1,
  query2,
  query3,
  query4,
  updateUser,
  deleteUser,
};
