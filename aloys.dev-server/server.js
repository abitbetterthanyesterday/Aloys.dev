const express = require('express');
// const path = require('path');

const app = express();

const PORT = 3000 || process.env.port;

app.get('/', (req, res) => {
})

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
