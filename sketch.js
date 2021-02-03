const World = Matter.World;
const Bodies = Matter.Bodies
const Engine = Matter.Engine
const Constraint = Matter.Constraint

var engine,world;
var ground
var superhero
var rope
var backgroundImg

function preload() {
    backgroundImg = loadImage("images/GamingBackground.png");
}

function setup(){

    createCanvas(1600,800)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1600,30)

    box1 = new Box(900,550,70,70)
    box2 = new Box(900,480,70,70)
    box3 = new Box(900,410,70,70)
    box4 = new Box(900,340,70,70)
    box5 = new Box(900,280,70,70)
    box6 = new Box(900,210,70,70)
    box7 = new Box(900,140,70,70)

    box8 = new Box(1000,550,70,70)
    box9 = new Box(1000,480,70,70)
    box10 = new Box(1000,410,70,70)
    box11 = new Box(1000,340,70,70)
    box12 = new Box(1000,280,70,70)
    box13 = new Box(1000,210,70,70)
    box14 = new Box(1000,140,70,70)
    box15 = new Box(1000,80,70,70)

    box16 = new Box(1100,550,70,70)
    box17 = new Box(1100,480,70,70)
    box18 = new Box(1100,410,70,70)
    box19 = new Box(1100,340,70,70)
    box20 = new Box(1100,280,70,70)
    box21 = new Box(1100,210,70,70)
    box22 = new Box(1100,140,70,70)

   superhero= new Hero(200,200,50)

    rope = new Chain(superhero.body, {x:800, y:80})

}
 function draw(){
     
    background(backgroundImg);
    Engine.update(engine)
 
    ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
superhero.display()
rope.display()

 }
 
 function mouseDragged(){

    Matter.Body.setPosition(superhero.body , {x:mouseX , y: mouseY})
 }