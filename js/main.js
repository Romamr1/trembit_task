var params = {
    lines:
    [
        {
            background: '#00F',
            updateTime: 1000,
            elements: [{
                  background: '#111',
                  width: 30
              },
              {
                  background: '#666',
                  width: 40
              },
              {
                  background: '#aaa',
                  width: 30
              }
            ]
        },
        {
          background: '#F00',
          updateTime: 2000,
          elements: [{
              background: '#00F',
              width: 25
            },
            {
              background: '#F00',
              width: 50
            },
            {
              background: '#0F0',
              width: 25
            }
          ]
        },
        {
            background: '#00F',
            updateTime: 3000,
            elements: [{
                  background: '#111',
                  width: 30
              },
              {
                  background: '#666',
                  width: 40
              },
              {
                  background: '#aaa',
                  width: 30
              }
            ]
        }
    ]
};

var countLine = params.lines.length;
var height = document.documentElement.clientHeight/params.lines.length;
var body = document.getElementById('container');
for (var i = 0; i < params.lines.length; i++) {
  var lineElem = createLine(params.lines[i],i);
  body.appendChild(lineElem);
}

function createLine(line,num) {
  var curentLine = document.createElement('div');
  curentLine.setAttribute('id','line' + num);
  curentLine.style.height = height + 'px';
  curentLine.style.width = 'inherit';
  curentLine.style.background = line.background;

  for (var j = 0; j < line.elements.length; j++) {
    var elem = createElem(line.elements[j]);
    curentLine.appendChild(elem);
  }
  return curentLine;
};

function createElem(data) {
  var element = document.createElement('div');
  element.style.width = data.width + '%';
  element.style.background = data.background;
  element.style.height = 'inherit';
  element.style.float = 'left';
  return element;
};

function randomColor(){
  return '#' + (Math.round(Math.random()*16777215)).toString(16);
};

for (var i = 0; i < params.lines.length; i++) {
  func(i);
  function func(i) {

    setTimeout(setRandomcolor,params.lines[i].updateTime);

    function setRandomcolor() {
      var curentElements = document.querySelectorAll('#line' + i + ' div');      
      for (var r = 0; r < curentElements.length; r++) {
        curentElements[r].style.background = randomColor();
      };
      setTimeout(setRandomcolor,params.lines[i].updateTime);
    }
  }
}
