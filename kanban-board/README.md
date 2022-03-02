# KANBAN BOARD

Minimal Kanban board on which you can create and view tickets.
Developed with:

- React
- Material UI
- React-beautiful-dnd
- JSON Server

- ### SERVER SIDE

The server side is quickly mocketed thanks to [JSON Server](https://github.com/typicode/json-server)
The main endpoints are _*/columns*_ and _*/tasks*_.
It is launched on port 3001

```sh
$ cd kanban-board
$ npm run server
```

Open [http://localhost:3001/columns](http://localhost:3001/columns) to view it in the browser all columns data.

- ### CLIENT SIDE / FRONT-END
  To run it, we must launch the following commands inside the folder:

```sh
$ cd kanban-board
$ npm install
$ npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Finally, you will show the complete app in [http://localhost:3000](http://localhost:3000)
