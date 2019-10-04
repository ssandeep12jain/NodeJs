import  express from "express";
import  bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import  mongoose from "mongoose";
import swaggerUi from "swagger-ui-express"
import * as swaggerDocument from './swagger.json'

class App {

    public mongoUrl: string = 'mongodb://localhost/CRMdb'; 
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config(); 
        this.routePrv.routes(this.app);  
        this.mongoSetup();  
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
        this.app.use('/api/v1', this.app.route);      
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
      //  mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

}

export default new App().app;