const {Schema,model}=require('mongoose')
const bcrypt=require('bcrypt')

let userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false    
    }
})


userSchema.pre('save',async function(){
    let salt=await bcrypt.genSalt(10)
    // console.log(salt);
    this.password=await bcrypt.hash(this.password, salt)
})


userSchema.methods.comparePasswords=async function (pass) {
    return bcrypt.compare(pass,this.password)
}

module.exports=model("user",userSchema)