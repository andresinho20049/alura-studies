# Alura - Curso de React
Este projeto foi desenvolvido no curso da Alura (Curso de React: REACT: ESCREVENDO COM TYPESCRIPT)
O projeto foi desenvolvido em acompanhamento as aulas do curso, realizei algumas alterações, como por exemplo a utilização de context ao inves de passar todas as funções e atributos via props.

## Começando com Create React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

[![en](https://img.shields.io/badge/lang-en-blue.svg)](https://github.com/andresinho20049/alura-studies/blob/master/README.md)

## Comandos disponiveis

No terminal estando dentro da pasta do projeto, execute:

### `npm start`

Roda o app em modo de desenvolvimento.\
Abrir [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador.

A pagina será recarregada assim que for feito alguma mudança.\
Você também pode ver qualquer erro no console.

### `npm run build`

Cria o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

## Atividades do curso
O desenvolvimento do projeto consistia principalmente de explorar a interação e gerenciamento de estado de diferentes components, forçando de certa forma uma interação entre os mesmo.

O projeto foi inicializado com o comando `npx create-react-app --template typescript alura-studies`, isso possibilitou a criação do projeto em conjunto com o instrutor do curso e seguir o desenvolvimento acompanhando o mesmo nas aulas.

Mesmo já tendo uma experiência prévia com desenvolvimento de projetos em react achei interessante a realização das aulas desse curso, pois foi abordado em alguns momentos um pouco da história do react, como foi inicializado, quais eram as necessidades, criamos em conjuntos componentes de classes e de funções, abordado as diferenças e quais as vantagens em utilizar components de funções e também orientado a justamente utilizar componentes de funções, pois classes componentes estão sendo descontinuados pela comunidade React.

No curso foi desenvolvido todas as funções de estado no component App (Component Pai) e passado todos os estados via props
Não curto muito essa abordagem, ainda mais quando uma props é passada por mais de um nivel, então desenvolvi o projeto utilizando contexto.

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

**tarefas** é utilizado para passar a lista de tarefas, então no componente lista, posso obter esse valor do contexto e fazer a iteração da lista `tarefas.map(t => <li>t</li>)` \
**getSelected** utilizei o termo get pois esse valor é um retorno do hook useMemo, onde posso obter o item selecionado na lista \
**handlerAddNewTarefa** é a função que adiciona uma nova tarefa na lista \
**selectTarefa** essa função foi adicionada no event de onClick da `<li>`, então quando o elemento for clicado, essa função é executado, definindo a tarefa selecionada na lista. \
**finishTarefa** essa função é acionada após o cronometro zerar, e então a tarefa selecionada, identificado pelo getSelected, é finalizada \
**isTiming & setIsTiming** são estados adicionados para garantir que uma tarefa não podera ser selecionada se o cronometro estiver rolando. \

Mantive o nome *TAREFA* em português, mesmo o código ter sido escrito em inglês, por encarar esse nome como um nome propria, sendo parte da regra de negocio do projeto. Assim facilita os stackholders e devs do projeto na comunicação.

> Desenvolvedor André Carlos    
> Projeto: Alura - Curso de React     
> [Click aqui para visualizar o certificado](https://cursos.alura.com.br/user/andre-oliveira-98/course/react-modernizando-escrever-typescript/certificate)
