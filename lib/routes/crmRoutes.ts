// /lib/routes/crmRoutes.ts
import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";



export class Routes {    
    public contactController: ContactController = new ContactController();
    
    public routes(app): void {  
        
        // Create a new contact
        app.route('/contact')
        .post(this.contactController.addNewContact);

        // Get all contects 
        app.route('/contact')
        .get(this.contactController.getContacts);

        // get a specific contact
        app.route('/contact/:contactId')
        .get(this.contactController.getContactWithID);
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
       
    }
}