import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import {schema} from "./schemas/schema";
import expressPlayground from 'graphql-playground-middleware-express';
import dotenv from 'dotenv';
import {roots} from "./roots";
import helmet from "helmet";

// dotenv used to create hidden enviroment/client variables for security
dotenv.config()

const app = express()

const isProd = process.env.NODE_ENV === 'production'

//helmet help set up request allowed request header
app.use(helmet({
    contentSecurityPolicy: isProd,
    crossOriginEmbedderPolicy: isProd
}))

//creating /graphql endpoint with setting for it correct working
app.all('/graphql',
    createHandler({ rootValue: roots, schema })
);

//graphql api playground run in localhost:port/playground
const graphQLPlayground: Object = expressPlayground;
const defaultPlayground: Function  = graphQLPlayground.default
app.get('/playground', defaultPlayground({ endpoint: '/graphql' }))

const PORT = 8000

app.listen(PORT)

console.log(`Listening to port ${PORT}`);
