const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.set('port', process.env.PORT || 3000);
const io = require(__dirname + '/socketio_custom_setup.js');
import GridLayout from 'react-grid-layout';
app.get("/", (req, res) => {
  res.send(
  class MyFirstGrid extends React.Component {
    render() {
      // layout is an array of objects, see the demo for more complete usage
      var layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];
      return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key="a">a</div>
          <div key="b">b</div>
          <div key="c">c</div>
        </GridLayout>
      )
    }
  });
});
server.listen(app.get('port'), function() {
  console.log(`listening on ${app.get('port')}`);
});
io.attach(server); //activates websockets for server.
