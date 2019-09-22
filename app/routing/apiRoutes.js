const friendsData = require("../data/friends");


module.exports = (app) => {

  
  app.get("/api/friends", (req, res) => {
  
    res.json(friendsData)
  
  });
  
  
  app.post("/api/friends", (req, res) => {
  
    let newFriend = req.body
  
  
  });

}
