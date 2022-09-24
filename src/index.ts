import express, { 
  Application,
  Request,
  Response,
  NextFunction
} from 'express';


const app: Application = express();
const port = 3001;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello Typescript World!")
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});