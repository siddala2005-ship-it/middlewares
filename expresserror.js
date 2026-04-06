class ExpressError extends Error{
    constructor(status,message){
        super()
        this.statue=status;
        this.message=message;

    }
}
module.exports=ExpressError;