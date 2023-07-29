import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, ProjectsState, ProjectsActions } from "./reducer";

const ProjectsStateContext = createContext<ProjectsState | undefined>(undefined);

// Next, I'll define our ProjectsProvider component, and make this 
// ProjectsStateContext available using context Provider.
type ProjectsDispatch = React.Dispatch<ProjectsActions>;

// Using createContext function, we will create a context 
// called `ProjectsDispatchContext`. Let's say the shape of this new 
// context object is ProjectsDispatch (which I'll define now, wait for it).
// I've set the default value to undefined.

const ProjectsDispatchContext = createContext<ProjectsDispatch | undefined>(undefined);

export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    // Here, I'll use the useReducer hook to manage state. I've passed the `reducer`  
    // function and the `initialState` that I've defined in the reducer.ts file.

    const [state, dispatch] = useReducer(reducer, initialState);

    // Then, I'll pass the `state` object as value of this ProjectsStateContext

    return (
        <ProjectsStateContext.Provider value={state}>
            <ProjectsDispatchContext.Provider value={dispatch}>
                {children}
            </ProjectsDispatchContext.Provider>
        </ProjectsStateContext.Provider>
    );
};

export const useProjectsState = () => useContext(ProjectsStateContext);

export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);