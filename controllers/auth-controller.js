
//HOME LOGIC

const home = async(req, res) => {

    try{
   res
      .status(200)
      .send("Welcome to world best mern series by thapa technical using router"
      );
  } catch (error){
     console. log(error);
  }
}

//REGISTRATION LOGIC
const register = async(req, res) => {
    try {
        res.status(200).send("Registration Page");
    } catch (error) {
        res.status(400).send({"page not found"})
    }
 }

module.exports = { home , register };