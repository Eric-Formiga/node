module.exports = {

 posts : [
    {
      id:"amwkdma",
      title:"teste do mural",
      description: "Descrição do teste"
    }
  ],

  getAll(){
    return this.posts
  },

  newPost(title,description){
    this.posts.push({id:generateID(),title,description})
  },

  deletePost(id){
    
  }


}
function generateID(){
  return Math.random()
  }