<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<canvas></canvas>
<script>
    window.onload = function () {
        const canvas = document.getElementsByTagName('canvas')[0]
        const ctx = canvas.getContext("2d");
        const w = document.documentElement.clientWidth;
        const h = document.documentElement.clientHeight;
        canvas.width = w;
        canvas.height = h;
        let mols = []
        function  init() {
            let mol = new generate_mol(1)
            mols.push(mol);
        }
        function draw(){
            canvas.width = canvas.width;
            for(var i=0;i<mols.length;i++){
                var m = mols[i];
                m.draw();
            }
        }
        function  generate_mol(mol) {
            this.x = w*0.3;
            this.y = h*0.3;
            this.r = Math.random()*Math.PI;
            this.draw = function() {
                ctx.fillStyle = "rgba(0,0,0,0.5)";
                ctx.font = "15px Arial";
                ctx.fillText("A", this.x+40 , this.y+80);

                ctx.save();
                ctx.translate(this.x + 20, this.y + 30);
                ctx.rotate(Math.PI * 0.17);
                ctx.translate(-this.x + 20, -this.y - 80);
                ctx.beginPath();
                ctx.moveTo(this.x, this.y + 30);
                ctx.lineTo(this.x - 26, this.y + 45);
                ctx.lineTo(this.x - 26, this.y + 75);
                ctx.lineTo(this.x, this.y + 90);
                ctx.lineTo(this.x + 26, this.y + 75);
                ctx.lineTo(this.x + 26, this.y + 45);
                ctx.lineTo(this.x, this.y + 30);
                ctx.moveTo(this.x - 20, this.y + 47);
                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.fillStyle = "rgba(0,0,0,0.5)";
                ctx.font = "15px Arial";
                ctx.fillText("B", this.x , this.y+70);
                ctx.closePath();
                ctx.restore()

                ctx.save();
                ctx.translate(this.x + 68, this.y + 56);
                ctx.rotate(Math.PI * 0.17);
                ctx.translate(-this.x + 20, -this.y - 80);
                ctx.beginPath();
                ctx.moveTo(this.x, this.y + 30);
                ctx.lineTo(this.x - 26, this.y + 45);
                ctx.lineTo(this.x - 26, this.y + 75);
                ctx.lineTo(this.x, this.y + 90);
                ctx.lineTo(this.x + 26, this.y + 75);
                ctx.lineTo(this.x + 26, this.y + 45);
                ctx.lineTo(this.x, this.y + 30);
                ctx.moveTo(this.x - 20, this.y + 47);
                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.closePath();
                ctx.restore()

                ctx.save();
                ctx.translate(this.x + 66, this.y + 110);
                ctx.rotate(Math.PI * 0.17);
                ctx.translate(-this.x + 20, -this.y - 80);
                ctx.beginPath();
                ctx.moveTo(this.x, this.y + 30);
                ctx.lineTo(this.x - 26, this.y + 45);
                ctx.lineTo(this.x - 26, this.y + 75);
                ctx.lineTo(this.x, this.y + 90);
                ctx.lineTo(this.x + 26, this.y + 75);
                ctx.lineTo(this.x + 26, this.y + 45);
                ctx.lineTo(this.x, this.y + 30);
                ctx.moveTo(this.x - 20, this.y + 47);
                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.closePath();
                ctx.restore()

                ctx.save();
                ctx.translate(this.x + 20, this.y + 135);
                ctx.rotate(Math.PI * 0.17);
                ctx.translate(-this.x + 20, -this.y - 80);
                ctx.beginPath();
                ctx.moveTo(this.x, this.y + 30);
                ctx.lineTo(this.x - 26, this.y + 45);
                ctx.lineTo(this.x - 26, this.y + 75);
                ctx.lineTo(this.x, this.y + 90);
                ctx.lineTo(this.x + 26, this.y + 75);
                ctx.lineTo(this.x + 26, this.y + 45);
                ctx.lineTo(this.x, this.y + 30);
                ctx.moveTo(this.x - 20, this.y + 47);
                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.closePath();
                ctx.restore()
                //
                ctx.save();
                ctx.translate(this.x -27,this.y + 108);
                ctx.rotate(Math.PI * 0.17);
                ctx.translate(-this.x + 20, -this.y - 80);
                ctx.beginPath();
                ctx.moveTo(this.x, this.y + 30);
                ctx.lineTo(this.x - 26, this.y + 45);
                ctx.lineTo(this.x - 26, this.y + 75);
                ctx.lineTo(this.x, this.y + 90);
                ctx.lineTo(this.x + 26, this.y + 75);
                ctx.lineTo(this.x + 26, this.y + 45);
                ctx.lineTo(this.x, this.y + 30);
                ctx.moveTo(this.x - 20, this.y + 47);
                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.closePath();
                ctx.restore()

                ctx.save();
                ctx.translate(this.x -26, this.y + 56);
                ctx.rotate(Math.PI * 0.17);
                ctx.translate(-this.x + 20, -this.y - 80);
                ctx.beginPath();
                ctx.moveTo(this.x, this.y + 30);
                ctx.lineTo(this.x - 26, this.y + 45);
                ctx.lineTo(this.x - 26, this.y + 75);
                ctx.lineTo(this.x, this.y + 90);
                ctx.lineTo(this.x + 26, this.y + 75);
                ctx.lineTo(this.x + 26, this.y + 45);
                ctx.lineTo(this.x, this.y + 30);
                ctx.moveTo(this.x - 20, this.y + 47);
                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.closePath();
                ctx.restore()
            }
        }
        init()
        draw()
    }
</script>
</body>
</html>