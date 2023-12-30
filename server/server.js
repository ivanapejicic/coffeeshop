const express = require('express');
const app = express();
const cors = require('cors');
const pointsData = require('./routes/points');

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use('/points', userData); 


app.listen(PORT, console.log(`Server is running on port ${PORT}`));

