class Game{
constructor(){

}
display(){

}
start(){
form=new Form()
form.display()
player=new Player
playerCount=player.getCount()

}
play(){
  Player.GetplayersInfo()
  if(allPlayers!==undefined){
      var index=0
      for(var plr in allPlayers){
          index+=1
          var x=allPlayers[plr].SX
          var y=allPlayers[plr].SY
          soldiers[index-1].SX=x
          soldiers[index-1].SY=y
          if(index===player.index){
            stroke(15)
            fill("red")
            ellipse(x,y,70,70)
        }
        
      }
      this.playerControl()
  }


}

playerControl(){
    if(keyDown("Up")){
        player.SY-=10
        player.updateThings()
        }
}
}