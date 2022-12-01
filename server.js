const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(url);

async function main() {
  await client.connect();

  //creating database
  const database = client.db("Human_Resource");

  //aAdding collection name as customer
  const collection = database.collection("Employee");

  //Adding the database
  const customers = [
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

  const response = await collection.insertMany(customers);

  console.log("working");
  console.log(response);
  //Query the collection "employee" and list the employees who are having salary more than 30000.
  //creating Query
  const salary = { salary: { $gt: "30000" } };

  const dataSal = await collection.find(salary).toArray();

  console.log("Salary more than 30000......", dataSal);

  //Query the collection "employee" and list the employees who are having experience more than 2 years.
  const expGtTwo = { overallExp: { $gt: "2" } };

  const dataExp = await collection.find(expGtTwo).toArray();

  console.log("Experience .... ", dataExp);

  //Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year.

  const grad = { yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } };

  const dataGrad = await collection.find(grad).toArray();

  console.log("Graduated", dataGrad);

  //.Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000.

  const updat = db.collection.updateMany(
    { salary: { $gt: "70000" } },
    { $set: { salary: "65000" } }
  );

  //Delete all the documents from "employee" where last company is Y.

  const delt = db.collection.deleteMany({ lastCompany: "Y" });
}
main();
