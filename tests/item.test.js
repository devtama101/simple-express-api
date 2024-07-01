require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app'); // Ensure this path is correct
const http = require('http');

let server;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    server = http.createServer(app);
    server.listen(4000); // Use a different port for testing
});

afterAll(async () => {
    await mongoose.disconnect();
    server.close();
});

describe('Items API', () => {
    it('should fetch all items', async () => {
        const res = await request(server).get('/items');
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('should create a new item', async () => {
        const res = await request(server)
            .post('/items')
            .send({ name: 'Test Item', price: 9.99 });
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty('_id');
    });

    // Add more tests for other endpoints as needed
});
