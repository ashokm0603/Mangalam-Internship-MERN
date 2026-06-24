const express = require("express");
const app = express();
const PORT = 5000;

const cors = require("cors");

app.use(express.json());
app.use(cors());

// mongodb Cluster Link
const mongoDB_URL =
  "mongodb://admin:admin@ac-x3veeoc-shard-00-00.7rwanir.mongodb.net:27017,ac-x3veeoc-shard-00-01.7rwanir.mongodb.net:27017,ac-x3veeoc-shard-00-02.7rwanir.mongodb.net:27017/?ssl=true&replicaSet=atlas-d657yl-shard-0&authSource=admin&appName=Ecommerce";

const mongoose = require("mongoose");

//MongoDB connection logic
mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log("Failed to Connect DB", err);
  });

//define user Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
});
//define user Model
const userModel = mongoose.model("users", userSchema);

//define Products Schema
const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  price: { type: String, required: true, unique: true },
  ratings: { type: String, required: true },
  description: { type: String, required: true },
});
//define Products Model
const productsModel = mongoose.model("products", productSchema);

//post or add users api
app.post("/add-user", async (req, res) => {
  try {
    const addedUser = await userModel.insertOne(req.body);
    res.status(200).json({ message: "new user added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to add new record" });
  }
});

//post or add product api
app.post("/add-product", async (req, res) => {
  try {
    const addedProduct = await productsModel.insertOne(req.body);
    res.status(200).json({ message: "Produced added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to add product" });
  }
});

//get users api
app.get("/get-users", async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.status(200).json({ message: "working", allUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to get Users" });
  }
});

//get products api
app.get("/get-products", async (req, res) => {
  try {
    const allProducts = await productsModel.find();
    res.status(200).json({ message: "working", allProducts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to get Products" });
  }
});

//delete user based on ID API  :  http://localhost:5000/delete-user/51325
app.delete("/delete-user/:id", async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Deleted Successfully",
      deletedUserDetails: deletedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("failed to delete User");
  }
});

//delete Product based on ID API
app.delete("/delete-product/:id", async (req, res) => {
  try {
    const deletedProduct = await productsModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Deleted Successfully",
      deletedProductDetails: deletedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "failed to delete product" });
  }
});

//Update User Details based on ID
app.put("/update-user/:id", async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res
      .status(200)
      .json({
        message: "Updated successfully",
        updatedUserDetails: updatedUser,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update Details" });
  }
});

//Update User Details based on ID
app.put("/update-product/:id", async (req, res) => {
  try {
    const updatedProduct = await productsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res
      .status(200)
      .json({
        message: "Updated successfully",
        updatedProductDetails: updatedProduct,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update Details" });
  }
});

// get User Based On ID

app.get("/get-user/:id", async (req, res) => {
  try {
    const foundUser = await userModel.findById(req.params.id);
    res.status(200).json({ foundUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed get user" });
  }
});

// client can send data to server in [body , header , params , query]

//create Server using Express
app.listen(PORT, () => {
  console.log("Server Running on Port:", PORT);
});
