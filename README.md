# Alura - React Course
This project was developed in Alura's course (React Course: REACT: WRITING WITH TYPESCRIPT)
The project was developed following the course classes, I made some changes, such as using context instead of passing all functions and attributes via props.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/andresinho20049/alura-studies/blob/master/README.pt-br.md)

## Available commands

In the terminal, inside the project folder, you can execute:

### `npm start`

Run the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

The page will be reloaded as soon as any changes are made.\
You can also see any errors in the console.

### `npm run build`

Builds the application for production in the `build`.\ folder
It correctly bundles React in production mode and optimizes the build for the best performance.

Compilation is minified and file names include hashes.\
Your app is ready to be deployed!

## Course activities
The development of the project consisted mainly of exploring the interaction and state management of different components, somehow forcing an interaction between them.

The project was started with the command `npx create-react-app --template typescript alura-studies`, this made it possible to create the project together with the course instructor and follow the development by following it in classes.

Even though I already had previous experience with developing projects in React, I found it interesting to take the classes in this course, as at times a little bit of the history of React was covered, how it was initialized, what the needs were, we created class components in sets and of functions, covering the differences and the advantages of using function components and also oriented to precisely use function components, as component classes are being discontinued by the React community.

In the course, all state functions were developed in the App component (Parent Component) and all states were passed via props
I don't really like this approach, especially when a prop is passed through more than one level, so I developed the project using context.

```ts
type ITarefaData = {
  tarefas: TarefaType[];
  getSelected: TarefaType | undefined;
  handlerAddNewTarefa: (tarefa: TarefaType) => void;
  selectTarefa: (id: string) => void;
  finishTarefa: () => void;
  isTiming: boolean;
  setIsTiming: (isTiming: boolean) => void;
};

export const TarefaContext = createContext({} as ITarefaData);

export const useTarefaContext = () => {
  return useContext(TarefaContext);
};

type ITarefaProviderProps = {
  children: ReactNode;
};

export const TarefaProvider = ({ children }: ITarefaProviderProps) => {
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);
  const [isTiming, setIsTiming] = useState<boolean>(false);

  ...

  return (
    <TarefaContext.Provider value={{tarefas, getSelected, handlerAddNewTarefa, selectTarefa, finishTarefa, isTiming, setIsTiming}}> 
      {children}
    </TarefaContext.Provider>
  );
};
```
**tarefas** is used to pass the list of tasks, so in the list component, I can get this value from the context and iterate the list `tasks.map(t => <li>t</li>)` \
**getSelected** I used the term get because this value is a return from the useMemo hook, where I can get the selected item in the list \
**handlerAddNewTarefa** is the function that adds a new task to the list \
**selectTarefa** this function was added to the `<li>` onClick event, so when the element is clicked, this function is executed, defining the task selected in the list. \
**finishTarefa** this function is triggered after the timer resets, and then the selected task, identified by getSelected, is finished \
**isTiming & setIsTiming** are states added to ensure that a task cannot be selected if the timer is running. \

I kept the name *TASK* in Portuguese, even though the code was written in English, as I saw this name as my own name, being part of the project's business rule. This makes it easier for project stackholders and devs to communicate.

> Developer André Carlos \
> Project: Alura - React Course \
> [Click here to view the certificate](https://cursos.alura.com.br/user/andre-oliveira-98/course/react-modernizando-escrever-typescript/certificate)