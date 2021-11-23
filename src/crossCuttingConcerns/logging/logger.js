export class BaseLogger{
    log(data){
        console.log("Default logger" + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){        
        console.log("Log to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){        
        console.log("Log to Mongo" + data)
    }
}

//02:43'te kaldı