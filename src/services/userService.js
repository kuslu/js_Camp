import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{
    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidtyForErrors(user)){
                        this.customers.push(user)                    
                    }
                    break;                    
                case "employee":
                    if(!this.checkEmployeeValidtyForErrors(user)){
                        this.employees.push(user)                    
                    }
                    break;            
                default:
                    this.errors.push(new DataError("wrong user type",user))
                    break;
            }
            
        }

    }

    checkCustomerValidtyForErrors(user){
        let requiredFields = "id firstName lastName city age".split(" ") // Bu otomatikmen bir arraye çevirmiş oluyor yani => ["id","firstName", ....] halini almış oluyor
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem. ${field} is required`,user))
            }
        }
        if(Number.isNaN(Number.parseInt(+user.age))){
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a age`,user))
            hasErrors=true
        }
        return hasErrors

    }

    checkEmployeeValidtyForErrors(user){
        let requiredFields = "id firstName lastName city age salary".split(" ") // Bu otomatikmen bir arraye çevirmiş oluyor yani => ["id","firstName", ....] halini almış oluyor
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem. ${field} is required`,user))
            }
        }
        if(Number.isNaN(Number.parseInt(+user.age))){
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a age`,user))
            hasErrors=true
        }
        return hasErrors

    }

    add(user){
        //this.users.push(user)
        switch (user.type) {
            case "customer":
                if(!this.checkCustomerValidtyForErrors(user)){
                    this.customers.push(user)                    
                }
                break;
            case "employee":
                if(!this.checkEmployeeValidtyForErrors(user)){
                    this.employees.push(user)                    
                }
                    break;            
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type",user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers(){
        return this.customers

    }

    getCustomerById(id){
        return this.customers.find(u=>u.id === id)
    }

    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{if(customer1.firstName<customer2.firstName){
            return 1;
        } else if(customer1.firstName===customer2.firstName){
            return 0;
        } else {
            return -1
        }
        })
    }
}