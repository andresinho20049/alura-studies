import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { TarefaType } from "../types/tarefaType";

type ITarefaData = {
  tarefas: TarefaType[];
  getSelected: TarefaType | undefined;
  handlerAddNewTarefa: (tarefa: TarefaType) => void;
  selectTarefa: (id: string) => void;
  finishTarefa: () => void;
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

  const getSelected = useMemo(() => {
    return tarefas.find((t) => t.selecionado);
  }, [tarefas]);

  const handlerAddNewTarefa = useCallback(
    (tarefa: TarefaType) => {
      setTarefas([...tarefas, tarefa]);
    },
    [tarefas]
  );

  const selectTarefa = useCallback((id: string) => {
    setTarefas((tarefasOld) =>
      tarefasOld.map((t) => ({
        ...t,
        selecionado: t.id === id,
      }))
    );
  }, []);

  const finishTarefa = useCallback(() => {
    setTarefas((tarefasOld) =>
      tarefasOld.map((t) => {
        if (t.id === getSelected?.id)
          return {
            ...t,
            selecionado: false,
            completado: true,
          };

        return t;
      })
    );
  }, [getSelected]);

  return (
    <TarefaContext.Provider
      value={{
        tarefas,
        getSelected,
        handlerAddNewTarefa,
        selectTarefa,
        finishTarefa,
      }}
    >
      {children}
    </TarefaContext.Provider>
  );
};
