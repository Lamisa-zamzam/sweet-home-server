const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectID;
const port = 5000;
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hwuiv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

client.connect((err) => {
    const houseCollection = client.db(process.env.DB_NAME).collection("houses");
    const adminCollection = client.db(process.env.DB_NAME).collection("admins");
    const orderCollection = client.db(process.env.DB_NAME).collection("orders");
    console.log("db connected");

    app.post("/addHouse", (req, res) => {
        const {
            description,
            price,
            title,
            img,
            address,
            shortDesc,
            serviceCharge,
            securityDeposit,
            flatSize,
            floor,
            roomCategory,
            facilities,
            addFacilities,
        } = req.body;
        const house = {
            description,
            price,
            title,
            address,
            shortDesc,
            serviceCharge,
            securityDeposit,
            flatSize,
            floor,
            roomCategory,
            facilities,
            addFacilities,
        };
        console.log(house);
        houseCollection.insertOne(house).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    app.post("/makeAdmin", (req, res) => {
        const { email } = req.body;
        const admin = { email };
        adminCollection.insertOne(admin).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    app.get("/houses", (req, res) => {
        houseCollection.find({}).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.get("/checkIfAdmin", (req, res) => {
        const email = req.query.email;
        adminCollection.find({ email: email }).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.get("/house/:id", (req, res) => {
        const id = ObjectId(req.params.id);
        houseCollection.find({ _id: id }).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.get("/house", (req, res) => {
        const houseName = req.query.houseName;
        houseCollection
            .find({ houseName: houseName })
            .toArray((err, documents) => {
                res.send(documents);
            });
    });

    app.get("/bookings/:email", (req, res) => {
        const email = req.params.email;
        adminCollection.find({ email: email }).toArray((err, documents) => {
            if (documents[0]) {
                orderCollection.find({}).toArray((err, documents) => {
                    res.send(documents);
                });
            } else {
                orderCollection
                    .find({ email: email })
                    .toArray((err, documents) => {
                        res.send(documents);
                    });
            }
        });
    });

    app.post("/placeOrder", (req, res) => {
        const orderDetail = req.body;
        orderCollection.insertOne(orderDetail).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    app.patch("/updateOrder/:id", (req, res) => {
        orderCollection
            .updateOne(
                { _id: ObjectId(req.params.id) },
                {
                    $set: { status: req.body.status },
                }
            )
            .then((result) => {
                res.send(result.modifiedCount > 0);
                console.log(result);
            });
    });

    app.delete("/deleteHouse/:_id", (req, res) => {
        const _id = ObjectId(req.params._id);
        console.log(_id);
        houseCollection.deleteOne({ _id: _id }).then((result) => {
            console.log(result.deletedCount);
            res.send(result.deletedCount > 0);
        });
    });
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
